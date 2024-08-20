"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(jwt, users) {
        this.jwt = jwt;
        this.users = users;
    }
    async register({ fullName, email, password }) {
        const user = await this.users.findEmail(email);
        if (user)
            throw new common_1.ConflictException();
        const hashedPas = await (0, bcrypt_1.hash)(password, 12);
        const newUser = await this.users.create({
            fullName,
            email,
            password: hashedPas
        });
        const token = this.jwt.sign({ id: newUser.id });
        return { data: token };
    }
    async login({ email, password }) {
        const user = await this.users.findEmail(email);
        if (!user)
            throw new common_1.UnauthorizedException();
        const isMatch = await (0, bcrypt_1.compare)(password, user.password);
        if (!isMatch)
            throw new common_1.UnauthorizedException();
        const token = this.jwt.sign({ id: user.id });
        return { data: token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
import argon2 from "argon2";

const [, , pwd] = process.argv;
if (!pwd) {
  console.error('Kullanım: node tools/hash-argon2.mjs "Parola"');
  process.exit(1);
}
const pepper = process.env.PASSWORD_PEPPER || "";

const hash = await argon2.hash(pwd + pepper, {
  type: argon2.argon2id,
  timeCost: 3,
  memoryCost: 65536,
  parallelism: 1
});
console.log(hash);

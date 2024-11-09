import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', { schema: 'public' })
export class User {
    static entityName = 'User';

    public entityName: string = User.entityName;

    @PrimaryGeneratedColumn({
        type: 'integer',
        comment: 'Primary Object ID',
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 256,
        comment: "The user's first name",
    })
    firstName: string;

    @Column({
        type: 'varchar',
        length: 256,
        comment: "The user's last name",
    })
    lastName: string;

    @Column({
        type: 'varchar',
        unique: true,
        length: 256,
        comment: "The user's email",
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 256,
        comment: "The user's password",
    })
    password: string;

    @Column({
        type: 'timestamp with time zone',
        nullable: true,
        comment: 'The date the user was created',
    })
    createdAt: Date | null;

    @Column({
        type: 'timestamp with time zone',
        nullable: true,
        comment: "The user's last login time",
    })
    lastLoginDate: Date | null;
}

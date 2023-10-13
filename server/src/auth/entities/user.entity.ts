import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column("varchar", { length: 200 })
    email: string;
    
    @Column('text', {
        select: false
    })
    password: string;

    @Column('text')
    name: string;
    
    @Column('text')
    last_name: string

    @Column('boolean', {
        default: true
    })
    isActive: boolean;

    @Column('simple-array',{nullable: true})
    roles: string[];
}

import { CLASSROOM, AUDITORIUM, LABORATORY, MAIN_CAMPUS } from './constants';

export const typeRoom = (id) => {
    switch (id) {
        case CLASSROOM:
            return 'Aula';
        case AUDITORIUM:
            return 'Auditorio';
        case LABORATORY:
            return 'Laboratorio';
        default:
            return 'Aula';
    }
}

export const typeSectional = (id) => {
    switch (id) {
        case MAIN_CAMPUS:
            return 'Ciudad Universitaria';
        default:
            return 'Ciudad Universitaria';
    }
}
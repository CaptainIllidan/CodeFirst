export class ConstService {
    //Пути до контроллеров
    public static get Route(): any {
        return {
            cipher: 'api/cipher',
            message: 'api/message'
        };
    }
}
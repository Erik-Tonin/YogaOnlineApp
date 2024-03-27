export class TypeSegmentationStatic {
    id: string;
    name: string;
  
    constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
    }
  
    public static Agitado = new TypeSegmentationStatic("8aaf42b7-790d-4264-aec3-1c788b04506", "Mais agitado");
    public static Leve = new TypeSegmentationStatic("93497a8e-ccf5-4214-a76e-07f2ae45245d", "Mais leve");
    public static Divertido = new TypeSegmentationStatic("db314610-87f1-42fa-8426-f0607cc30c84", "Divertido");

  
    public static GetAll(): Array<TypeSegmentationStatic> {
      return Object.values(TypeSegmentationStatic);
    }
  
    public static GetById(id: string): TypeSegmentationStatic {
        const result = this.GetAll().find(x => x.id.toLocaleLowerCase() === id.toLocaleLowerCase());
        if (result === undefined) {
            throw new Error(`Objeto com o ID '${id}' não encontrado.`);
        }
        return result;
    }
  }
  
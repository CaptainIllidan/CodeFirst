// Символ замены
export class ApiCipher {
    public CipherId: string;
    public OldChar: string;
    public NewChar: string;
}

export class ApiMessage {
    public MessageId: string;
    public Text: string;
    public ReceiptTime: Date;
}
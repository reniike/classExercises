package classExercises;

public class DecimalToBinary {
    private static String numberToBinary(int number) {
        int result;
        String concat = " ";
        while (number != 0) {
            result = number % 2;
            number = number / 2;
            concat = result + concat;
        }
        return concat;
    }

    public static void main(String[] args) {
        System.out.println(numberToBinary(59));
    }
}

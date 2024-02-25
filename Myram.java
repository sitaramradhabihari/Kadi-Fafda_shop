import java.util.*;
public class Myram
{
   public static void main(String[] args)
   {
    int arr[]={1,3,20,4,1,0};
    int peak = peakelement(arr);
    if(peak != -1)
        System.out.println("peak element" + peak);
     else
     System.out.println("peak element is not present");
    }

    public static int peakelement(int[] arr)
    {
        int n = arr.length;
        for(int i=0;i<n;i++)
        {
            if(i==0 || arr[i]>=arr[i-1] && (i == n-1 || arr[i] >= arr[i+1]))
            return nums[i];
    }
    return -1;
}
}
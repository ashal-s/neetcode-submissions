class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
         let truth: number[] = new Array(10).fill(0);

    // ----- Row Check
    for (let i=0; i<9; i++) {
        truth.fill(0);
        for (let j=0; j<9; j++) {

            if (board[i][j] == ".") {
                continue;
            }

            if (truth[Number(board[i][j])] == 0) {
                truth[Number(board[i][j])] = 1;
            } 
            else if (truth[Number(board[i][j])] == 1) {
                return false;
            }
        }
    }

    // ----- Column Check
    for (let j=0; j<9; j++) {
        truth.fill(0);

        for (let i=0; i<9; i++) {

            if (board[i][j] == ".") {
                continue;
            }
            
            if (truth[Number(board[i][j])] == 0) {
                truth[Number(board[i][j])] = 1;
            } 
            else if (truth[Number(board[i][j])] == 1) {
                return false;
            }
        }
    }
    
    // ----- Box Check

    for (let row=0; row<9; row += 3)  {
        for (let col=0; col<9; col += 3) {
            truth.fill(0);

                    for (let i=row; i<row + 3; i++) {
                        for (let j=col; j<col + 3; j++) {

                    if (board[i][j] == ".") {
                        continue;
                    }
            
                    if (truth[Number(board[i][j])] == 0) {
                        truth[Number(board[i][j])] = 1;
                    } 
                    else if (truth[Number(board[i][j])] == 1) {
                        return false;
                    }
                }
            }
        }
    }

    return true;
    }
}

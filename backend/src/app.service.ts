import { Injectable, StreamableFile } from "@nestjs/common";
import { Response } from "express";
import { createReadStream, stat, Stats } from "fs";
import { join } from "path";
@Injectable()
export class AppService {
  async getFile(response: Response) {

    response.set({
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="instant.log"',
    });

    const file = createReadStream(join(process.cwd(), 'instant.log'));

    const fileStatus: Stats = await new Promise((resolve, reject) => {
      stat('instant.log', (error, response) => {
        if (error) {
          return reject(error)
        }
        resolve(response)
      })
    })

    response.set({
      'Content-Length': fileStatus.size,
    });

    return new StreamableFile(file);
  }
}

import {
	Controller,
	Post,
	Req,
	Res,
	Body
} from "@nestjs/common";

@Controller()
export class SampleController {
	constructor(){}

	@Post("/sample")
	posting(@Body() body){
		return
	}
}

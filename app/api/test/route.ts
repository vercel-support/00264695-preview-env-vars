export const maxDuration = 220;

export function GET(request: Request) {
  return Response.json({ maxDuration }, { status: 200 });
}

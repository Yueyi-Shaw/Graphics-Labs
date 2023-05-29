#version 450 core

out vec4 fColor;

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    // vec2 st=gl_PointCoord.xy;
    vec2 st=gl_FragCoord.xy/u_resolution.xy;
    st.x*=u_resolution.x/u_resolution.y;

    vec3 color=vec3(0.);

    color=vec3(st.x,st.y,abs(sin(u_time)));

    fColor=vec4(color,1);
}

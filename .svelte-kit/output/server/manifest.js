export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["avrgirl-arduino.js","blocks/arduino/analog_read.png","blocks/arduino/analog_write.png","blocks/arduino/digital_read.png","blocks/arduino/digital_write.png","blocks/bluetooth/bluetooth.png","blocks/button/button.png","blocks/debug/debug.png","blocks/digit4display/digit4display.png","blocks/ir_remote/ir_remote.png","blocks/joystick/joystick.png","blocks/lcd/lcd.png","blocks/led/color_led.png","blocks/led/led.png","blocks/led_matrix/led_matrix.png","blocks/message/message.png","blocks/motion_sensor/ultrasonic_sensor.png","blocks/motor/motor.png","blocks/neo_pixel/neo_pixel.png","blocks/passivebuzzer/passivebuzzer.png","blocks/rfid/rfid.png","blocks/servo/servo.png","blocks/soil_sensor/soil_sensor.png","blocks/steppermotor/steppermotor.png","blocks/temp/temp.png","blocks/thermistor/thermistor.svg","blocks/time/time.png","cpu.png","favicon.png","fonts/DSEG7Classic-Bold.ttf","fonts/DSEG7Classic-Bold.woff","fonts/DSEG7Classic-Bold.woff2","fonts/DSEG7Classic-BoldItalic.ttf","fonts/DSEG7Classic-BoldItalic.woff","fonts/DSEG7Classic-BoldItalic.woff2","fonts/DSEG7Classic-Italic.ttf","fonts/DSEG7Classic-Italic.woff","fonts/DSEG7Classic-Italic.woff2","fonts/DSEG7Classic-Light.ttf","fonts/DSEG7Classic-Light.woff","fonts/DSEG7Classic-Light.woff2","fonts/DSEG7Classic-LightItalic.ttf","fonts/DSEG7Classic-LightItalic.woff","fonts/DSEG7Classic-LightItalic.woff2","fonts/DSEG7Classic-Regular.ttf","fonts/DSEG7Classic-Regular.woff","fonts/DSEG7Classic-Regular.woff2","global.css","laptop.png","lessons/electroblocks/servo/main.jpg","lessons/electroblocks/servo/step-1.jpg","lessons/electroblocks/servo/step-1.png","lessons/electroblocks/servo/step-2.png","lessons/electroblocks/servo/step-3.png","lessons/electroblocks/servo/step-4.png","lessons/electroblocks/servo/step-5.png","logo-192.png","logo-512.png","logo.png","manifest.json","projects/debug_code.xml","signin-btn.png","social/google-plus-white.png","social/google-plus.png","target.svg"]),
	mimeTypes: {".js":"text/javascript",".png":"image/png",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".css":"text/css",".jpg":"image/jpeg",".json":"application/json",".xml":"text/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DMqbY7Ya.js","app":"_app/immutable/entry/app._uSogbsV.js","imports":["_app/immutable/entry/start.DMqbY7Ya.js","_app/immutable/chunks/entry.Ctv4eMPx.js","_app/immutable/chunks/scheduler.ydM6q-DU.js","_app/immutable/chunks/index.B_SVVHSE.js","_app/immutable/entry/app._uSogbsV.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.ydM6q-DU.js","_app/immutable/chunks/index.DrhsS78m.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/arduino",
				pattern: /^\/arduino\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/block",
				pattern: /^\/block\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/block/[blocktype]",
				pattern: /^\/block\/([^/]+?)\/?$/,
				params: [{"name":"blocktype","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/code",
				pattern: /^\/code\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/download",
				pattern: /^\/download\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/open",
				pattern: /^\/open\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/project-settings",
				pattern: /^\/project-settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/settings/about",
				pattern: /^\/settings\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/settings/bugs",
				pattern: /^\/settings\/bugs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/settings/feature-request",
				pattern: /^\/settings\/feature-request\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/settings/myprofile",
				pattern: /^\/settings\/myprofile\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/settings/privacy-policy",
				pattern: /^\/settings\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/settings/support",
				pattern: /^\/settings\/support\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

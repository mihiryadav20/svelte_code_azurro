
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "var(--color-primary-100)",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "4px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #8c8c8c 
		"--color-primary-50": "238 238 238", // #eeeeee
		"--color-primary-100": "232 232 232", // #e8e8e8
		"--color-primary-200": "226 226 226", // #e2e2e2
		"--color-primary-300": "209 209 209", // #d1d1d1
		"--color-primary-400": "175 175 175", // #afafaf
		"--color-primary-500": "140 140 140", // #8c8c8c
		"--color-primary-600": "126 126 126", // #7e7e7e
		"--color-primary-700": "105 105 105", // #696969
		"--color-primary-800": "84 84 84", // #545454
		"--color-primary-900": "69 69 69", // #454545
		// secondary | #86c360 
		"--color-secondary-50": "237 246 231", // #edf6e7
		"--color-secondary-100": "231 243 223", // #e7f3df
		"--color-secondary-200": "225 240 215", // #e1f0d7
		"--color-secondary-300": "207 231 191", // #cfe7bf
		"--color-secondary-400": "170 213 144", // #aad590
		"--color-secondary-500": "134 195 96", // #86c360
		"--color-secondary-600": "121 176 86", // #79b056
		"--color-secondary-700": "101 146 72", // #659248
		"--color-secondary-800": "80 117 58", // #50753a
		"--color-secondary-900": "66 96 47", // #42602f
		// tertiary | #c2aa6d 
		"--color-tertiary-50": "246 242 233", // #f6f2e9
		"--color-tertiary-100": "243 238 226", // #f3eee2
		"--color-tertiary-200": "240 234 219", // #f0eadb
		"--color-tertiary-300": "231 221 197", // #e7ddc5
		"--color-tertiary-400": "212 196 153", // #d4c499
		"--color-tertiary-500": "194 170 109", // #c2aa6d
		"--color-tertiary-600": "175 153 98", // #af9962
		"--color-tertiary-700": "146 128 82", // #928052
		"--color-tertiary-800": "116 102 65", // #746641
		"--color-tertiary-900": "95 83 53", // #5f5335
		// success | #e9df99 
		"--color-success-50": "252 250 240", // #fcfaf0
		"--color-success-100": "251 249 235", // #fbf9eb
		"--color-success-200": "250 247 230", // #faf7e6
		"--color-success-300": "246 242 214", // #f6f2d6
		"--color-success-400": "240 233 184", // #f0e9b8
		"--color-success-500": "233 223 153", // #e9df99
		"--color-success-600": "210 201 138", // #d2c98a
		"--color-success-700": "175 167 115", // #afa773
		"--color-success-800": "140 134 92", // #8c865c
		"--color-success-900": "114 109 75", // #726d4b
		// warning | #7f404e 
		"--color-warning-50": "236 226 228", // #ece2e4
		"--color-warning-100": "229 217 220", // #e5d9dc
		"--color-warning-200": "223 207 211", // #dfcfd3
		"--color-warning-300": "204 179 184", // #ccb3b8
		"--color-warning-400": "165 121 131", // #a57983
		"--color-warning-500": "127 64 78", // #7f404e
		"--color-warning-600": "114 58 70", // #723a46
		"--color-warning-700": "95 48 59", // #5f303b
		"--color-warning-800": "76 38 47", // #4c262f
		"--color-warning-900": "62 31 38", // #3e1f26
		// error | #b11f0d 
		"--color-error-50": "243 221 219", // #f3dddb
		"--color-error-100": "239 210 207", // #efd2cf
		"--color-error-200": "236 199 195", // #ecc7c3
		"--color-error-300": "224 165 158", // #e0a59e
		"--color-error-400": "200 98 86", // #c86256
		"--color-error-500": "177 31 13", // #b11f0d
		"--color-error-600": "159 28 12", // #9f1c0c
		"--color-error-700": "133 23 10", // #85170a
		"--color-error-800": "106 19 8", // #6a1308
		"--color-error-900": "87 15 6", // #570f06
		// surface | #2a3439 
		"--color-surface-50": "223 225 225", // #dfe1e1
		"--color-surface-100": "212 214 215", // #d4d6d7
		"--color-surface-200": "202 204 206", // #caccce
		"--color-surface-300": "170 174 176", // #aaaeb0
		"--color-surface-400": "106 113 116", // #6a7174
		"--color-surface-500": "42 52 57", // #2a3439
		"--color-surface-600": "38 47 51", // #262f33
		"--color-surface-700": "32 39 43", // #20272b
		"--color-surface-800": "25 31 34", // #191f22
		"--color-surface-900": "21 25 28", // #15191c
		
	}
}
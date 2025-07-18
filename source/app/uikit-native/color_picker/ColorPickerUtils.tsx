// app/uikit-native/color_picker/ColorPickerUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = {};
    var4 = 'function normalizeValue_ColorPickerUtilsTsx1(value){if(value<0)return 0;if(value>1)return 1;return value;}';
    var1['code'] = var4;
    var _closure1_slot0 = var1;
    var4 = function() {
        var1 = function normalizeValue(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = arg1;
                var1 = 0;
                var2 = var3 < var1;
                if(var2) { _fun0001_ip = 28; continue _fun0001 }
 12:
                var2 = 1;
                var4 = var3 > var2;
                if(var4) { _fun0001_ip = 25; continue _fun0001 }
 22:
                var2 = var3;
 25:
                var1 = var2;
 28:
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 4078966449794.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot0;
        var1['__initData'] = var2;
        return var1;
    };
    var1 = undefined;
    var5 = var4.bind(var1)();
    var4 = {};
    var6 = 'function hsvToRgbWorklet_ColorPickerUtilsTsx2({h:h,s:s,v:v}){let r=0;let g=0;let b=0;h/=360;var i=Math.floor(h*6);var f=h*6-i;var p=v*(1-s);var q=v*(1-f*s);var t=v*(1-(1-f)*s);switch(i%6){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;case 5:r=v;g=p;b=q;break;}return[Math.round(r*255),Math.round(g*255),Math.round(b*255)];}';
    var4['code'] = var6;
    var _closure1_slot1 = var4;
    var4 = function() {
        var1 = function hsvToRgbWorklet(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var2 = var1.h;
                var9 = var1.s;
                var7 = var1.v;
                var1 = 360;
                var1 = var2 / var1;
                var3 = global;
                var4 = var3.Math;
                var2 = var4.floor;
                var5 = 6;
                var1 = var5 * var1;
                var4 = var2.bind(var4)(var1);
                var6 = var1 - var4;
                var1 = 1;
                var2 = var1 - var9;
                var2 = var7 * var2;
                var8 = var6 * var9;
                var8 = var1 - var8;
                var8 = var7 * var8;
                var6 = var1 - var6;
                var6 = var6 * var9;
                var6 = var1 - var6;
                var6 = var7 * var6;
                var10 = var4 % var5;
                var5 = 0;
                if(!(var5 !== var10)) { _fun0002_ip = 200; continue _fun0002 }
 107:
                if(!(var1 !== var10)) { _fun0002_ip = 189; continue _fun0002 }
 111:
                var1 = 2;
                if(!(var1 !== var10)) { _fun0002_ip = 178; continue _fun0002 }
 118:
                var1 = 3;
                if(!(var1 !== var10)) { _fun0002_ip = 167; continue _fun0002 }
 125:
                var1 = 4;
                if(!(var1 !== var10)) { _fun0002_ip = 156; continue _fun0002 }
 132:
                var9 = 5;
                var1 = 0;
                var4 = 0;
                var5 = 0;
                if(!(var9 === var10)) { _fun0002_ip = 209; continue _fun0002 }
 145:
                var1 = var7;
                var4 = var2;
                var5 = var8;
                _fun0002_ip = 209; continue _fun0002;
 156:
                var1 = var6;
                var4 = var2;
                var5 = var7;
                _fun0002_ip = 209; continue _fun0002;
 167:
                var1 = var2;
                var4 = var8;
                var5 = var7;
                _fun0002_ip = 209; continue _fun0002;
 178:
                var1 = var2;
                var4 = var7;
                var5 = var6;
                _fun0002_ip = 209; continue _fun0002;
 189:
                var1 = var8;
                var4 = var7;
                var5 = var2;
                _fun0002_ip = 209; continue _fun0002;
 200:
                var1 = var7;
                var4 = var6;
                var5 = var2;
 209:
                var7 = var3.Math;
                var6 = var7.round;
                var2 = 255;
                var1 = var2 * var1;
                var6 = var6.bind(var7)(var1);
                var1 = new Array(3);
                var1[0] = var6;
                var7 = var3.Math;
                var6 = var7.round;
                var4 = var2 * var4;
                var4 = var6.bind(var7)(var4);
                var1[1] = var4;
                var4 = var3.Math;
                var3 = var4.round;
                var2 = var2 * var5;
                var2 = var3.bind(var4)(var2);
                var1[2] = var2;
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 14555937576302.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot1;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var6 = {};
    var7 = 'function hslToRgbWorklet_ColorPickerUtilsTsx3({h:h,s:s,l:l}){let r=0;let g=0;let b=0;const c=(1-Math.abs(2*l-1))*s;const x=c*(1-Math.abs(h/60%2-1));const m=l-c/2;if(h===360||0<=h&&h<60){r=c;g=x;b=0;}else if(60<=h&&h<120){r=x;g=c;b=0;}else if(120<=h&&h<180){r=0;g=c;b=x;}else if(180<=h&&h<240){r=0;g=x;b=c;}else if(240<=h&&h<300){r=x;g=0;b=c;}else if(300<=h&&h<360){r=c;g=0;b=x;}return[Math.round((r+m)*255),Math.round((g+m)*255),Math.round((b+m)*255)];}';
    var6['code'] = var7;
    var _closure1_slot2 = var6;
    var2 = function() {
        var1 = function hslToRgbWorklet(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var11 = var1.h;
                var6 = var1.s;
                var2 = var1.l;
                var3 = global;
                var8 = var3.Math;
                var7 = var8.abs;
                var1 = 2;
                var4 = var1 * var2;
                var5 = 1;
                var4 = var4 - var5;
                var4 = var7.bind(var8)(var4);
                var4 = var5 - var4;
                var8 = var4 * var6;
                var7 = var3.Math;
                var6 = var7.abs;
                var9 = 60;
                var4 = var11 / var9;
                var4 = var4 % var1;
                var4 = var4 - var5;
                var4 = var6.bind(var7)(var4);
                var4 = var5 - var4;
                var5 = var8 * var4;
                var1 = var8 / var1;
                var6 = var2 - var1;
                var7 = 0;
                var10 = 360;
                var1 = var8;
                var4 = var5;
                var2 = 0;
                if(!(var10 !== var11)) { _fun0003_ip = 286; continue _fun0003 }
 130:
                if(!(var7 <= var11)) { _fun0003_ip = 152; continue _fun0003 }
 134:
                var12 = var11 < var9;
                var1 = var8;
                var4 = var5;
                var2 = 0;
                if(var12) { _fun0003_ip = 286; continue _fun0003 }
 152:
                if(!(var9 <= var11)) { _fun0003_ip = 174; continue _fun0003 }
 156:
                var9 = 120;
                var9 = var11 < var9;
                var1 = var5;
                var4 = var8;
                var2 = 0;
                if(var9) { _fun0003_ip = 286; continue _fun0003 }
 174:
                var9 = 120;
                if(!(var9 <= var11)) { _fun0003_ip = 199; continue _fun0003 }
 181:
                var9 = 180;
                var9 = var11 < var9;
                var1 = 0;
                var4 = var8;
                var2 = var5;
                if(var9) { _fun0003_ip = 286; continue _fun0003 }
 199:
                var9 = 180;
                if(!(var9 <= var11)) { _fun0003_ip = 224; continue _fun0003 }
 206:
                var9 = 240;
                var9 = var11 < var9;
                var1 = 0;
                var4 = var5;
                var2 = var8;
                if(var9) { _fun0003_ip = 286; continue _fun0003 }
 224:
                var9 = 240;
                if(!(var9 <= var11)) { _fun0003_ip = 252; continue _fun0003 }
 231:
                var9 = 300;
                var9 = var11 < var9;
                var1 = var5;
                var4 = 0;
                var2 = var8;
                if(var9) { _fun0003_ip = 286; continue _fun0003 }
 252:
                var9 = 300;
                var9 = var9 <= var11;
                if(!var9) { _fun0003_ip = 269; continue _fun0003 }
 265:
                var9 = var11 < var10;
 269:
                var1 = 0;
                var4 = 0;
                var2 = 0;
                if(!var9) { _fun0003_ip = 286; continue _fun0003 }
 278:
                var1 = var8;
                var4 = 0;
                var2 = var5;
 286:
                var8 = var3.Math;
                var7 = var8.round;
                var5 = 255;
                var1 = var1 + var6;
                var1 = var5 * var1;
                var7 = var7.bind(var8)(var1);
                var1 = new Array(3);
                var1[0] = var7;
                var8 = var3.Math;
                var7 = var8.round;
                var4 = var4 + var6;
                var4 = var5 * var4;
                var4 = var7.bind(var8)(var4);
                var1[1] = var4;
                var4 = var3.Math;
                var3 = var4.round;
                var2 = var2 + var6;
                var2 = var5 * var2;
                var2 = var3.bind(var4)(var2);
                var1[2] = var2;
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 13811670810842.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot2;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var7 = native7;
    var6 = 0;
    var7 = var7[var6];
    var6 = native2;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'uikit-native/color_picker/ColorPickerUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['normalizeValue'] = var5;
    var3['hsvToRgbWorklet'] = var4;
    var3['hslToRgbWorklet'] = var2;
    return var1;
})();
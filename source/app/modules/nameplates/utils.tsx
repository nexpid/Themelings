// app/modules/nameplates/utils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function isValidPalette(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var2 = var4.name;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 1;
            var1 = var1[var8];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var1 = var1.INVALID_PALETTE_KEY;
            var1 = var2 !== var1;
            if(!var1) { _fun0001_ip = 120; continue _fun0001 }
 46:
            var3 = var4.name;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var2 = var7.bind(var6)(var2);
            var2 = var2.CUSTOM_PALETTE_KEY;
            var2 = var3 !== var2;
            if(var2) { _fun0001_ip = 117; continue _fun0001 }
 81:
            var7 = _closure1_slot5;
            var3 = var4.darkBackground;
            var3 = var7.bind(var6)(var3);
            if(!var3) { _fun0001_ip = 114; continue _fun0001 }
 99:
            var5 = _closure1_slot5;
            var4 = var4.lightBackground;
            var3 = var5.bind(var6)(var4);
 114:
            var2 = var3;
 117:
            var1 = var2;
 120:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var1 = function isValidHex(arg1) {
        var3 = /^#([0-9a-fA-F]{6})$/;
        var2 = var3.test;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.ThemeTypes;
    var _closure1_slot3 = var5;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/nameplates/utils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getBackgroundGradientColors(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot4;
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            if(var4) { _fun0002_ip = 22; continue _fun0002 }
 20:
            return var3;
 22:
            var2 = _closure1_slot3;
            var3 = var2.LIGHT;
            var2 = arg2;
            if(!(var2 !== var3)) { _fun0002_ip = 47; continue _fun0002 }
 39:
            var5 = var1.darkBackground;
            _fun0002_ip = 53; continue _fun0002;
 47:
            var5 = var1.lightBackground;
 53:
            var1 = {};
            var2 = global;
            var3 = var2.HermesInternal;
            var6 = var3.concat;
            var4 = '';
            var3 = '00';
            var3 = var6.bind(var4)(var5, var3);
            var1['left'] = var3;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '4D';
            var2 = var3.bind(var4)(var5, var2);
            var1['right'] = var2;
            return var1;
        }
    };
    var3['getBackgroundGradientColors'] = var5;
    var3['isValidPalette'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var5 = 1;
            var1 = var1[var5];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var3 = var1.NAMEPLATE_PALETTES;
            var1 = arg1;
            var1 = var3[var1];
            var3 = null;
            if(!(var3 == var1)) { _fun0003_ip = 67; continue _fun0003 }
 44:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var1 = var2.INVALID_NAMEPLATE_PALETTE;
 67:
            return var1;
        }
    };
    var3['getNameplatePalette'] = var4;
    var4 = function parseFirstFrame(arg1) {
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 2;
        var1 = var5[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var1);
        var6 = var7.decode;
        var1 = arg1;
        var1 = var6.bind(var7)(var1);
        var2 = var5[var2];
        var3 = var4.bind(var3)(var2);
        var2 = var3.toRGBA8;
        var2 = var2.bind(var3)(var1);
        var5 = 0;
        var7 = var2[var5];
        var2 = global;
        var6 = var2.document;
        var4 = var6.createElement;
        var3 = 'canvas';
        var3 = var4.bind(var6)(var3);
        var4 = var1.width;
        var3['width'] = var4;
        var4 = var1.height;
        var3['height'] = var4;
        var6 = var3.getContext;
        var4 = '2d';
        var4 = var6.bind(var3)(var4);
        var8 = var2.ImageData;
        var2 = var2.Uint8ClampedArray;
        var6 = var2.prototype;
        var6 = Object.create(var6, {constructor: {value: var2}});
        var12 = var6;
        var11 = var7;
        var2 = new var12[var2](var11, var10);
        var11 = var2 instanceof Object ? var2 : var6;
        var10 = var1.width;
        var9 = var1.height;
        var2 = var8.prototype;
        var2 = Object.create(var2, {constructor: {value: var8}});
        var12 = var2;
        var1 = new var12[var8](var11, var10, var9, var8);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var4.putImageData;
        var1 = var1.bind(var4)(var2, var5, var5);
        var2 = var3.toDataURL;
        var1 = 'image/png';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['parseFirstFrame'] = var4;
    var2 = function getNameplateSampleUsers() {
        var1 = {};
        var2 = {};
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 3;
        var4 = var8[var3];
        var6 = undefined;
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.SbKDHh;
        var4 = var5.bind(var9)(var4);
        var2['name'] = var4;
        var4 = 'https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png';
        var2['avatarSrc'] = var4;
        var1['mallow'] = var2;
        var2 = {};
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.LMSo+P;
        var4 = var5.bind(var9)(var4);
        var2['name'] = var4;
        var4 = 'https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png';
        var2['avatarSrc'] = var4;
        var1['phibi'] = var2;
        var2 = {};
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.g5Dump;
        var4 = var5.bind(var9)(var4);
        var2['name'] = var4;
        var4 = 'https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png';
        var2['avatarSrc'] = var4;
        var1['locke'] = var2;
        var2 = {};
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var9 = var4.intl;
        var5 = var9.string;
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.p5Z3Oj;
        var4 = var5.bind(var9)(var4);
        var2['name'] = var4;
        var4 = 'https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png';
        var2['avatarSrc'] = var4;
        var1['cherry'] = var2;
        var2 = {};
        var4 = var8[var3];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var3 = var8[var3];
        var3 = var7.bind(var6)(var3);
        var3 = var3.t;
        var3 = var3.ncsliY;
        var3 = var4.bind(var5)(var3);
        var2['name'] = var3;
        var3 = 'https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png';
        var2['avatarSrc'] = var3;
        var1['boom'] = var2;
        return var1;
    };
    var3['getNameplateSampleUsers'] = var2;
    return var1;
})();
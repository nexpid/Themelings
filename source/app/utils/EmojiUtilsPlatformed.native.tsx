// app/utils/EmojiUtilsPlatformed.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var9 = function getURL(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.isAndroid;
            var2 = var1.bind(var2)();
            var1 = '';
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var2 = _closure1_slot7;
            var3 = var2.convert;
            var2 = var3.toCodePoint;
            var5 = var2.bind(var3)(var4);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'asset:/emoji-';
            var2 = '.png';
            var1 = var4.bind(var3)(var5, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot8 = var9;
    var1 = function _getEmojiColors() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var8 = var3.id;
                    var6 = var3.name;
                    var5 = null;
                    if(!(var5 == var8)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var4 = _closure1_slot8;
                    var2 = undefined;
                    var7 = var4.bind(var2)(var6);
                    _fun0002_ip = 9; continue _fun0002;
case 7:
                    var6 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.getEmojiURL;
                    var2 = {'id': null, 'size': 32, 'animated': false};
                    var2['id'] = var8;
                    var7 = var4.bind(var6)(var2);
case 9:
                    var2 = '';
                    if(!(var2 === var7)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var4 = _closure1_slot5;
                    var6 = var4.ImageManager;
                    var4 = var6.getEmojiBase64;
                    var3 = var3.name;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 8;
                    var8 = var8[var2];
                    var2 = undefined;
                    var2 = var9.bind(var2)(var8);
                    var2 = var2.EMOJI_IN_ANIMATION_SIZE;
                    var2 = var4.bind(var6)(var3, var2);
                    SaveGenerator(address=171);
case 12:
                    return var2;
case 13:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var4 = var3.concat;
                    var3 = 'data:image/png;base64,';
                    var7 = var4.bind(var3)(var2);
case 10:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var3 = var4[var3];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = var6.getPaletteForAvatar;
                    var3 = var3.bind(var6)(var7);
                    SaveGenerator(address=241);
case 16:
                    return var3;
case 17:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var5 = var5 == var3;
                    var4 = undefined;
                    if(var5) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var6 = var3.map;
                    var5 = function(arg1) {
                        var4 = _closure1_slot3;
                        var6 = undefined;
                        var3 = arg1;
                        var2 = 3;
                        var3 = var4.bind(var6)(var3, var2);
                        var2 = 0;
                        var5 = var3[var2];
                        var2 = 1;
                        var4 = var3[var2];
                        var2 = 2;
                        var3 = var3[var2];
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 10;
                        var1 = var7[var1];
                        var2 = var2.bind(var6)(var1);
                        var1 = var2.rgbToHex;
                        var1 = var1.bind(var2)(var5, var4, var3);
                        return var1;
                    };
                    var4 = var6.bind(var3)(var5);
case 20:
                    return var4;
case 18:
                    return var3;
case 14:
                    return var2;
case 5:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var10 = var1.Object;
    var7 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.NativeModules;
    var _closure1_slot5 = var7;
    var2 = var2.processColor;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = 12;
    var7 = var6[var7];
    var8 = var8.bind(var1)(var7);
    var7 = var8.makeMemoizer;
    var7 = var7.bind(var8)(var9);
    var2['getURL'] = var7;
    var7 = function filterUnsupportedEmojis(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.isAndroid;
            var3 = var1.bind(var3)();
            var1 = var5;
            if(var3) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.unicodeVersion;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var7 = 4;
                    var1 = var1[var7];
                    var8 = undefined;
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.getSystemVersion;
                    var4 = var1.bind(var2)();
                    var2 = var4.split;
                    var1 = '.';
                    var1 = var2.bind(var4)(var1);
                    var2 = global;
                    var6 = var2.parseInt;
                    var5 = 0;
                    var4 = var1[var5];
                    var4 = var6.bind(var8)(var4);
                    var9 = var1.length;
                    var6 = 1;
                    var9 = var9 > var6;
                    if(!var9) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var2 = var2.parseInt;
                    var1 = var1[var6];
                    var5 = var2.bind(var8)(var1);
case 24:
                    var1 = 8;
                    var2 = var3 > var1;
                    var1 = true;
                    if(!var2) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var2 = 9;
                    if(!(var2 !== var3)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var2 = 10;
                    if(!(var2 !== var3)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var2 = 11;
                    if(!(var2 !== var3)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var2 = 12;
                    if(!(var2 !== var3)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var2 = 12.1;
                    if(!(var2 !== var3)) { _fun0004_ip = 34; continue _fun0004 }
case 36:
                    var2 = 13;
                    if(!(var2 !== var3)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var2 = 13.1;
                    if(!(var2 !== var3)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var2 = 14;
                    if(!(var2 !== var3)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                    var2 = 15;
                    if(!(var2 !== var3)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                    var1 = false;
                    var2 = 15.1;
                    if(!(var2 === var3)) { _fun0004_ip = 26; continue _fun0004 }
case 45:
                    var3 = 17;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 46; continue _fun0004 }
case 47:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var3 = var5 >= var7;
case 48:
                    var2 = var3;
case 46:
                    var1 = var2;
                    _fun0004_ip = 26; continue _fun0004;
case 43:
                    var3 = 16;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                    var3 = var5 >= var7;
case 52:
                    var2 = var3;
case 50:
                    var1 = var2;
                    _fun0004_ip = 26; continue _fun0004;
case 41:
                    var3 = 15;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 56; continue _fun0004 }
case 57:
                    var3 = var5 >= var7;
case 56:
                    var2 = var3;
case 54:
                    var1 = var2;
                    _fun0004_ip = 26; continue _fun0004;
case 39:
                    var3 = 14;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 58; continue _fun0004 }
case 59:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 60; continue _fun0004 }
case 61:
                    var7 = 5;
                    var3 = var5 >= var7;
case 60:
                    var2 = var3;
case 58:
                    var1 = var2;
                    _fun0004_ip = 26; continue _fun0004;
case 37:
                    var3 = 14;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 62; continue _fun0004 }
case 63:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 64; continue _fun0004 }
case 65:
                    var7 = 2;
                    var3 = var5 >= var7;
case 64:
                    var2 = var3;
case 62:
                    var1 = var2;
                    _fun0004_ip = 26; continue _fun0004;
case 34:
                    var3 = 13;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 66; continue _fun0004 }
case 67:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                    var7 = 2;
                    var3 = var5 >= var7;
case 68:
                    var2 = var3;
case 66:
                    var1 = var2;
                    _fun0004_ip = 26; continue _fun0004;
case 32:
                    var3 = 12;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 70; continue _fun0004 }
case 71:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 72; continue _fun0004 }
case 73:
                    var3 = var5 >= var6;
case 72:
                    var2 = var3;
case 70:
                    var1 = var2;
                    _fun0004_ip = 26; continue _fun0004;
case 30:
                    var3 = 11;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 74; continue _fun0004 }
case 75:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 76; continue _fun0004 }
case 77:
                    var3 = var5 >= var6;
case 76:
                    var2 = var3;
case 74:
                    var1 = var2;
                    _fun0004_ip = 26; continue _fun0004;
case 28:
                    var3 = 10;
                    var2 = var4 > var3;
                    if(var2) { _fun0004_ip = 78; continue _fun0004 }
case 79:
                    var3 = var3 === var4;
                    if(!var3) { _fun0004_ip = 80; continue _fun0004 }
case 81:
                    var4 = 2;
                    var3 = var5 >= var4;
case 80:
                    var2 = var3;
case 78:
                    var1 = var2;
case 26:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var5, var2);
case 22:
            return var1;
        }
    };
    var2['filterUnsupportedEmojis'] = var7;
    var7 = function applyPlatformToThemedEmojiColorPalette(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = var2.palette;
            var2 = var2.shouldProcessMobileColors;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0005_ip = 82; continue _fun0005 }
case 83:
            var2 = false;
case 82:
            if(!var2) { _fun0005_ip = 84; continue _fun0005 }
case 8:
            var6 = null;
            if(!(var6 != var1)) { _fun0005_ip = 84; continue _fun0005 }
case 85:
            var9 = var1.LIGHT;
            var5 = var1.DARK;
            var2 = {};
            var3 = {};
            var10 = _closure1_slot6;
            var11 = var6 == var9;
            var8 = undefined;
            if(var11) { _fun0005_ip = 86; continue _fun0005 }
case 87:
            var8 = var9.accentColor;
case 86:
            var8 = var10.bind(var4)(var8);
            var3['accentColor'] = var8;
            var10 = _closure1_slot6;
            var11 = var6 == var9;
            var8 = undefined;
            if(var11) { _fun0005_ip = 88; continue _fun0005 }
case 89:
            var8 = var9.backgroundColor;
case 88:
            var8 = var10.bind(var4)(var8);
            var3['backgroundColor'] = var8;
            var10 = _closure1_slot6;
            var11 = var6 == var9;
            var8 = undefined;
            if(var11) { _fun0005_ip = 90; continue _fun0005 }
case 91:
            var8 = var9.highlightColor;
case 90:
            var8 = var10.bind(var4)(var8);
            var3['highlightColor'] = var8;
            var10 = var6 == var9;
            var8 = undefined;
            if(var10) { _fun0005_ip = 92; continue _fun0005 }
case 33:
            var8 = var9.opacity;
case 92:
            var3['opacity'] = var8;
            var2['LIGHT'] = var3;
            var3 = {};
            var9 = _closure1_slot6;
            var10 = var6 == var5;
            var8 = undefined;
            if(var10) { _fun0005_ip = 93; continue _fun0005 }
case 94:
            var8 = var5.accentColor;
case 93:
            var8 = var9.bind(var4)(var8);
            var3['accentColor'] = var8;
            var9 = _closure1_slot6;
            var10 = var6 == var5;
            var8 = undefined;
            if(var10) { _fun0005_ip = 95; continue _fun0005 }
case 96:
            var8 = var5.backgroundColor;
case 95:
            var8 = var9.bind(var4)(var8);
            var3['backgroundColor'] = var8;
            var8 = _closure1_slot6;
            var9 = var6 == var5;
            var7 = undefined;
            if(var9) { _fun0005_ip = 97; continue _fun0005 }
case 98:
            var7 = var5.highlightColor;
case 97:
            var7 = var8.bind(var4)(var7);
            var3['highlightColor'] = var7;
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0005_ip = 99; continue _fun0005 }
case 100:
            var4 = var5.opacity;
case 99:
            var3['opacity'] = var4;
            var2['DARK'] = var3;
            return var2;
case 84:
            return var1;
        }
    };
    var2['applyPlatformToThemedEmojiColorPalette'] = var7;
    var7 = function getEmojiColors() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var2['getEmojiColors'] = var7;
    var4 = function triggerFullscreenAnimation(arg1) {
        var1 = arg1;
        var7 = var1.channelId;
        var6 = var1.messageId;
        var5 = var1.emoji;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.openBurstReactionFirstSendActionSheet;
        var2 = {};
        var2['channelId'] = var7;
        var2['messageId'] = var6;
        var2['emoji'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['triggerFullscreenAnimation'] = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/EmojiUtilsPlatformed.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
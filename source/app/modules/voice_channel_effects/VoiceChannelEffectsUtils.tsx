// app/modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var1 = function getUniqueListFromMetadata(arg1, arg2) {
        var2 = arg2;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 24;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = arg1;
        var4 = var3.bind(var4)(var2);
        var3 = var4.map;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = arg1;
                var2 = var1[var2];
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var2;
case 2:
                return var1;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var1 = function(arg1) {
            var2 = null;
            var1 = arg1;
            var1 = var2 != var1;
            return var1;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.uniq;
        var2 = var1.bind(var2)();
        var1 = var2.value;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var5 = var4.EMOJI_SIZE;
    var _closure1_slot4 = var5;
    var9 = var4.VoiceChannelEffectAnimationType;
    var _closure1_slot5 = var9;
    var4 = {};
    var5 = 2;
    var5 = var8[var5];
    var10 = var6.bind(var1)(var5);
    var5 = new Array(1);
    var5[0] = var10;
    var4['BASIC'] = var5;
    var5 = 3;
    var5 = var8[var5];
    var10 = var6.bind(var1)(var5);
    var5 = new Array(21);
    var5[0] = var10;
    var10 = 4;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[1] = var10;
    var10 = 5;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[2] = var10;
    var10 = 6;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[3] = var10;
    var10 = 7;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[4] = var10;
    var10 = 8;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[5] = var10;
    var10 = 9;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[6] = var10;
    var10 = 10;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[7] = var10;
    var10 = 11;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[8] = var10;
    var10 = 12;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[9] = var10;
    var10 = 13;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[10] = var10;
    var10 = 14;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[11] = var10;
    var10 = 15;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[12] = var10;
    var10 = 16;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[13] = var10;
    var10 = 17;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[14] = var10;
    var10 = 18;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[15] = var10;
    var10 = 19;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[16] = var10;
    var10 = 20;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[17] = var10;
    var10 = 21;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[18] = var10;
    var10 = 22;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[19] = var10;
    var10 = 23;
    var10 = var8[var10];
    var10 = var6.bind(var1)(var10);
    var5[20] = var10;
    var4['PREMIUM'] = var5;
    var5 = {};
    var11 = var9.BASIC;
    var10 = var4.BASIC;
    var5[var11] = var10;
    var9 = var9.PREMIUM;
    var4 = var4.PREMIUM;
    var5[var9] = var4;
    var _closure1_slot6 = var5;
    var4 = 24;
    var4 = var8[var4];
    var9 = var6.bind(var1)(var4);
    var6 = var9.memoize;
    var4 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = global;
            var2 = var2.Image;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var4 = var3;
            var2 = new var4[var2](var3);
            var2 = var2 instanceof Object ? var2 : var3;
            var _closure3_slot1 = var2;
            var3 = _closure2_slot0;
            var2['src'] = var3;
            var3 = 'Anonymous';
            var2['crossOrigin'] = var3;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot4;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 25;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.getDevicePixelRatio;
                    var2 = var2.bind(var4)();
                    var3 = var3 * var2;
                    var4 = _closure3_slot1;
                    var4 = var4.width;
                    if(!(var4 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure3_slot1;
                    var4 = var4.height;
                    if(!(var4 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 4:
                    var4 = global;
                    var6 = var4.document;
                    var5 = var6.createElement;
                    var4 = 'canvas';
                    var6 = var5.bind(var6)(var4);
                    var6['width'] = var3;
                    var6['height'] = var3;
                    var4 = var6.getContext;
                    var3 = '2d';
                    var7 = var4.bind(var6)(var3);
                    var3 = null;
                    if(!(var3 != var7)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                    var5 = var7.drawImage;
                    var4 = _closure3_slot1;
                    var3 = 0;
                    var3 = var5.bind(var7)(var4, var3, var3);
case 7:
                    var4 = _closure3_slot0;
                    var5 = var6.toDataURL;
                    var3 = 'image/png';
                    var3 = var5.bind(var6)(var3);
                    var3 = var4.bind(var1)(var3);
                    _fun0002_ip = 9; continue _fun0002;
case 6:
                    var3 = _closure3_slot0;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var1)(var2);
case 9:
                    return var1;
                }
            };
            var2['onload'] = var1;
            var1 = undefined;
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var4 = var6.bind(var9)(var4);
    var6 = 30;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/voice_channel_effects/VoiceChannelEffectsUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = {'start': 10, 'end': 15};
    var3['CUSTOM_CALL_SOUND_ANIMATION_RANGE'] = var6;
    var3['AnimationTypeToAnimations'] = var5;
    var3['getResizedEmojiData'] = var4;
    var4 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            var2 = _closure1_slot6;
            var2 = var2[var4];
            var5 = null;
            if(!(var5 != var1)) { _fun0003_ip = 10; continue _fun0003 }
case 3:
            var3 = _closure1_slot5;
            var3 = var3.PREMIUM;
            if(!(var4 !== var3)) { _fun0003_ip = 11; continue _fun0003 }
case 10:
            var5 = global;
            var4 = var5.Math;
            var3 = var4.floor;
            var6 = var5.Math;
            var5 = var6.random;
            var5 = var5.bind(var6)();
            var2 = var2.length;
            var2 = var5 * var2;
            var2 = var3.bind(var4)(var2);
            return var2;
case 11:
            var3 = var1.end;
            var2 = 1;
            var4 = var3 + var2;
            var5 = global;
            var3 = var5.Math;
            var2 = var3.floor;
            var6 = var5.Math;
            var5 = var6.random;
            var5 = var5.bind(var6)();
            var1 = var1.start;
            var1 = var1 - var4;
            var1 = var5 * var1;
            var1 = var1 + var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['sampleAnimationId'] = var4;
    var4 = function getEffectUrl(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var4 = _closure1_slot4;
case 12:
            var1 = var6.id;
            var5 = null;
            if(!(var5 == var1)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 27;
            var8 = var9[var1];
            var12 = var2.bind(var3)(var8);
            var11 = var12.convertSurrogateToName;
            var10 = var6.name;
            var8 = false;
            var8 = var11.bind(var12)(var10, var8);
            var1 = var9[var1];
            var2 = var2.bind(var3)(var1);
            var1 = var2.getByName;
            var2 = var1.bind(var2)(var8);
            var8 = var5 != var2;
            var1 = '';
            if(!var8) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 28;
            var7 = var9[var7];
            var8 = var8.bind(var3)(var7);
            var7 = var8.getURL;
            var2 = var2.surrogates;
            var1 = var7.bind(var8)(var2);
case 16:
            return var1;
case 14:
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 26;
            var1 = var7[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.getEmojiURL;
            var1 = {};
            var7 = var6.id;
            var1['id'] = var7;
            var6 = var6.animated;
            var5 = var5 != var6;
            if(!var5) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var5 = var6;
case 18:
            var1['animated'] = var5;
            var1['size'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getEffectUrl'] = var4;
    var2 = function getEffectAnnouncement(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = var3.length;
            var11 = 1;
            if(!(!(var1 < var11))) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var2 = _closure1_slot7;
            var8 = undefined;
            var1 = 'userId';
            var12 = var2.bind(var8)(var3, var1);
            var1 = 'emojiName';
            var4 = var2.bind(var8)(var3, var1);
            var1 = var4.length;
            var10 = 2;
            if(!(!(var1 < var10))) { _fun0005_ip = 22; continue _fun0005 }
case 5:
            var2 = var4.join;
            var1 = ', ';
            var7 = var2.bind(var4)(var1);
            _fun0005_ip = 23; continue _fun0005;
case 22:
            var1 = null;
            var3 = var1 == var4;
            var2 = undefined;
            if(var3) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var3 = 0;
            var2 = var4[var3];
case 24:
            var3 = var1 != var2;
            var1 = '';
            if(!var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var1 = var2;
case 26:
            var7 = var1;
case 23:
            var1 = var12.length;
            var2 = var1 < var11;
            var1 = '';
            if(var2) { _fun0005_ip = 28; continue _fun0005 }
case 8:
            var2 = var12.length;
            if(!(var11 !== var2)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var2 = var12.length;
            if(!(var10 !== var2)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 29;
            var4 = var6[var2];
            var4 = var3.bind(var8)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var6[var2];
            var2 = var3.bind(var8)(var2);
            var2 = var2.t;
            var3 = var2./okjv7;
            var2 = {};
            var14 = _closure1_slot3;
            var13 = var14.getUser;
            var6 = 0;
            var6 = var12[var6];
            var14 = var13.bind(var14)(var6);
            var6 = null;
            var15 = var6 == var14;
            var13 = undefined;
            if(var15) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var13 = var14.username;
case 33:
            var2['firstUsername'] = var13;
            var15 = _closure1_slot3;
            var14 = var15.getUser;
            var13 = var12[var11];
            var13 = var14.bind(var15)(var13);
            var14 = var6 == var13;
            var6 = undefined;
            if(var14) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var6 = var13.username;
case 35:
            var2['secondUsername'] = var6;
            var6 = var12.length;
            var6 = var6 - var10;
            var2['count'] = var6;
            var2['emojiNames'] = var7;
            var2 = var4.bind(var5)(var3, var2);
            _fun0005_ip = 37; continue _fun0005;
case 31:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 29;
            var5 = var10[var3];
            var5 = var4.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var8)(var3);
            var3 = var3.t;
            var4 = var3.8rmtbW;
            var3 = {};
            var14 = _closure1_slot3;
            var13 = var14.getUser;
            var10 = 0;
            var10 = var12[var10];
            var14 = var13.bind(var14)(var10);
            var10 = null;
            var15 = var10 == var14;
            var13 = undefined;
            if(var15) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var13 = var14.username;
case 38:
            var3['firstUsername'] = var13;
            var14 = _closure1_slot3;
            var13 = var14.getUser;
            var11 = var12[var11];
            var11 = var13.bind(var14)(var11);
            var13 = var10 == var11;
            var10 = undefined;
            if(var13) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var10 = var11.username;
case 40:
            var3['secondUsername'] = var10;
            var3['emojiNames'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 37:
            _fun0005_ip = 42; continue _fun0005;
case 29:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 29;
            var5 = var10[var3];
            var5 = var4.bind(var8)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var8)(var3);
            var3 = var3.t;
            var4 = var3.yZYxzM;
            var3 = {};
            var11 = _closure1_slot3;
            var10 = var11.getUser;
            var9 = 0;
            var9 = var12[var9];
            var9 = var10.bind(var11)(var9);
            var10 = null;
            var10 = var10 == var9;
            var8 = undefined;
            if(var10) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var8 = var9.username;
case 43:
            var3['firstUsername'] = var8;
            var3['emojiNames'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 42:
            var1 = var2;
case 28:
            return var1;
case 20:
            var1 = '';
            return var1;
        }
    };
    var3['getEffectAnnouncement'] = var2;
    return var1;
})();
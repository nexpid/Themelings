// app/utils/AvatarUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var31 = require;
        var3 = exports;
        var32 = dependencyMap;
        var _closure1_slot0 = var31;
        var1 = metroImportDefault;
        var _closure1_slot1 = var1;
        var _closure1_slot2 = var32;
        var1 = function getAvatarURL(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var1 = var2.endpoint;
                var18 = var2.path;
                var17 = var2.id;
                var7 = var2.hash;
                var14 = var2.size;
                var3 = var2.lossless;
                var6 = undefined;
                if(!(var3 === var6)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var3 = false;
case 2:
                var4 = var2.canAnimate;
                if(!(var4 === var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var4 = false;
case 4:
                var9 = var2.keepAspectRatio;
                var13 = var2.format;
                if(!(var13 === var6)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var13 = null;
case 6:
                var12 = var2.canWebP;
                if(!(var12 === var6)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var12 = _closure1_slot11;
case 8:
                var10 = null;
                if(!(var10 != var17)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                if(!(var10 == var7)) { _fun0002_ip = 12; continue _fun0002 }
case 10:
                return var6;
case 12:
                if(!(var10 == var13)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var11 = 'jpg';
                var2 = var11;
                if(!var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var8 = _closure1_slot28;
                var8 = var8.bind(var6)(var7);
                var2 = var11;
                if(!var8) { _fun0002_ip = 15; continue _fun0002 }
case 17:
                var5 = _closure1_slot33;
                var2 = var5.bind(var6)(var12);
case 15:
                var13 = var2;
case 13:
                var2 = var4;
                if(!var4) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var5 = _closure1_slot29;
                var2 = var5.bind(var6)(var7);
case 18:
                if(!var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                var13 = 'mp4';
case 20:
                var2 = global;
                var5 = var2.window;
                var5 = var5.GLOBAL_ENV;
                var16 = var5.CDN_HOST;
                if(!(var10 == var16)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                var5 = var2.location;
                var8 = var5.protocol;
                var5 = var2.window;
                var5 = var5.GLOBAL_ENV;
                var5 = var5.API_ENDPOINT;
                var5 = var8 + var5;
                var1 = var1.bind(var6)(var17, var7, var13);
                var1 = var5 + var1;
                var8 = var13;
                _fun0002_ip = 24; continue _fun0002;
case 22:
                var11 = 'jpg';
                var5 = var13;
                if(!(var11 === var13)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                var11 = 'png';
                if(!var12) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var11 = 'webp';
case 27:
                var5 = var11;
case 25:
                var11 = var2.HermesInternal;
                var15 = var11.concat;
                var28 = 'https://';
                var12 = '/';
                var20 = '.';
                var27 = var16;
                var26 = var12;
                var25 = var18;
                var24 = var12;
                var23 = var17;
                var22 = var12;
                var21 = var7;
                var19 = var5;
                var1 = var28[var15](var27, var26, var25, var24, var23, var22, var21, var20, var19, var18);
                var8 = var5;
case 24:
                var5 = 'mp4';
                if(!(var5 !== var8)) { _fun0002_ip = 29; continue _fun0002 }
case 30:
                var5 = {};
                if(!(var10 != var14)) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 4;
                var12 = var16[var11];
                var13 = var15.bind(var6)(var12);
                var12 = var13.getBestMediaProxySize;
                var11 = var16[var11];
                var15 = var15.bind(var6)(var11);
                var11 = var15.getDevicePixelRatio;
                var11 = var11.bind(var15)();
                var11 = var14 * var11;
                var11 = var12.bind(var13)(var11);
                var5['size'] = var11;
case 31:
                if(!(var10 != var9)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                var5['keep_aspect_ratio'] = var9;
case 33:
                if(!var3) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                var3 = 'lossless';
                var5['quality'] = var3;
case 35:
                var3 = 'webp';
                var3 = var3 === var8;
                if(!var3) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                var3 = var4;
case 37:
                if(!var3) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                var4 = _closure1_slot28;
                var3 = var4.bind(var6)(var7);
case 39:
                if(!var3) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                var3 = true;
                var5['animated'] = var3;
case 41:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 5;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.stringify;
                var4 = var3.bind(var4)(var5);
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = '?';
                var2 = var3.bind(var2)(var4);
                var2 = var1 + var2;
                return var2;
case 29:
                return var1;
            }
        };
        var _closure1_slot13 = var1;
        var21 = function getEmojiURL(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var6 = var1.id;
                var11 = var1.animated;
                var10 = var1.size;
                var13 = var1.forcePNG;
                var12 = undefined;
                if(!(var13 === var12)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                var13 = false;
case 43:
                var5 = undefined;
                var3 = undefined;
                var4 = undefined;
                var7 = undefined;
                var2 = undefined;
                var8 = undefined;
                var9 = 'png';
                var1 = var9;
                if(var13) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                var14 = _closure1_slot11;
                if(var11) { _fun0003_ip = 47; continue _fun0003 }
case 48:
                if(!var14) { _fun0003_ip = 49; continue _fun0003 }
case 50:
                var9 = 'webp';
case 49:
                _fun0003_ip = 51; continue _fun0003;
case 47:
                var13 = 'gif';
                if(!var14) { _fun0003_ip = 52; continue _fun0003 }
case 53:
                var13 = 'webp';
case 52:
                var9 = var13;
case 51:
                var1 = var9;
case 45:
                var5 = var1;
                var14 = _closure1_slot11;
                var13 = '';
                var1 = var13;
                if(!var14) { _fun0003_ip = 54; continue _fun0003 }
case 55:
                var1 = var13;
                if(!var11) { _fun0003_ip = 54; continue _fun0003 }
case 56:
                var1 = '&animated=true';
case 54:
                var3 = var1;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 4;
                var11 = var16[var1];
                var14 = var15.bind(var12)(var11);
                var11 = var14.getBestMediaProxySize;
                var1 = var16[var1];
                var15 = var15.bind(var12)(var1);
                var1 = var15.getDevicePixelRatio;
                var1 = var1.bind(var15)();
                var10 = var10 * var1;
                var1 = _closure1_slot12;
                var14 = var11.bind(var14)(var10, var1);
                var1 = global;
                var10 = var1.HermesInternal;
                var11 = var10.concat;
                var10 = 'size=';
                var4 = var11.bind(var10)(var14);
                var7 = false;
case 57: // try_start_0
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 6;
                var10 = var14[var10];
                var10 = var11.bind(var12)(var10);
                var11 = var10.getForceSdrEmojisStickersConfig;
                var10 = {};
                var14 = 'getEmojiURL';
                var10['location'] = var14;
                var10 = var11.bind(var12)(var10);
                var7 = var10.enabled;
case 58: // try_end0
                _fun0003_ip = 59; continue _fun0003;
case 60: // catch_target0
                CatchBlockStart(arg_register=9);
case 59:
                var11 = var7;
                var10 = var13;
                if(!var11) { _fun0003_ip = 61; continue _fun0003 }
case 62:
                var10 = '&force_sdr=true';
case 61:
                var2 = var10;
                var10 = var1.window;
                var10 = var10.GLOBAL_ENV;
                var11 = var10.CDN_HOST;
                var10 = null;
                if(!(var10 == var11)) { _fun0003_ip = 63; continue _fun0003 }
case 64:
                var10 = var1.location;
                var11 = var10.protocol;
                var10 = var1.window;
                var10 = var10.GLOBAL_ENV;
                var10 = var10.API_ENDPOINT;
                var10 = var11 + var10;
                var14 = _closure1_slot3;
                var12 = var14.EMOJI;
                var11 = var6;
                var9 = var5;
                var9 = var12.bind(var14)(var11, var9);
                var8 = var10 + var9;
                var10 = var8;
                if(var7) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                var7 = var10;
                _fun0003_ip = 67; continue _fun0003;
case 65:
                var8 = var1.HermesInternal;
                var9 = var8.concat;
                var8 = '?force_sdr=true';
                var7 = var9.bind(var13)(var10, var8);
case 67:
                return var7;
case 63:
                var7 = var1.location;
                var27 = var7.protocol;
                var7 = var1.window;
                var7 = var7.GLOBAL_ENV;
                var25 = var7.CDN_HOST;
                var23 = var6;
                var21 = var5;
                var19 = var4;
                var18 = var3;
                var17 = var2;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var26 = '//';
                var24 = '/emojis/';
                var22 = '.';
                var20 = '?';
                var28 = var13;
                var1 = var28[var5](var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
                return var1;
            }
        };
        var20 = function getDefaultAvatarURL(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var6 = arg1;
                var9 = arg2;
                var1 = arguments[2];
                var3 = arguments[3];
                var5 = undefined;
                if(!(var1 === var5)) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                var1 = false;
case 68:
                if(var1) { _fun0004_ip = 70; continue _fun0004 }
case 71:
                if(var1) { _fun0004_ip = 72; continue _fun0004 }
case 73:
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 72; continue _fun0004 }
case 74:
                var2 = _closure1_slot9;
                if(!(var3 <= var2)) { _fun0004_ip = 72; continue _fun0004 }
case 75:
                var2 = _closure1_slot8;
                _fun0004_ip = 4; continue _fun0004;
case 72:
                var2 = _closure1_slot7;
case 4:
                _fun0004_ip = 76; continue _fun0004;
case 70:
                var2 = _closure1_slot10;
case 76:
                var7 = null;
                if(!(var7 == var6)) { _fun0004_ip = 47; continue _fun0004 }
case 7:
                if(!(var7 != var9)) { _fun0004_ip = 77; continue _fun0004 }
case 47:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 7;
                var1 = var8[var1];
                var8 = var4.bind(var5)(var1);
                var4 = var8.parseInteger;
                var1 = 0;
                var4 = var4.bind(var8)(var9, var1);
                if(!(!(var4 > var1))) { _fun0004_ip = 78; continue _fun0004 }
case 79:
                if(!(var7 == var6)) { _fun0004_ip = 54; continue _fun0004 }
case 56:
                var1 = var2[var1];
                _fun0004_ip = 80; continue _fun0004;
case 54:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 8;
                var3 = var8[var3];
                var3 = var7.bind(var5)(var3);
                var6 = var3.bind(var5)(var6);
                var5 = var6.shiftRight;
                var3 = 22;
                var6 = var5.bind(var6)(var3);
                var5 = var6.mod;
                var3 = var2.length;
                var5 = var5.bind(var6)(var3);
                var3 = var5.toJSNumber;
                var3 = var3.bind(var5)();
                var1 = var2[var3];
case 80:
                _fun0004_ip = 81; continue _fun0004;
case 78:
                var3 = 5;
                var3 = var4 % var3;
                var1 = var2[var3];
case 81:
                return var1;
case 77:
                var1 = 0;
                var1 = var2[var1];
                return var1;
            }
        };
        var _closure1_slot14 = var20;
        var1 = function getUserAvatarURLWithoutFallback(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var8 = arguments[1];
                var9 = arguments[2];
                var7 = arguments[3];
                var6 = arguments[4];
                var11 = var1.id;
                var10 = var1.avatar;
                var4 = var1.discriminator;
                var1 = var1.bot;
                var5 = undefined;
                if(!(var8 === var5)) { _fun0005_ip = 82; continue _fun0005 }
case 2:
                var8 = false;
case 82:
                if(!(var9 === var5)) { _fun0005_ip = 46; continue _fun0005 }
case 83:
                var9 = _closure1_slot4;
case 46:
                if(!(var7 === var5)) { _fun0005_ip = 84; continue _fun0005 }
case 85:
                var7 = null;
case 84:
                if(!(var6 === var5)) { _fun0005_ip = 86; continue _fun0005 }
case 48:
                var6 = _closure1_slot11;
case 86:
                if(!var1) { _fun0005_ip = 87; continue _fun0005 }
case 88:
                var3 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 2;
                var1 = var12[var1];
                var1 = var3.bind(var5)(var1);
                var1 = var1.default;
                var1 = var1.BOT_AVATARS;
                var1 = var1[var10];
                if(var1) { _fun0005_ip = 89; continue _fun0005 }
case 16:
                var3 = null;
                if(!(var3 == var10)) { _fun0005_ip = 87; continue _fun0005 }
case 90:
                var3 = '0000';
                if(!(var3 !== var4)) { _fun0005_ip = 78; continue _fun0005 }
case 87:
                var4 = _closure1_slot13;
                var3 = {};
                var12 = _closure1_slot3;
                var12 = var12.AVATAR;
                var3['endpoint'] = var12;
                var12 = 'avatars';
                var3['path'] = var12;
                var3['id'] = var11;
                var3['hash'] = var10;
                var3['size'] = var9;
                var3['canAnimate'] = var8;
                var3['format'] = var7;
                var3['canWebP'] = var6;
                var3 = var4.bind(var5)(var3);
                return var3;
case 78:
                var3 = _closure1_slot7;
                var2 = 0;
                var2 = var3[var2];
                return var2;
case 89:
                return var1;
            }
        };
        var _closure1_slot15 = var1;
        var19 = function getUserAvatarURL(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var8 = arguments[1];
                var7 = arguments[2];
                var5 = arguments[3];
                var4 = arguments[4];
                var6 = undefined;
                if(!(var8 === var6)) { _fun0006_ip = 71; continue _fun0006 }
case 91:
                var8 = false;
case 71:
                if(!(var7 === var6)) { _fun0006_ip = 92; continue _fun0006 }
case 93:
                var7 = _closure1_slot4;
case 92:
                if(!(var5 === var6)) { _fun0006_ip = 94; continue _fun0006 }
case 95:
                var5 = null;
case 94:
                if(!(var4 === var6)) { _fun0006_ip = 96; continue _fun0006 }
case 2:
                var4 = _closure1_slot11;
case 96:
                var1 = _closure1_slot15;
                var14 = undefined;
                var13 = var2;
                var12 = var8;
                var11 = var7;
                var10 = var5;
                var9 = var4;
                var1 = var14[var1](var13, var12, var11, var10, var9, var8);
                var4 = null;
                if(!(var4 == var1)) { _fun0006_ip = 97; continue _fun0006 }
case 53:
                var5 = _closure1_slot14;
                var13 = var2.id;
                var12 = var2.discriminator;
                var11 = var2.isProvisional;
                var14 = undefined;
                var10 = var7;
                var1 = var14[var5](var13, var12, var11, var10, var9);
case 97:
                return var1;
            }
        };
        var _closure1_slot16 = var19;
        var18 = function getGuildMemberAvatarURLSimple(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var13 = var1.guildId;
                var10 = var1.userId;
                var8 = var1.avatar;
                var7 = var1.canAnimate;
                var6 = undefined;
                if(!(var7 === var6)) { _fun0007_ip = 44; continue _fun0007 }
case 98:
                var7 = false;
case 44:
                var12 = var1.size;
                if(!(var12 === var6)) { _fun0007_ip = 72; continue _fun0007 }
case 3:
                var12 = _closure1_slot4;
case 72:
                var5 = var1.canWebP;
                if(!(var5 === var6)) { _fun0007_ip = 99; continue _fun0007 }
case 100:
                var5 = _closure1_slot11;
case 99:
                var14 = 'jpg';
                var4 = var14;
                if(!var7) { _fun0007_ip = 101; continue _fun0007 }
case 47:
                var2 = _closure1_slot28;
                var2 = var2.bind(var6)(var8);
                var4 = var14;
                if(!var2) { _fun0007_ip = 101; continue _fun0007 }
case 11:
                var1 = _closure1_slot33;
                var4 = var1.bind(var6)(var5);
case 101:
                var1 = global;
                var2 = var1.window;
                var2 = var2.GLOBAL_ENV;
                var11 = var2.CDN_HOST;
                var2 = null;
                if(!(var2 == var11)) { _fun0007_ip = 102; continue _fun0007 }
case 103:
                var2 = var1.location;
                var3 = var2.protocol;
                var2 = var1.window;
                var2 = var2.GLOBAL_ENV;
                var2 = var2.API_ENDPOINT;
                var3 = var3 + var2;
                var9 = _closure1_slot3;
                var2 = var9.GUILD_MEMBER_AVATAR;
                var19 = var9;
                var18 = var13;
                var17 = var10;
                var16 = var8;
                var15 = var4;
                var2 = var19[var2](var18, var17, var16, var15, var14);
                var2 = var3 + var2;
                var9 = var4;
                _fun0007_ip = 104; continue _fun0007;
case 102:
                var3 = var4;
                if(!(var14 === var4)) { _fun0007_ip = 105; continue _fun0007 }
case 77:
                var4 = 'png';
                if(!var5) { _fun0007_ip = 106; continue _fun0007 }
case 107:
                var4 = 'webp';
case 106:
                var3 = var4;
case 105:
                var5 = _closure1_slot3;
                var4 = var5.GUILD_MEMBER_AVATAR;
                var19 = var5;
                var18 = var13;
                var17 = var10;
                var16 = var8;
                var15 = var3;
                var10 = var19[var4](var18, var17, var16, var15, var14);
                var4 = var1.HermesInternal;
                var5 = var4.concat;
                var4 = 'https://';
                var2 = var5.bind(var4)(var11, var10);
                var9 = var3;
case 104:
                var5 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 4;
                var10 = var14[var4];
                var11 = var13.bind(var6)(var10);
                var10 = var11.getBestMediaProxySize;
                var4 = var14[var4];
                var13 = var13.bind(var6)(var4);
                var4 = var13.getDevicePixelRatio;
                var4 = var4.bind(var13)();
                var4 = var12 * var4;
                var4 = var10.bind(var11)(var4);
                var5['size'] = var4;
                var4 = 'webp';
                var4 = var4 === var9;
                if(!var4) { _fun0007_ip = 108; continue _fun0007 }
case 109:
                var4 = var7;
case 108:
                if(!var4) { _fun0007_ip = 110; continue _fun0007 }
case 111:
                var7 = _closure1_slot28;
                var4 = var7.bind(var6)(var8);
case 110:
                if(!var4) { _fun0007_ip = 112; continue _fun0007 }
case 113:
                var4 = true;
                var5['animated'] = var4;
case 112:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 5;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.stringify;
                var4 = var3.bind(var4)(var5);
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = '?';
                var1 = var3.bind(var1)(var4);
                var1 = var2 + var1;
                return var1;
            }
        };
        var _closure1_slot17 = var18;
        var17 = function getGuildMemberAvatarURL(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var5 = arguments[1];
                var8 = var1.userId;
                var7 = var1.avatar;
                var6 = var1.guildId;
                var4 = undefined;
                if(!(var5 === var4)) { _fun0008_ip = 114; continue _fun0008 }
case 115:
                var5 = false;
case 114:
                var1 = null;
                var2 = var1 == var7;
                if(var2) { _fun0008_ip = 7; continue _fun0008 }
case 116:
                var3 = _closure1_slot17;
                var2 = {};
                var2['userId'] = var8;
                var2['avatar'] = var7;
                var2['guildId'] = var6;
                var2['canAnimate'] = var5;
                var1 = var3.bind(var4)(var2);
case 7:
                return var1;
            }
        };
        var _closure1_slot18 = var17;
        var16 = function getGuildMemberAvatarSource(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var7 = arg2;
                var6 = arguments[2];
                var4 = undefined;
                if(!(var6 === var4)) { _fun0009_ip = 117; continue _fun0009 }
case 118:
                var6 = false;
case 117:
                var3 = _closure1_slot18;
                var3 = var3.bind(var4)(var1, var6);
                var5 = null;
                if(!(var5 == var3)) { _fun0009_ip = 119; continue _fun0009 }
case 120:
                var5 = var7.getAvatarSource;
                var1 = var1.guildId;
                var1 = var5.bind(var7)(var1, var6);
                _fun0009_ip = 121; continue _fun0009;
case 119:
                var2 = _closure1_slot31;
                var1 = var2.bind(var4)(var3);
case 121:
                return var1;
            }
        };
        var15 = function getUserBannerURL(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arg1;
                var13 = var1.id;
                var8 = var1.banner;
                var7 = var1.canAnimate;
                var12 = var1.size;
                var2 = null;
                if(!(var2 == var8)) { _fun0010_ip = 43; continue _fun0010 }
case 98:
                var1 = undefined;
                return var1;
case 43:
                var1 = global;
                var3 = var1.window;
                var3 = var3.GLOBAL_ENV;
                var11 = var3.CDN_HOST;
                var6 = 'png';
                var9 = var6;
                if(!var7) { _fun0010_ip = 122; continue _fun0010 }
case 76:
                var4 = _closure1_slot28;
                var5 = undefined;
                var4 = var4.bind(var5)(var8);
                var9 = var6;
                if(!var4) { _fun0010_ip = 122; continue _fun0010 }
case 53:
                var4 = _closure1_slot33;
                var3 = _closure1_slot11;
                var9 = var4.bind(var5)(var3);
case 122:
                if(!(var2 == var11)) { _fun0010_ip = 123; continue _fun0010 }
case 12:
                var2 = var1.location;
                var3 = var2.protocol;
                var2 = var1.window;
                var2 = var2.GLOBAL_ENV;
                var2 = var2.API_ENDPOINT;
                var3 = var3 + var2;
                var4 = _closure1_slot3;
                var2 = var4.USER_BANNER;
                var2 = var2.bind(var4)(var13, var8, var9);
                var2 = var3 + var2;
                _fun0010_ip = 124; continue _fun0010;
case 123:
                var3 = var1.HermesInternal;
                var10 = var3.concat;
                var22 = 'https://';
                var20 = '/banners/';
                var18 = '/';
                var16 = '.';
                var21 = var11;
                var19 = var13;
                var17 = var8;
                var15 = var9;
                var2 = var22[var10](var21, var20, var19, var18, var17, var16, var15, var14);
case 124:
                var5 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 4;
                var10 = var14[var4];
                var6 = undefined;
                var11 = var13.bind(var6)(var10);
                var10 = var11.getBestMediaProxySize;
                var4 = var14[var4];
                var13 = var13.bind(var6)(var4);
                var4 = var13.getDevicePixelRatio;
                var4 = var4.bind(var13)();
                var4 = var12 * var4;
                var4 = var10.bind(var11)(var4);
                var5['size'] = var4;
                var4 = 'webp';
                var4 = var4 === var9;
                if(!var4) { _fun0010_ip = 125; continue _fun0010 }
case 104:
                var4 = var7;
case 125:
                if(!var4) { _fun0010_ip = 126; continue _fun0010 }
case 127:
                var7 = _closure1_slot28;
                var4 = var7.bind(var6)(var8);
case 126:
                if(!var4) { _fun0010_ip = 128; continue _fun0010 }
case 129:
                var4 = true;
                var5['animated'] = var4;
case 128:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 5;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.stringify;
                var4 = var3.bind(var4)(var5);
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = '?';
                var1 = var3.bind(var1)(var4);
                var1 = var2 + var1;
                return var1;
            }
        };
        var14 = function getAvatarDecorationURL(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg1;
                var3 = var1.avatarDecoration;
                var6 = var1.size;
                var14 = undefined;
                if(!(var6 === var14)) { _fun0011_ip = 93; continue _fun0011 }
case 68:
                var6 = _closure1_slot5;
case 93:
                var12 = var6;
                var1 = var1.canAnimate;
                if(!(var1 === var14)) { _fun0011_ip = 3; continue _fun0011 }
case 94:
                var1 = false;
case 3:
                var5 = var1;
                var11 = undefined;
                var9 = undefined;
                var2 = undefined;
                var10 = undefined;
                var8 = undefined;
                var4 = undefined;
                var7 = undefined;
                var6 = var3;
                var1 = null;
                if(!(var1 != var6)) { _fun0011_ip = 130; continue _fun0011 }
case 7:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 9;
                var13 = var16[var13];
                var16 = var15.bind(var14)(var13);
                var15 = var16.isAvatarDecorationExpired;
                var13 = var3;
                var13 = var15.bind(var16)(var13);
                if(var13) { _fun0011_ip = 130; continue _fun0011 }
case 131: // try_start_0
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 10;
                var13 = var16[var13];
                var13 = var15.bind(var14)(var13);
                var11 = var13.CollectiblesItemAssetFormat;
                var9 = var13.getCollectiblesItemAssetUrl;
                var13 = var5;
                if(var13) { _fun0011_ip = 132; continue _fun0011 }
case 133:
                var13 = var11.STATIC;
                _fun0011_ip = 18; continue _fun0011;
case 132:
                var13 = var11.ANIMATED;
case 18:
                var11 = var9;
                var9 = {};
                var15 = var3;
                var15 = var15.skuId;
                var9['skuId'] = var15;
                var9['assetFormat'] = var13;
                var9 = var11.bind(var14)(var9);
                var2 = var9;
                if(!(var1 == var9)) { _fun0011_ip = 134; continue _fun0011 }
case 135: // try_end0
                var3 = var3.asset;
                var10 = var3;
                if(!(var1 != var3)) { _fun0011_ip = 136; continue _fun0011 }
case 137:
                var3 = global;
                var9 = var3.window;
                var11 = var9.GLOBAL_ENV;
                var9 = var11.CDN_HOST;
                var8 = var9;
                var4 = var11.API_ENDPOINT;
                var13 = _closure1_slot3;
                var11 = var13.AVATAR_DECORATION_PRESETS;
                var7 = var11.bind(var13)(var10);
                if(!(var1 == var9)) { _fun0011_ip = 138; continue _fun0011 }
case 59:
                var10 = var3.URL;
                var9 = var3.location;
                var15 = var9.protocol;
                var13 = var4;
                var11 = var7;
                var4 = var3.HermesInternal;
                var9 = var4.concat;
                var4 = '';
                var19 = var9.bind(var4)(var15, var13, var11);
                var9 = var10.prototype;
                var9 = Object.create(var9, {constructor: {value: var10}});
                var20 = var9;
                var4 = new var20[var10](var19, var18);
                var4 = var4 instanceof Object ? var4 : var9;
                _fun0011_ip = 139; continue _fun0011;
case 138:
                var9 = var3.URL;
                var11 = var8;
                var10 = var7;
                var7 = var3.HermesInternal;
                var8 = var7.concat;
                var7 = 'https://';
                var19 = var8.bind(var7)(var11, var10);
                var8 = var9.prototype;
                var8 = Object.create(var8, {constructor: {value: var9}});
                var20 = var8;
                var7 = new var20[var9](var19, var18);
                var4 = var7 instanceof Object ? var7 : var8;
case 139:
                var10 = var4.searchParams;
                var9 = var10.set;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var7 = 4;
                var8 = var15[var7];
                var11 = var13.bind(var14)(var8);
                var8 = var11.getBestMediaProxySize;
                var7 = var15[var7];
                var13 = var13.bind(var14)(var7);
                var7 = var13.getDevicePixelRatio;
                var7 = var7.bind(var13)();
                var7 = var12 * var7;
                var6 = _closure1_slot12;
                var7 = var8.bind(var11)(var7, var6);
                var6 = var3.HermesInternal;
                var6 = var6.concat;
                var8 = '';
                var7 = var6.bind(var8)(var7);
                var6 = 'size';
                var6 = var9.bind(var10)(var6, var7);
                var7 = var4.searchParams;
                var6 = var7.set;
                var3 = var3.HermesInternal;
                var3 = var3.concat;
                var5 = var3.bind(var8)(var5);
                var3 = 'passthrough';
                var3 = var6.bind(var7)(var3, var5);
                var3 = var4.toString;
                var3 = var3.bind(var4)();
                return var3;
case 136:
                return var1;
case 134:
                return var2;
case 140: // catch_target0
                CatchBlockStart(arg_register=1);
                return var1;
case 130:
                return var1;
            }
        };
        var13 = function getGuildMemberBannerURL(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var11 = var1.id;
                var9 = var1.guildId;
                var8 = var1.banner;
                var7 = var1.canAnimate;
                var12 = var1.size;
                var2 = null;
                if(!(var2 != var8)) { _fun0012_ip = 94; continue _fun0012 }
case 120:
                if(!(var2 == var9)) { _fun0012_ip = 2; continue _fun0012 }
case 94:
                var1 = undefined;
                return var1;
case 2:
                var1 = global;
                var3 = var1.window;
                var3 = var3.GLOBAL_ENV;
                var10 = var3.CDN_HOST;
                var13 = 'png';
                var4 = var13;
                if(!var7) { _fun0012_ip = 141; continue _fun0012 }
case 86:
                var5 = _closure1_slot28;
                var6 = undefined;
                var5 = var5.bind(var6)(var8);
                var4 = var13;
                if(!var5) { _fun0012_ip = 141; continue _fun0012 }
case 51:
                var5 = _closure1_slot33;
                var3 = _closure1_slot11;
                var4 = var5.bind(var6)(var3);
case 141:
                var6 = _closure1_slot3;
                var5 = var6.GUILD_MEMBER_BANNER;
                var19 = var6;
                var18 = var9;
                var17 = var11;
                var16 = var8;
                var15 = var4;
                var6 = var19[var5](var18, var17, var16, var15, var14);
                var9 = var4;
                if(!(var2 == var10)) { _fun0012_ip = 142; continue _fun0012 }
case 143:
                var2 = var1.location;
                var4 = var2.protocol;
                var2 = var1.window;
                var2 = var2.GLOBAL_ENV;
                var2 = var2.API_ENDPOINT;
                var2 = var4 + var2;
                var2 = var2 + var6;
                _fun0012_ip = 124; continue _fun0012;
case 142:
                var4 = var1.HermesInternal;
                var5 = var4.concat;
                var4 = 'https://';
                var2 = var5.bind(var4)(var10, var6);
case 124:
                var5 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 4;
                var10 = var14[var4];
                var6 = undefined;
                var11 = var13.bind(var6)(var10);
                var10 = var11.getBestMediaProxySize;
                var4 = var14[var4];
                var13 = var13.bind(var6)(var4);
                var4 = var13.getDevicePixelRatio;
                var4 = var4.bind(var13)();
                var4 = var12 * var4;
                var4 = var10.bind(var11)(var4);
                var5['size'] = var4;
                var4 = 'webp';
                var4 = var4 === var9;
                if(!var4) { _fun0012_ip = 104; continue _fun0012 }
case 144:
                var4 = var7;
case 104:
                if(!var4) { _fun0012_ip = 145; continue _fun0012 }
case 125:
                var7 = _closure1_slot28;
                var4 = var7.bind(var6)(var8);
case 145:
                if(!var4) { _fun0012_ip = 146; continue _fun0012 }
case 126:
                var4 = true;
                var5['animated'] = var4;
case 146:
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 5;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.stringify;
                var4 = var3.bind(var4)(var5);
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = '?';
                var1 = var3.bind(var1)(var4);
                var1 = var2 + var1;
                return var1;
            }
        };
        var38 = function getGuildSplashURL(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
                var12 = var1.id;
                var11 = var1.splash;
                var5 = var1.size;
                var1 = null;
                if(!(var1 != var11)) { _fun0013_ip = 147; continue _fun0013 }
case 115:
                if(!(var1 == var5)) { _fun0013_ip = 8; continue _fun0013 }
case 74:
                var2 = global;
                var2 = var2.window;
                var2 = var2.screen;
                var3 = var2.width;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var2 = var4.getDevicePixelRatio;
                var2 = var2.bind(var4)();
                var5 = var3 * var2;
case 8:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var2 = var4.getBestMediaProxySize;
                var5 = var2.bind(var4)(var5);
                var2 = global;
                var4 = var2.window;
                var4 = var4.GLOBAL_ENV;
                var10 = var4.CDN_HOST;
                if(!(var1 == var10)) { _fun0013_ip = 102; continue _fun0013 }
case 148:
                var4 = var2.location;
                var6 = var4.protocol;
                var4 = var2.window;
                var4 = var4.GLOBAL_ENV;
                var4 = var4.API_ENDPOINT;
                var4 = var6 + var4;
                var6 = _closure1_slot3;
                var3 = var6.GUILD_SPLASH;
                var3 = var3.bind(var6)(var12, var11);
                var3 = var4 + var3;
                _fun0013_ip = 149; continue _fun0013;
case 102:
                var4 = var2.HermesInternal;
                var9 = var4.concat;
                var19 = 'https://';
                var17 = '/splashes/';
                var15 = '/';
                var13 = '.jpg';
                var18 = var10;
                var16 = var12;
                var14 = var11;
                var3 = var19[var9](var18, var17, var16, var15, var14, var13, var12);
case 149:
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = '?size=';
                var2 = var4.bind(var2)(var5);
                var2 = var3 + var2;
                return var2;
case 147:
                return var1;
            }
        };
        var _closure1_slot19 = var38;
        var36 = function getGuildBannerURL(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var8 = arguments[1];
                var17 = var1.id;
                var9 = var1.banner;
                var7 = undefined;
                if(!(var8 === var7)) { _fun0014_ip = 150; continue _fun0014 }
case 71:
                var8 = false;
case 150:
                var1 = null;
                if(!(var1 != var9)) { _fun0014_ip = 151; continue _fun0014 }
case 92:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 4;
                var3 = var10[var2];
                var5 = var6.bind(var7)(var3);
                var3 = var5.getBestMediaProxySize;
                var2 = var10[var2];
                var6 = var6.bind(var7)(var2);
                var2 = var6.getDevicePixelRatio;
                var6 = var2.bind(var6)();
                var2 = 360;
                var2 = var2 * var6;
                var11 = var3.bind(var5)(var2);
                var2 = _closure1_slot11;
                var5 = 'jpg';
                var3 = var5;
                if(!var2) { _fun0014_ip = 79; continue _fun0014 }
case 152:
                var3 = 'webp';
case 79:
                var10 = var3;
                if(!var8) { _fun0014_ip = 153; continue _fun0014 }
case 154:
                var2 = _closure1_slot28;
                var2 = var2.bind(var7)(var9);
                var10 = var3;
                if(!var2) { _fun0014_ip = 153; continue _fun0014 }
case 155:
                var3 = _closure1_slot33;
                var2 = _closure1_slot11;
                var10 = var3.bind(var7)(var2);
case 153:
                var2 = global;
                var3 = var2.window;
                var3 = var3.GLOBAL_ENV;
                var16 = var3.CDN_HOST;
                if(!(var1 == var16)) { _fun0014_ip = 156; continue _fun0014 }
case 157:
                var3 = var2.location;
                var6 = var3.protocol;
                var3 = var2.window;
                var3 = var3.GLOBAL_ENV;
                var3 = var3.API_ENDPOINT;
                var6 = var6 + var3;
                var12 = _closure1_slot3;
                var3 = var12.GUILD_BANNER;
                var3 = var3.bind(var12)(var17, var9, var10);
                var3 = var6 + var3;
                _fun0014_ip = 158; continue _fun0014;
case 156:
                var6 = var2.HermesInternal;
                var15 = var6.concat;
                var25 = 'https://';
                var23 = '/banners/';
                var21 = '/';
                var19 = '.';
                var24 = var16;
                var22 = var17;
                var20 = var9;
                var18 = var10;
                var3 = var25[var15](var24, var23, var22, var21, var20, var19, var18, var17);
case 158:
                var6 = {};
                var6['size'] = var11;
                if(!(var5 === var10)) { _fun0014_ip = 159; continue _fun0014 }
case 160:
                var5 = 'lossless';
                var6['quality'] = var5;
case 159:
                var5 = 'webp';
                var5 = var5 === var10;
                if(!var5) { _fun0014_ip = 161; continue _fun0014 }
case 162:
                var5 = var8;
case 161:
                if(!var5) { _fun0014_ip = 163; continue _fun0014 }
case 164:
                var8 = _closure1_slot28;
                var5 = var8.bind(var7)(var9);
case 163:
                if(!var5) { _fun0014_ip = 165; continue _fun0014 }
case 166:
                var5 = true;
                var6['animated'] = var5;
case 165:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 5;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.stringify;
                var5 = var4.bind(var5)(var6);
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = '?';
                var2 = var4.bind(var2)(var5);
                var2 = var3 + var2;
                return var2;
case 151:
                return var1;
            }
        };
        var _closure1_slot20 = var36;
        var35 = function getGuildHomeHeaderURL(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = arg1;
                var12 = var1.id;
                var11 = var1.homeHeader;
                var1 = null;
                if(!(var1 != var11)) { _fun0015_ip = 167; continue _fun0015 }
case 71:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 4;
                var4 = var8[var2];
                var6 = undefined;
                var5 = var7.bind(var6)(var4);
                var4 = var5.getBestMediaProxySize;
                var2 = var8[var2];
                var6 = var7.bind(var6)(var2);
                var2 = var6.getDevicePixelRatio;
                var6 = var2.bind(var6)();
                var2 = 1096;
                var2 = var2 * var6;
                var5 = var4.bind(var5)(var2);
                var2 = global;
                var4 = var2.window;
                var4 = var4.GLOBAL_ENV;
                var10 = var4.CDN_HOST;
                if(!(var1 == var10)) { _fun0015_ip = 168; continue _fun0015 }
case 169:
                var4 = var2.location;
                var6 = var4.protocol;
                var4 = var2.window;
                var4 = var4.GLOBAL_ENV;
                var4 = var4.API_ENDPOINT;
                var4 = var6 + var4;
                var6 = _closure1_slot3;
                var3 = var6.GUILD_HOME_HEADER;
                var3 = var3.bind(var6)(var12, var11);
                var3 = var4 + var3;
                _fun0015_ip = 170; continue _fun0015;
case 168:
                var4 = var2.HermesInternal;
                var9 = var4.concat;
                var19 = 'https://';
                var17 = '/home-headers/';
                var15 = '/';
                var13 = '.png';
                var18 = var10;
                var16 = var12;
                var14 = var11;
                var3 = var19[var9](var18, var17, var16, var15, var14, var13, var12);
case 170:
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = '?size=';
                var2 = var4.bind(var2)(var5);
                var2 = var3 + var2;
                return var2;
case 167:
                return var1;
            }
        };
        var _closure1_slot21 = var35;
        var12 = function getResourceChannelIconURL(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = arg1;
                var6 = var1.channelId;
                var5 = var1.icon;
                var1 = null;
                var2 = var1 == var5;
                if(var2) { _fun0016_ip = 51; continue _fun0016 }
case 171:
                var4 = _closure1_slot13;
                var3 = {};
                var7 = _closure1_slot3;
                var7 = var7.GUILD_RESOURCE_CHANNELS_ICON;
                var3['endpoint'] = var7;
                var7 = 'resource-channels';
                var3['path'] = var7;
                var3['id'] = var6;
                var3['hash'] = var5;
                var2 = _closure1_slot4;
                var3['size'] = var2;
                var2 = true;
                var3['canAnimate'] = var2;
                var2 = false;
                var3['canWebP'] = var2;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
case 51:
                return var1;
            }
        };
        var11 = function getNewMemberActionIconURL(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = arg1;
                var6 = var1.channelId;
                var5 = var1.icon;
                var1 = null;
                var2 = var1 == var5;
                if(var2) { _fun0017_ip = 51; continue _fun0017 }
case 171:
                var4 = _closure1_slot13;
                var3 = {};
                var7 = _closure1_slot3;
                var7 = var7.GUILD_NEW_MEMBER_ACTIONS_ICON;
                var3['endpoint'] = var7;
                var7 = 'new-member-actions';
                var3['path'] = var7;
                var3['id'] = var6;
                var3['hash'] = var5;
                var2 = _closure1_slot4;
                var3['size'] = var2;
                var2 = true;
                var3['canAnimate'] = var2;
                var2 = false;
                var3['canWebP'] = var2;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
case 51:
                return var1;
            }
        };
        var37 = function getGuildDiscoverySplashURL(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = arg1;
                var12 = var1.id;
                var11 = var1.splash;
                var5 = var1.size;
                var1 = null;
                if(!(var1 != var11)) { _fun0018_ip = 147; continue _fun0018 }
case 115:
                if(!(var1 == var5)) { _fun0018_ip = 8; continue _fun0018 }
case 74:
                var2 = global;
                var2 = var2.window;
                var2 = var2.screen;
                var3 = var2.width;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var2 = var4.getDevicePixelRatio;
                var2 = var2.bind(var4)();
                var5 = var3 * var2;
case 8:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var6.bind(var2)(var4);
                var2 = var4.getBestMediaProxySize;
                var5 = var2.bind(var4)(var5);
                var2 = global;
                var4 = var2.window;
                var4 = var4.GLOBAL_ENV;
                var10 = var4.CDN_HOST;
                if(!(var1 == var10)) { _fun0018_ip = 102; continue _fun0018 }
case 148:
                var4 = var2.location;
                var6 = var4.protocol;
                var4 = var2.window;
                var4 = var4.GLOBAL_ENV;
                var4 = var4.API_ENDPOINT;
                var4 = var6 + var4;
                var6 = _closure1_slot3;
                var3 = var6.GUILD_DISCOVERY_SPLASH;
                var3 = var3.bind(var6)(var12, var11);
                var3 = var4 + var3;
                _fun0018_ip = 149; continue _fun0018;
case 102:
                var4 = var2.HermesInternal;
                var9 = var4.concat;
                var19 = 'https://';
                var17 = '/discovery-splashes/';
                var15 = '/';
                var13 = '.jpg';
                var18 = var10;
                var16 = var12;
                var14 = var11;
                var3 = var19[var9](var18, var17, var16, var15, var14, var13, var12);
case 149:
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var2 = '?size=';
                var2 = var4.bind(var2)(var5);
                var2 = var3 + var2;
                return var2;
case 147:
                return var1;
            }
        };
        var _closure1_slot22 = var37;
        var39 = function getGuildIconURL(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = arg1;
                var9 = var1.id;
                var8 = var1.icon;
                var7 = var1.size;
                var6 = var1.canAnimate;
                var3 = undefined;
                if(!(var6 === var3)) { _fun0019_ip = 74; continue _fun0019 }
case 114:
                var6 = false;
case 74:
                var5 = var1.lossless;
                if(!(var5 === var3)) { _fun0019_ip = 2; continue _fun0019 }
case 3:
                var5 = false;
case 2:
                var2 = _closure1_slot13;
                var1 = {};
                var10 = _closure1_slot3;
                var10 = var10.GUILD_ICON;
                var1['endpoint'] = var10;
                var10 = 'icons';
                var1['path'] = var10;
                var1['id'] = var9;
                var1['hash'] = var8;
                var1['size'] = var7;
                var1['canAnimate'] = var6;
                var1['lossless'] = var5;
                var4 = _closure1_slot11;
                var1['canWebP'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var _closure1_slot23 = var39;
        var10 = function getGuildTemplateIconURL(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var1 = arg1;
                var7 = var1.id;
                var6 = var1.icon;
                var5 = var1.size;
                var3 = undefined;
                if(!(var5 === var3)) { _fun0020_ip = 98; continue _fun0020 }
case 172:
                var5 = _closure1_slot4;
case 98:
                var4 = var1.canAnimate;
                if(!(var4 === var3)) { _fun0020_ip = 75; continue _fun0020 }
case 173:
                var4 = false;
case 75:
                var2 = _closure1_slot13;
                var1 = {};
                var8 = _closure1_slot3;
                var8 = var8.GUILD_TEMPLATE_ICON;
                var1['endpoint'] = var8;
                var8 = 'guild-templates';
                var1['path'] = var8;
                var1['id'] = var7;
                var1['hash'] = var6;
                var1['size'] = var5;
                var1['canAnimate'] = var4;
                var4 = false;
                var1['canWebP'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var _closure1_slot24 = var10;
        var33 = function getApplicationIconURL(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = arg1;
                var10 = var1.id;
                var9 = var1.icon;
                var8 = var1.size;
                var6 = undefined;
                if(!(var8 === var6)) { _fun0021_ip = 98; continue _fun0021 }
case 172:
                var8 = _closure1_slot4;
case 98:
                var12 = var1.bot;
                var2 = var1.botIconFirst;
                var5 = var1.fallbackAvatar;
                if(!(var5 === var6)) { _fun0021_ip = 119; continue _fun0021 }
case 174:
                var5 = true;
case 119:
                var7 = var1.keepAspectRatio;
                var11 = var1.guildMember;
                var4 = null;
                var3 = var4 == var12;
                var1 = undefined;
                if(var3) { _fun0021_ip = 9; continue _fun0021 }
case 47:
                var1 = var12.id;
case 9:
                if(!(var4 != var1)) { _fun0021_ip = 123; continue _fun0021 }
case 175:
                if(!(var4 != var11)) { _fun0021_ip = 123; continue _fun0021 }
case 52:
                var1 = var11.avatar;
                if(!(var4 != var1)) { _fun0021_ip = 123; continue _fun0021 }
case 176:
                var3 = _closure1_slot17;
                var1 = {};
                var13 = var12.id;
                var1['userId'] = var13;
                var13 = var11.guildId;
                var1['guildId'] = var13;
                var11 = var11.avatar;
                var1['avatar'] = var11;
                var11 = false;
                var1['canAnimate'] = var11;
                var1['size'] = var8;
                var1 = var3.bind(var6)(var1);
                if(!(var4 == var1)) { _fun0021_ip = 165; continue _fun0021 }
case 123:
                if(!(var4 != var12)) { _fun0021_ip = 177; continue _fun0021 }
case 18:
                if(!var2) { _fun0021_ip = 177; continue _fun0021 }
case 21:
                var3 = _closure1_slot15;
                var2 = false;
                var2 = var3.bind(var6)(var12, var2, var8);
                if(!(var4 == var2)) { _fun0021_ip = 178; continue _fun0021 }
case 177:
                if(!(var4 == var9)) { _fun0021_ip = 149; continue _fun0021 }
case 179:
                if(!(var4 != var12)) { _fun0021_ip = 107; continue _fun0021 }
case 78:
                var11 = _closure1_slot15;
                var3 = false;
                var3 = var11.bind(var6)(var12, var3, var8);
                if(!(var4 == var3)) { _fun0021_ip = 180; continue _fun0021 }
case 107:
                var4 = undefined;
                if(!var5) { _fun0021_ip = 181; continue _fun0021 }
case 182:
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 11;
                var5 = var12[var5];
                var4 = var11.bind(var6)(var5);
case 181:
                return var4;
case 180:
                return var3;
case 149:
                var3 = _closure1_slot32;
                var4 = var3.bind(var6)(var9);
                var3 = var9;
                if(var4) { _fun0021_ip = 183; continue _fun0021 }
case 184:
                var5 = _closure1_slot13;
                var4 = {};
                var11 = _closure1_slot3;
                var11 = var11.APPLICATION_ICON;
                var4['endpoint'] = var11;
                var11 = 'app-icons';
                var4['path'] = var11;
                var4['id'] = var10;
                var4['hash'] = var9;
                var4['size'] = var8;
                var8 = false;
                var4['canAnimate'] = var8;
                var4['canWebP'] = var8;
                var4['keepAspectRatio'] = var7;
                var3 = var5.bind(var6)(var4);
case 183:
                return var3;
case 178:
                return var2;
case 165:
                return var1;
            }
        };
        var _closure1_slot25 = var33;
        var30 = function getGameAssetURL(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var1 = arg1;
                var8 = var1.id;
                var7 = var1.hash;
                var4 = var1.size;
                var3 = undefined;
                if(!(var4 === var3)) { _fun0022_ip = 98; continue _fun0022 }
case 172:
                var4 = _closure1_slot4;
case 98:
                var6 = var1.keepAspectRatio;
                if(!(var6 === var3)) { _fun0022_ip = 75; continue _fun0022 }
case 173:
                var6 = false;
case 75:
                var5 = var1.format;
                var2 = _closure1_slot13;
                var1 = {};
                var9 = _closure1_slot3;
                var9 = var9.APPLICATION_ICON;
                var1['endpoint'] = var9;
                var9 = 'app-icons';
                var1['path'] = var9;
                var1['id'] = var8;
                var1['hash'] = var7;
                var1['size'] = var4;
                var4 = false;
                var1['canAnimate'] = var4;
                var1['keepAspectRatio'] = var6;
                var1['format'] = var5;
                var1['canWebP'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var _closure1_slot26 = var30;
        var9 = function getVideoFilterAssetURL(arg1) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var1 = arg1;
                var10 = var1.userId;
                var _closure2_slot0 = var10;
                var7 = var1.assetId;
                var _closure2_slot1 = var7;
                var6 = var1.assetHash;
                var _closure2_slot2 = var6;
                var5 = var1.size;
                var4 = var1.canAnimate;
                var3 = undefined;
                if(!(var4 === var3)) { _fun0023_ip = 174; continue _fun0023 }
case 96:
                var4 = true;
case 174:
                var2 = _closure1_slot13;
                var1 = {};
                var8 = function endpoint(arg1, arg2, arg3) {
                    var6 = _closure1_slot3;
                    var5 = var6.VIDEO_FILTER_ASSET_STORAGE;
                    var10 = _closure2_slot0;
                    var9 = _closure2_slot1;
                    var8 = _closure2_slot2;
                    var7 = arg3;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var1;
                };
                var1['endpoint'] = var8;
                var8 = global;
                var8 = var8.HermesInternal;
                var9 = var8.concat;
                var8 = 'video-filter-assets/';
                var8 = var9.bind(var8)(var10);
                var1['path'] = var8;
                var1['id'] = var7;
                var1['hash'] = var6;
                var1['size'] = var5;
                var1['canAnimate'] = var4;
                var4 = false;
                var1['canWebP'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var34 = function getChannelIconURL(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var1 = arg1;
                var13 = var1.id;
                var7 = var1.icon;
                var8 = var1.applicationId;
                var5 = var1.size;
                var4 = null;
                if(!(var4 == var8)) { _fun0024_ip = 185; continue _fun0024 }
case 74:
                var2 = _closure1_slot13;
                var1 = {};
                var3 = _closure1_slot3;
                var3 = var3.CHANNEL_ICON;
                var1['endpoint'] = var3;
                var3 = 'channel-icons';
                var1['path'] = var3;
                var1['id'] = var13;
                var1['hash'] = var7;
                var3 = false;
                var1['canAnimate'] = var3;
                var1['size'] = var5;
                var1['canWebP'] = var3;
                var10 = undefined;
                var1 = var2.bind(var10)(var1);
                if(!(var4 == var1)) { _fun0024_ip = 186; continue _fun0024 }
case 12:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 2;
                var3 = var11[var2];
                var3 = var9.bind(var10)(var3);
                var3 = var3.default;
                var3 = var3.DEFAULT_GROUP_DM_AVATARS;
                var12 = _closure1_slot1;
                var6 = 12;
                var6 = var11[var6];
                var12 = var12.bind(var10)(var6);
                var6 = var12.extractTimestamp;
                var6 = var6.bind(var12)(var13);
                var2 = var11[var2];
                var2 = var9.bind(var10)(var2);
                var2 = var2.default;
                var2 = var2.DEFAULT_GROUP_DM_AVATARS;
                var2 = var2.length;
                var2 = var6 % var2;
                var1 = var3[var2];
case 186:
                _fun0024_ip = 187; continue _fun0024;
case 185:
                var6 = _closure1_slot25;
                var2 = {};
                var2['id'] = var8;
                var2['icon'] = var7;
                var2['size'] = var5;
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                if(!(var4 == var2)) { _fun0024_ip = 188; continue _fun0024 }
case 189:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 2;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.default;
                var2 = var3.DEFAULT_CHANNEL_ICON;
case 188:
                var1 = var2;
case 187:
                return var1;
            }
        };
        var _closure1_slot27 = var34;
        var8 = function hasAnimatedGuildIcon(arg1) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var4 = arg1;
                var3 = _closure1_slot28;
                var1 = null;
                var5 = var1 == var4;
                var2 = undefined;
                var1 = undefined;
                if(var5) { _fun0025_ip = 115; continue _fun0025 }
case 71:
                var1 = var4.icon;
case 115:
                var1 = var3.bind(var2)(var1);
                return var1;
            }
        };
        var7 = function isAnimatedIconHash(arg1) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0026_ip = 190; continue _fun0026 }
case 191:
                var3 = var4.startsWith;
                var2 = 'a_';
                var1 = var3.bind(var4)(var2);
case 190:
                return var1;
            }
        };
        var _closure1_slot28 = var7;
        var6 = function isVideoAssetHash(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0027_ip = 190; continue _fun0027 }
case 191:
                var3 = var4.startsWith;
                var2 = 'v_';
                var1 = var3.bind(var4)(var2);
case 190:
                return var1;
            }
        };
        var _closure1_slot29 = var6;
        var1 = function _getAssetHash(arg1) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var1 = arg1;
case 192: // try_start_0
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.parse;
                var1 = var2.bind(var3)(var1);
                var3 = var1.pathname;
                var2 = var3.split;
                var1 = '/';
                var2 = var2.bind(var3)(var1);
                var1 = var2.pop;
                var1 = var1.bind(var2)();
case 193: // try_end0
                return var1;
case 7: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = null;
                return var1;
            }
        };
        var _closure1_slot30 = var1;
        var4 = function makeSource(arg1) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var4 = arg1;
                var3 = 'number';
                var2 = typeof var4;
                var1 = var4;
                if(!(var3 !== var2)) { _fun0029_ip = 94; continue _fun0029 }
case 117:
                var2 = {};
                var3 = null;
                var5 = var3 != var4;
                var3 = undefined;
                if(!var5) { _fun0029_ip = 44; continue _fun0029 }
case 114:
                var3 = var4;
case 44:
                var2['uri'] = var3;
                var1 = var2;
case 94:
                return var1;
            }
        };
        var _closure1_slot31 = var4;
        var2 = function isDataUri(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0030_ip = 190; continue _fun0030 }
case 191:
                var3 = _closure1_slot6;
                var2 = var3.test;
                var1 = var2.bind(var3)(var4);
case 190:
                return var1;
            }
        };
        var _closure1_slot32 = var2;
        var1 = function getAnimatedFormat(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var1 = 'gif';
                var2 = arg1;
                if(!var2) { _fun0031_ip = 194; continue _fun0031 }
case 195:
                var1 = 'webp';
case 194:
                return var1;
            }
        };
        var _closure1_slot33 = var1;
        var1 = global;
        var24 = var1.Object;
        var23 = var24.defineProperty;
        var22 = {};
        var1 = true;
        var22['value'] = var1;
        var1 = '__esModule';
        var1 = var23.bind(var24)(var3, var1, var22);
        var25 = 0;
        var22 = var32[var25];
        var1 = undefined;
        var22 = var31.bind(var1)(var22);
        var23 = var22.Endpoints;
        var _closure1_slot3 = var23;
        var22 = var22.AVATAR_SIZE;
        var _closure1_slot4 = var22;
        var22 = 1;
        var22 = var32[var22];
        var22 = var31.bind(var1)(var22);
        var22 = var22.AVATAR_DECORATION_SIZE;
        var _closure1_slot5 = var22;
        var28 = /^data:/;
        var _closure1_slot6 = var28;
        var22 = 2;
        var23 = var32[var22];
        var23 = var31.bind(var1)(var23);
        var23 = var23.default;
        var27 = var23.DEFAULT_AVATARS;
        var _closure1_slot7 = var27;
        var23 = var32[var22];
        var23 = var31.bind(var1)(var23);
        var23 = var23.default;
        var23 = var23.DEFAULT_AVATARS_SMALL;
        var24 = null;
        var26 = var27;
        if(!(var24 != var23)) { _fun0001_ip = 196; continue _fun0001 }
case 197:
        var26 = var23;
case 196:
        var _closure1_slot8 = var26;
        var23 = var32[var22];
        var23 = var31.bind(var1)(var23);
        var23 = var23.default;
        var23 = var23.DEFAULT_AVATARS_SMALL_MAX_SIZE;
        var24 = var24 != var23;
        var25 = 0;
        if(!var24) { _fun0001_ip = 40; continue _fun0001 }
case 37:
        var25 = var23;
case 40:
        var _closure1_slot9 = var25;
        var23 = var32[var22];
        var23 = var31.bind(var1)(var23);
        var23 = var23.default;
        var24 = var23.DEFAULT_PROVISIONAL_AVATARS;
        var _closure1_slot10 = var24;
        var23 = var32[var22];
        var23 = var31.bind(var1)(var23);
        var23 = var23.default;
        var23 = var23.DEFAULT_GROUP_DM_AVATARS;
        var22 = var32[var22];
        var22 = var31.bind(var1)(var22);
        var29 = var22.default;
        var22 = var29.canUseWebp;
        var22 = var22.bind(var29)();
        var _closure1_slot11 = var22;
        var29 = 3;
        var29 = var32[var29];
        var40 = var31.bind(var1)(var29);
        var29 = var40.isAndroid;
        var29 = var29.bind(var40)();
        var _closure1_slot12 = var29;
        var29 = {};
        var29['getUserAvatarURL'] = var19;
        var29['getDefaultAvatarURL'] = var20;
        var29['getGuildMemberAvatarURL'] = var17;
        var29['getGuildMemberAvatarURLSimple'] = var18;
        var29['getGuildMemberAvatarSource'] = var16;
        var29['getGuildMemberBannerURL'] = var13;
        var29['getUserBannerURL'] = var15;
        var29['getAvatarDecorationURL'] = var14;
        var29['hasAnimatedGuildIcon'] = var8;
        var29['isAnimatedIconHash'] = var7;
        var40 = function getUserAvatarSource(arg1, arg2, arg3) {
            var3 = _closure1_slot31;
            var6 = _closure1_slot16;
            var2 = undefined;
            var5 = arg1;
            var4 = arg2;
            var1 = arg3;
            var1 = var6.bind(var2)(var5, var4, var1);
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var29['getUserAvatarSource'] = var40;
        var29['getGuildIconURL'] = var39;
        var29['getGuildSplashURL'] = var38;
        var38 = function getGuildSplashSource(arg1) {
            var3 = _closure1_slot31;
            var4 = _closure1_slot19;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1);
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var29['getGuildSplashSource'] = var38;
        var29['getGuildDiscoverySplashURL'] = var37;
        var37 = function getGuildDiscoverySplashSource(arg1) {
            var3 = _closure1_slot31;
            var4 = _closure1_slot22;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1);
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var29['getGuildDiscoverySplashSource'] = var37;
        var29['getGuildBannerURL'] = var36;
        var29['getGuildHomeHeaderURL'] = var35;
        var29['getResourceChannelIconURL'] = var12;
        var29['getNewMemberActionIconURL'] = var11;
        var29['getGuildTemplateIconURL'] = var10;
        var29['getChannelIconURL'] = var34;
        var29['getEmojiURL'] = var21;
        var29['getApplicationIconURL'] = var33;
        var29['getGameAssetURL'] = var30;
        var29['getVideoFilterAssetURL'] = var9;
        var30 = function getGameAssetSource(arg1) {
            var3 = _closure1_slot31;
            var4 = _closure1_slot26;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1);
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var29['getGameAssetSource'] = var30;
        var30 = function getGuildIconSource(arg1) {
            var3 = _closure1_slot31;
            var4 = _closure1_slot23;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1);
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var29['getGuildIconSource'] = var30;
        var30 = function getGuildTemplateIconSource(arg1) {
            var3 = _closure1_slot31;
            var4 = _closure1_slot24;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1);
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var29['getGuildTemplateIconSource'] = var30;
        var30 = function getGuildBannerSource(arg1) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var5 = arguments[1];
                var3 = undefined;
                if(!(var5 === var3)) { _fun0032_ip = 198; continue _fun0032 }
case 199:
                var5 = false;
case 198:
                var2 = _closure1_slot31;
                var4 = _closure1_slot20;
                var1 = arg1;
                var1 = var4.bind(var3)(var1, var5);
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var29['getGuildBannerSource'] = var30;
        var30 = function getGuildHomeHeaderSource(arg1) {
            var3 = _closure1_slot31;
            var4 = _closure1_slot21;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1);
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var29['getGuildHomeHeaderSource'] = var30;
        var30 = function getChannelIconSource(arg1) {
            var3 = _closure1_slot31;
            var4 = _closure1_slot27;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1);
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var29['getChannelIconSource'] = var30;
        var30 = function getApplicationIconSource(arg1) {
            var3 = _closure1_slot31;
            var4 = _closure1_slot25;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var1);
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var29['getApplicationIconSource'] = var30;
        var29['makeSource'] = var4;
        var30 = function getAnimatableSourceWithFallback(arg1, arg2) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var1 = arg1;
                var5 = arg2;
                var4 = undefined;
                var3 = var5.bind(var4)(var1);
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 3;
                var2 = var7[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var6.isAndroid;
                var2 = var2.bind(var6)();
                if(!var2) { _fun0033_ip = 84; continue _fun0033 }
case 72:
                if(!var1) { _fun0033_ip = 84; continue _fun0033 }
case 200:
                var2 = 'number';
                var1 = typeof var3;
                if(!(var2 === var1)) { _fun0033_ip = 76; continue _fun0033 }
case 84:
                return var3;
case 76:
                var1 = false;
                var4 = var5.bind(var4)(var1);
                var1 = typeof var4;
                if(!(var2 !== var1)) { _fun0033_ip = 11; continue _fun0033 }
case 201:
                var5 = var4.uri;
                var2 = var3.uri;
                var1 = var4;
                if(!(var5 !== var2)) { _fun0033_ip = 17; continue _fun0033 }
case 11:
                var2 = new Array(2);
                var2[0] = var3;
                var3 = {};
                var9 = var3;
                var8 = var4;
                var4 = copyDataProperties(var9, var8);
                var5 = true;
                var4 = 'isForceCached';
                var3[3] = var5;
                var2[1] = var3;
                var1 = var2;
case 17:
                return var1;
            }
        };
        var29['getAnimatableSourceWithFallback'] = var30;
        var30 = 14;
        var30 = var32[var30];
        var32 = var31.bind(var1)(var30);
        var31 = var32.fileFinishedImporting;
        var30 = 'utils/AvatarUtils.tsx';
        var30 = var31.bind(var32)(var30);
        var3['default'] = var29;
        var3['DATA_IMAGE_PREFIX'] = var28;
        var3['DEFAULT_AVATARS'] = var27;
        var3['DEFAULT_AVATARS_SMALL'] = var26;
        var3['DEFAULT_AVATARS_SMALL_MAX_SIZE'] = var25;
        var3['DEFAULT_PROVISIONAL_AVATARS'] = var24;
        var3['DEFAULT_GROUP_DM_AVATARS'] = var23;
        var3['SUPPORTS_WEBP'] = var22;
        var22 = 5;
        var3['LEGACY_DEFAULT_AVATAR_COUNT'] = var22;
        var22 = 6;
        var3['DEFAULT_AVATAR_COUNT'] = var22;
        var3['getEmojiURL'] = var21;
        var3['getDefaultAvatarURL'] = var20;
        var3['getUserAvatarURL'] = var19;
        var3['getGuildMemberAvatarURLSimple'] = var18;
        var3['getGuildMemberAvatarURL'] = var17;
        var3['getGuildMemberAvatarSource'] = var16;
        var3['getUserBannerURL'] = var15;
        var3['getAvatarDecorationURL'] = var14;
        var3['getGuildMemberBannerURL'] = var13;
        var3['getResourceChannelIconURL'] = var12;
        var3['getNewMemberActionIconURL'] = var11;
        var3['getGuildTemplateIconURL'] = var10;
        var3['getVideoFilterAssetURL'] = var9;
        var3['hasAnimatedGuildIcon'] = var8;
        var3['isAnimatedIconHash'] = var7;
        var3['isVideoAssetHash'] = var6;
        var6 = function isAnimatedImageURL(arg1) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var5 = arg1;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0034_ip = 43; continue _fun0034 }
case 191:
                var4 = _closure1_slot28;
                var2 = _closure1_slot30;
                var3 = undefined;
                var2 = var2.bind(var3)(var5);
                var1 = var4.bind(var3)(var2);
case 43:
                return var1;
            }
        };
        var3['isAnimatedImageURL'] = var6;
        var5 = function isVideoURL(arg1) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var5 = arg1;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0035_ip = 43; continue _fun0035 }
case 191:
                var4 = _closure1_slot29;
                var2 = _closure1_slot30;
                var3 = undefined;
                var2 = var2.bind(var3)(var5);
                var1 = var4.bind(var3)(var2);
case 43:
                return var1;
            }
        };
        var3['isVideoURL'] = var5;
        var3['makeSource'] = var4;
        var3['isDataUri'] = var2;
        return var1;
    }
})();
// app/modules/explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SearchMediaTypes;
    var _closure1_slot5 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.title;
            var9 = var1.subtitle;
            var2 = var1.handlePress;
            var _closure2_slot0 = var2;
            var11 = var1.excluded;
            var7 = var1.currentValue;
            var3 = _closure1_slot3;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = null;
            var8 = var3 == var4;
            var1 = undefined;
            var6 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var4.nsfwAllowed;
case 2:
            var8 = new Array(0);
            var4 = var3 != var11;
            if(!var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var11.includes;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 3;
            var12 = var15[var12];
            var12 = var14.bind(var1)(var12);
            var12 = var12.ExplicitContentRedaction;
            var12 = var12.SHOW;
            var4 = var13.bind(var11)(var12);
case 4:
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = !var6;
case 6:
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var8.push;
            var4 = {};
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 3;
            var12 = var16[var12];
            var12 = var15.bind(var1)(var12);
            var12 = var12.ExplicitContentRedaction;
            var12 = var12.SHOW;
            var4['value'] = var12;
            var12 = 4;
            var13 = var16[var12];
            var13 = var15.bind(var1)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var1)(var12);
            var12 = var12.t;
            var12 = var12.5k5OFh;
            var12 = var13.bind(var14)(var12);
            var4['label'] = var12;
            var12 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.shouldAgeVerifyForExplicitMedia;
                    var2 = var2.bind(var3)();
                    if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 10:
                    var3 = _closure2_slot0;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 3;
                    var2 = var6[var2];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.ExplicitContentRedaction;
                    var2 = var2.SHOW;
                    var2 = var3.bind(var1)(var2);
                    _fun0002_ip = 11; continue _fun0002;
case 5:
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var2 = var7[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.showAgeVerificationGetStartedModal;
                    var2 = {};
                    var6 = _closure1_slot0;
                    var5 = 7;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.AgeVerificationModalEntryPoint;
                    var5 = var5.OBSCURED_MEDIA;
                    var2['entryPoint'] = var5;
                    var2 = var3.bind(var4)(var2);
case 11:
                    return var1;
                }
            };
            var4['onPress'] = var12;
            var4 = var6.bind(var8)(var4);
case 8:
            var4 = var3 != var11;
            if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var12 = var11.includes;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 3;
            var6 = var14[var6];
            var6 = var13.bind(var1)(var6);
            var6 = var6.ExplicitContentRedaction;
            var6 = var6.BLUR;
            var4 = var12.bind(var11)(var6);
case 12:
            if(var4) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var8.push;
            var4 = {};
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var12 = 3;
            var12 = var16[var12];
            var12 = var15.bind(var1)(var12);
            var12 = var12.ExplicitContentRedaction;
            var12 = var12.BLUR;
            var4['value'] = var12;
            var12 = 4;
            var13 = var16[var12];
            var13 = var15.bind(var1)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var1)(var12);
            var12 = var12.t;
            var12 = var12.S49UaW;
            var12 = var13.bind(var14)(var12);
            var4['label'] = var12;
            var12 = function onPress() {
                var3 = _closure2_slot0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.ExplicitContentRedaction;
                var2 = var2.BLUR;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4['onPress'] = var12;
            var4 = var6.bind(var8)(var4);
case 14:
            var3 = var3 != var11;
            if(!var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var11.includes;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 3;
            var4 = var13[var4];
            var4 = var12.bind(var1)(var4);
            var4 = var4.ExplicitContentRedaction;
            var4 = var4.BLOCK;
            var3 = var6.bind(var11)(var4);
case 16:
            if(var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var8.push;
            var3 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 3;
            var6 = var14[var6];
            var6 = var13.bind(var1)(var6);
            var6 = var6.ExplicitContentRedaction;
            var6 = var6.BLOCK;
            var3['value'] = var6;
            var6 = 4;
            var11 = var14[var6];
            var11 = var13.bind(var1)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var6 = var14[var6];
            var6 = var13.bind(var1)(var6);
            var6 = var6.t;
            var6 = var6.D/157e;
            var6 = var11.bind(var12)(var6);
            var3['label'] = var6;
            var5 = function onPress() {
                var3 = _closure2_slot0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.ExplicitContentRedaction;
                var2 = var2.BLOCK;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3['onPress'] = var5;
            var3 = var4.bind(var8)(var3);
case 18:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 8;
            var4 = var3[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.openLazy;
            var11 = _closure1_slot0;
            var4 = 10;
            var4 = var3[var4];
            var11 = var11.bind(var1)(var4);
            var4 = 9;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var11.bind(var1)(var4, var3);
            var3 = _closure1_slot4;
            var2 = {};
            var2['title'] = var10;
            var2['subtitle'] = var9;
            var2['options'] = var8;
            var2['currentValue'] = var7;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        }
    };
    var3['handleSensitiveMediaFilterPress'] = var4;
    var2 = function shouldAgeVerifyForSearchMedia(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var7 = arg2;
            var1 = null;
            if(!(var1 != var7)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 11;
            var2 = var2[var8];
            var5 = undefined;
            var6 = var6.bind(var5)(var2);
            var2 = var6.getEnabledHarmTypesForMessage;
            var7 = var2.bind(var6)(var7);
            var2 = 0;
            if(!(var2 !== var7)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var6 = var4.type;
            var2 = _closure1_slot5;
            var2 = var2.ATTACHMENT;
            if(!(var6 !== var2)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var9 = var4.type;
            var2 = _closure1_slot5;
            var2 = var2.EMBED;
            var6 = null;
            if(!(var9 === var2)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var2 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 12;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.ObscuredMediaTypes;
            var9 = var9.Embed;
            var2['type'] = var9;
            var9 = var4.embed;
            var2['media'] = var9;
            var6 = var2;
            _fun0003_ip = 26; continue _fun0003;
case 24:
            var2 = {};
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 12;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var9 = var9.ObscuredMediaTypes;
            var9 = var9.Attachment;
            var2['type'] = var9;
            var4 = var4.attachment;
            var2['media'] = var4;
            var6 = var2;
case 26:
            var1 = var1 != var6;
            if(!var1) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var4 = var4.bind(var5)(var2);
            var2 = var4.isMediaObscuredForHarmTypes;
            var2 = var2.bind(var4)(var6, var7);
            if(!var2) { _fun0003_ip = 30; continue _fun0003 }
case 8:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 5;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.shouldAgeVerifyForExplicitMedia;
            var2 = var3.bind(var4)();
case 30:
            var1 = var2;
case 28:
            return var1;
case 22:
            var1 = false;
            return var1;
case 20:
            var1 = false;
            return var1;
        }
    };
    var3['shouldAgeVerifyForSearchMedia'] = var2;
    return var1;
})();
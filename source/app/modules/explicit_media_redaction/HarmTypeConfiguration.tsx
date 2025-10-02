// app/modules/explicit_media_redaction/HarmTypeConfiguration.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var6 = 0;
    var2 = var8[var6];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var13 = var2.MessageAttachmentFlags;
    var12 = var2.MessageEmbedFlags;
    var5 = {};
    var2 = 'explicit';
    var5['EXPLICIT'] = var2;
    var2 = 'gore';
    var5['GORE'] = var2;
    var4 = {};
    var4['NONE'] = var6;
    var2 = 'NONE';
    var4[var6] = var2;
    var14 = 1;
    var4['EXPLICIT'] = var14;
    var2 = 'EXPLICIT';
    var4[var14] = var2;
    var11 = 2;
    var4['GORE'] = var11;
    var2 = 'GORE';
    var4[var11] = var2;
    var6 = 3;
    var4['ALL'] = var6;
    var2 = 'ALL';
    var4[var6] = var2;
    var2 = {};
    var9 = var5.EXPLICIT;
    var6 = {};
    var15 = var5.EXPLICIT;
    var6['harmType'] = var15;
    var15 = var8[var14];
    var15 = var7.bind(var1)(var15);
    var15 = var15.ObscureReason;
    var15 = var15.EXPLICIT_CONTENT;
    var6['obscureReason'] = var15;
    var15 = var13.CONTAINS_EXPLICIT_MEDIA;
    var6['attachmentFlag'] = var15;
    var15 = var12.CONTAINS_EXPLICIT_MEDIA;
    var6['embedFlag'] = var15;
    var15 = var8[var11];
    var15 = var7.bind(var1)(var15);
    var15 = var15.ContentScanFlags;
    var15 = var15.EXPLICIT;
    var6['genericMediaFlag'] = var15;
    var15 = var4.EXPLICIT;
    var6['bitmask'] = var15;
    var15 = 'obscure_blur_effect_explicit_content_enabled';
    var6['devSettingKey'] = var15;
    var15 = function getProtoUserSettings(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = null;
            var3 = var5 == var1;
            var2 = undefined;
            var4 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var1.textAndImages;
            var3 = var5 == var1;
            var4 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = var1.explicitContentSettings;
case 2:
            var1 = {};
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var7 = 3;
            var6 = var6[var7];
            var6 = var8.bind(var2)(var6);
            var6 = var6.ContentHarmTypeChannel;
            var8 = var6.GUILD;
            var9 = var5 == var4;
            var6 = undefined;
            if(var9) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = var4.explicitContentGuilds;
case 5:
            var1[var8] = var6;
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var7];
            var6 = var8.bind(var2)(var6);
            var6 = var6.ContentHarmTypeChannel;
            var8 = var6.FRIEND_DM;
            var9 = var5 == var4;
            var6 = undefined;
            if(var9) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = var4.explicitContentFriendDm;
case 7:
            var1[var8] = var6;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var6.bind(var2)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.NON_FRIEND_DM;
            var5 = var5 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var4.explicitContentNonFriendDm;
case 9:
            var1[var3] = var2;
            return var1;
        }
    };
    var6['getProtoUserSettings'] = var15;
    var15 = function getUserSettingsWithDefaults(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var7 = null;
            if(!(var7 == var9)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = {};
            var10 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 3;
            var6 = var5[var3];
            var2 = undefined;
            var6 = var10.bind(var2)(var6);
            var6 = var6.ContentHarmTypeChannel;
            var8 = var6.GUILD;
            var6 = 4;
            var5 = var5[var6];
            var5 = var10.bind(var2)(var5);
            var10 = var5.ExplicitContentSettings;
            var5 = var10.getSetting;
            var10 = var5.bind(var10)();
            var11 = var7 == var10;
            var5 = undefined;
            if(var11) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = var10.explicitContentGuilds;
case 13:
            var1[var8] = var5;
            var10 = _closure1_slot0;
            var5 = _closure1_slot1;
            var8 = var5[var3];
            var8 = var10.bind(var2)(var8);
            var8 = var8.ContentHarmTypeChannel;
            var8 = var8.FRIEND_DM;
            var5 = var5[var6];
            var5 = var10.bind(var2)(var5);
            var10 = var5.ExplicitContentSettings;
            var5 = var10.getSetting;
            var10 = var5.bind(var10)();
            var11 = var7 == var10;
            var5 = undefined;
            if(var11) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var5 = var10.explicitContentFriendDm;
case 15:
            var1[var8] = var5;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = var4[var3];
            var3 = var5.bind(var2)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.NON_FRIEND_DM;
            var4 = var4[var6];
            var4 = var5.bind(var2)(var4);
            var5 = var4.ExplicitContentSettings;
            var4 = var5.getSetting;
            var4 = var4.bind(var5)();
            var5 = var7 == var4;
            var2 = undefined;
            if(var5) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = var4.explicitContentNonFriendDm;
case 17:
            var1[var3] = var2;
            var9 = var1;
case 11:
            var1 = {};
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var12 = 3;
            var3 = var2[var12];
            var11 = undefined;
            var3 = var4.bind(var11)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.GUILD;
            var5 = 5;
            var2 = var2[var5];
            var6 = var4.bind(var11)(var2);
            var4 = var6.resolveExplicitContentSettingWithDefaults;
            var2 = {};
            var13 = var7 == var9;
            var10 = undefined;
            if(var13) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var12];
            var13 = var14.bind(var11)(var13);
            var13 = var13.ContentHarmTypeChannel;
            var13 = var13.GUILD;
            var10 = var9[var13];
case 19:
            var2['setting'] = var10;
            var2 = var4.bind(var6)(var2);
            var1[var3] = var2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var3 = var2[var12];
            var3 = var4.bind(var11)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.FRIEND_DM;
            var2 = var2[var5];
            var10 = var4.bind(var11)(var2);
            var4 = var10.resolveExplicitContentSettingWithDefaults;
            var2 = {'setting': null, 'isDm': true, 'isFriend': true};
            var13 = var7 == var9;
            var6 = undefined;
            if(var13) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var12];
            var13 = var14.bind(var11)(var13);
            var13 = var13.ContentHarmTypeChannel;
            var13 = var13.FRIEND_DM;
            var6 = var9[var13];
case 21:
            var2['setting'] = var6;
            var6 = true;
            var2 = var4.bind(var10)(var2);
            var1[var3] = var2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var3 = var2[var12];
            var3 = var4.bind(var11)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.NON_FRIEND_DM;
            var2 = var2[var5];
            var5 = var4.bind(var11)(var2);
            var4 = var5.resolveExplicitContentSettingWithDefaults;
            var2 = {};
            var10 = var7 == var9;
            var7 = undefined;
            if(var10) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var10 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var12];
            var8 = var10.bind(var11)(var8);
            var8 = var8.ContentHarmTypeChannel;
            var8 = var8.NON_FRIEND_DM;
            var7 = var9[var8];
case 23:
            var2['setting'] = var7;
            var2['isDm'] = var6;
            var2 = var4.bind(var5)(var2);
            var1[var3] = var2;
            return var1;
        }
    };
    var6['getUserSettingsWithDefaults'] = var15;
    var2[var9] = var6;
    var9 = var5.GORE;
    var6 = {};
    var15 = var5.GORE;
    var6['harmType'] = var15;
    var14 = var8[var14];
    var14 = var7.bind(var1)(var14);
    var14 = var14.ObscureReason;
    var14 = var14.GORE_CONTENT;
    var6['obscureReason'] = var14;
    var13 = var13.CONTAINS_GORE_CONTENT;
    var6['attachmentFlag'] = var13;
    var12 = var12.CONTAINS_GORE_CONTENT;
    var6['embedFlag'] = var12;
    var11 = var8[var11];
    var11 = var7.bind(var1)(var11);
    var11 = var11.ContentScanFlags;
    var11 = var11.GORE;
    var6['genericMediaFlag'] = var11;
    var11 = var4.GORE;
    var6['bitmask'] = var11;
    var11 = 'obscure_blur_effect_gore_content_enabled';
    var6['devSettingKey'] = var11;
    var11 = function getProtoUserSettings(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = null;
            var3 = var5 == var1;
            var2 = undefined;
            var4 = undefined;
            if(var3) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var1 = var1.textAndImages;
            var3 = var5 == var1;
            var4 = undefined;
            if(var3) { _fun0003_ip = 2; continue _fun0003 }
case 4:
            var4 = var1.goreContentSettings;
case 2:
            var1 = {};
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var7 = 3;
            var6 = var6[var7];
            var6 = var8.bind(var2)(var6);
            var6 = var6.ContentHarmTypeChannel;
            var8 = var6.GUILD;
            var9 = var5 == var4;
            var6 = undefined;
            if(var9) { _fun0003_ip = 5; continue _fun0003 }
case 6:
            var6 = var4.goreContentGuilds;
case 5:
            var1[var8] = var6;
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var7];
            var6 = var8.bind(var2)(var6);
            var6 = var6.ContentHarmTypeChannel;
            var8 = var6.FRIEND_DM;
            var9 = var5 == var4;
            var6 = undefined;
            if(var9) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var6 = var4.goreContentFriendDm;
case 7:
            var1[var8] = var6;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var6.bind(var2)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.NON_FRIEND_DM;
            var5 = var5 == var4;
            var2 = undefined;
            if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var2 = var4.goreContentNonFriendDm;
case 9:
            var1[var3] = var2;
            return var1;
        }
    };
    var6['getProtoUserSettings'] = var11;
    var10 = function getUserSettingsWithDefaults(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var9 = arg1;
            var7 = null;
            if(!(var7 == var9)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var1 = {};
            var10 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 3;
            var6 = var5[var3];
            var2 = undefined;
            var6 = var10.bind(var2)(var6);
            var6 = var6.ContentHarmTypeChannel;
            var8 = var6.GUILD;
            var6 = 4;
            var5 = var5[var6];
            var5 = var10.bind(var2)(var5);
            var10 = var5.GoreContentSettings;
            var5 = var10.getSetting;
            var10 = var5.bind(var10)();
            var11 = var7 == var10;
            var5 = undefined;
            if(var11) { _fun0004_ip = 13; continue _fun0004 }
case 14:
            var5 = var10.goreContentGuilds;
case 13:
            var1[var8] = var5;
            var10 = _closure1_slot0;
            var5 = _closure1_slot1;
            var8 = var5[var3];
            var8 = var10.bind(var2)(var8);
            var8 = var8.ContentHarmTypeChannel;
            var8 = var8.FRIEND_DM;
            var5 = var5[var6];
            var5 = var10.bind(var2)(var5);
            var10 = var5.GoreContentSettings;
            var5 = var10.getSetting;
            var10 = var5.bind(var10)();
            var11 = var7 == var10;
            var5 = undefined;
            if(var11) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var5 = var10.goreContentFriendDm;
case 15:
            var1[var8] = var5;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = var4[var3];
            var3 = var5.bind(var2)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.NON_FRIEND_DM;
            var4 = var4[var6];
            var4 = var5.bind(var2)(var4);
            var5 = var4.GoreContentSettings;
            var4 = var5.getSetting;
            var4 = var4.bind(var5)();
            var5 = var7 == var4;
            var2 = undefined;
            if(var5) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var2 = var4.goreContentNonFriendDm;
case 17:
            var1[var3] = var2;
            var9 = var1;
case 11:
            var1 = {};
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var12 = 3;
            var3 = var2[var12];
            var11 = undefined;
            var3 = var4.bind(var11)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.GUILD;
            var5 = 6;
            var2 = var2[var5];
            var6 = var4.bind(var11)(var2);
            var4 = var6.resolveGoreSettingWithDefaults;
            var2 = {};
            var13 = var7 == var9;
            var10 = undefined;
            if(var13) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var12];
            var13 = var14.bind(var11)(var13);
            var13 = var13.ContentHarmTypeChannel;
            var13 = var13.GUILD;
            var10 = var9[var13];
case 19:
            var2['setting'] = var10;
            var2 = var4.bind(var6)(var2);
            var1[var3] = var2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var3 = var2[var12];
            var3 = var4.bind(var11)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.FRIEND_DM;
            var2 = var2[var5];
            var10 = var4.bind(var11)(var2);
            var4 = var10.resolveGoreSettingWithDefaults;
            var2 = {'setting': null, 'isDm': true, 'isFriend': true};
            var13 = var7 == var9;
            var6 = undefined;
            if(var13) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var12];
            var13 = var14.bind(var11)(var13);
            var13 = var13.ContentHarmTypeChannel;
            var13 = var13.FRIEND_DM;
            var6 = var9[var13];
case 21:
            var2['setting'] = var6;
            var6 = true;
            var2 = var4.bind(var10)(var2);
            var1[var3] = var2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var3 = var2[var12];
            var3 = var4.bind(var11)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.NON_FRIEND_DM;
            var2 = var2[var5];
            var5 = var4.bind(var11)(var2);
            var4 = var5.resolveGoreSettingWithDefaults;
            var2 = {};
            var10 = var7 == var9;
            var7 = undefined;
            if(var10) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var10 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var12];
            var8 = var10.bind(var11)(var8);
            var8 = var8.ContentHarmTypeChannel;
            var8 = var8.NON_FRIEND_DM;
            var7 = var9[var8];
case 23:
            var2['setting'] = var7;
            var2['isDm'] = var6;
            var2 = var4.bind(var5)(var2);
            var1[var3] = var2;
            return var1;
        }
    };
    var6['getUserSettingsWithDefaults'] = var10;
    var2[var9] = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/explicit_media_redaction/HarmTypeConfiguration.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ContentHarmType'] = var5;
    var3['ContentHarmTypeBitMask'] = var4;
    var3['CONTENT_SCAN_TYPE_REGISTRY'] = var2;
    return var1;
})();
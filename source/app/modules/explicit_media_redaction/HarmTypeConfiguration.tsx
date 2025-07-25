// app/modules/explicit_media_redaction/HarmTypeConfiguration.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
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
 0:
            var1 = arg1;
            var5 = null;
            var3 = var5 == var1;
            var2 = undefined;
            var4 = undefined;
            if(var3) { _fun0001_ip = 37; continue _fun0001 }
 16:
            var1 = var1.textAndImages;
            var3 = var5 == var1;
            var4 = undefined;
            if(var3) { _fun0001_ip = 37; continue _fun0001 }
 31:
            var4 = var1.explicitContentSettings;
 37:
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
            if(var9) { _fun0001_ip = 89; continue _fun0001 }
 83:
            var6 = var4.explicitContentGuilds;
 89:
            var1[var8] = var6;
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var7];
            var6 = var8.bind(var2)(var6);
            var6 = var6.ContentHarmTypeChannel;
            var8 = var6.FRIEND_DM;
            var9 = var5 == var4;
            var6 = undefined;
            if(var9) { _fun0001_ip = 138; continue _fun0001 }
 132:
            var6 = var4.explicitContentFriendDm;
 138:
            var1[var8] = var6;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var6.bind(var2)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.NON_FRIEND_DM;
            var5 = var5 == var4;
            var2 = undefined;
            if(var5) { _fun0001_ip = 187; continue _fun0001 }
 181:
            var2 = var4.explicitContentNonFriendDm;
 187:
            var1[var3] = var2;
            return var1;
        }
    };
    var6['getProtoUserSettings'] = var15;
    var15 = function getUserSettingsWithDefaults(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var9 = arg1;
            var7 = null;
            if(!(var7 == var9)) { _fun0002_ip = 250; continue _fun0002 }
 12:
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
            if(var11) { _fun0002_ip = 94; continue _fun0002 }
 88:
            var5 = var10.explicitContentGuilds;
 94:
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
            if(var11) { _fun0002_ip = 168; continue _fun0002 }
 162:
            var5 = var10.explicitContentFriendDm;
 168:
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
            if(var5) { _fun0002_ip = 242; continue _fun0002 }
 236:
            var2 = var4.explicitContentNonFriendDm;
 242:
            var1[var3] = var2;
            var9 = var1;
 250:
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
            if(var13) { _fun0002_ip = 351; continue _fun0002 }
 318:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var12];
            var13 = var14.bind(var11)(var13);
            var13 = var13.ContentHarmTypeChannel;
            var13 = var13.GUILD;
            var10 = var9[var13];
 351:
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
            if(var13) { _fun0002_ip = 466; continue _fun0002 }
 433:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var12];
            var13 = var14.bind(var11)(var13);
            var13 = var13.ContentHarmTypeChannel;
            var13 = var13.FRIEND_DM;
            var6 = var9[var13];
 466:
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
            if(var10) { _fun0002_ip = 572; continue _fun0002 }
 539:
            var10 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var12];
            var8 = var10.bind(var11)(var8);
            var8 = var8.ContentHarmTypeChannel;
            var8 = var8.NON_FRIEND_DM;
            var7 = var9[var8];
 572:
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
 0:
            var1 = arg1;
            var5 = null;
            var3 = var5 == var1;
            var2 = undefined;
            var4 = undefined;
            if(var3) { _fun0003_ip = 37; continue _fun0003 }
 16:
            var1 = var1.textAndImages;
            var3 = var5 == var1;
            var4 = undefined;
            if(var3) { _fun0003_ip = 37; continue _fun0003 }
 31:
            var4 = var1.goreContentSettings;
 37:
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
            if(var9) { _fun0003_ip = 89; continue _fun0003 }
 83:
            var6 = var4.goreContentGuilds;
 89:
            var1[var8] = var6;
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var7];
            var6 = var8.bind(var2)(var6);
            var6 = var6.ContentHarmTypeChannel;
            var8 = var6.FRIEND_DM;
            var9 = var5 == var4;
            var6 = undefined;
            if(var9) { _fun0003_ip = 138; continue _fun0003 }
 132:
            var6 = var4.goreContentFriendDm;
 138:
            var1[var8] = var6;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var6.bind(var2)(var3);
            var3 = var3.ContentHarmTypeChannel;
            var3 = var3.NON_FRIEND_DM;
            var5 = var5 == var4;
            var2 = undefined;
            if(var5) { _fun0003_ip = 187; continue _fun0003 }
 181:
            var2 = var4.goreContentNonFriendDm;
 187:
            var1[var3] = var2;
            return var1;
        }
    };
    var6['getProtoUserSettings'] = var11;
    var11 = function getUserSettingsWithDefaults(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var9 = arg1;
            var7 = null;
            if(!(var7 == var9)) { _fun0004_ip = 250; continue _fun0004 }
 12:
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
            if(var11) { _fun0004_ip = 94; continue _fun0004 }
 88:
            var5 = var10.goreContentGuilds;
 94:
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
            if(var11) { _fun0004_ip = 168; continue _fun0004 }
 162:
            var5 = var10.goreContentFriendDm;
 168:
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
            if(var5) { _fun0004_ip = 242; continue _fun0004 }
 236:
            var2 = var4.goreContentNonFriendDm;
 242:
            var1[var3] = var2;
            var9 = var1;
 250:
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
            if(var13) { _fun0004_ip = 351; continue _fun0004 }
 318:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var12];
            var13 = var14.bind(var11)(var13);
            var13 = var13.ContentHarmTypeChannel;
            var13 = var13.GUILD;
            var10 = var9[var13];
 351:
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
            if(var13) { _fun0004_ip = 466; continue _fun0004 }
 433:
            var14 = _closure1_slot0;
            var13 = _closure1_slot1;
            var13 = var13[var12];
            var13 = var14.bind(var11)(var13);
            var13 = var13.ContentHarmTypeChannel;
            var13 = var13.FRIEND_DM;
            var6 = var9[var13];
 466:
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
            if(var10) { _fun0004_ip = 572; continue _fun0004 }
 539:
            var10 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var12];
            var8 = var10.bind(var11)(var8);
            var8 = var8.ContentHarmTypeChannel;
            var8 = var8.NON_FRIEND_DM;
            var7 = var9[var8];
 572:
            var2['setting'] = var7;
            var2['isDm'] = var6;
            var2 = var4.bind(var5)(var2);
            var1[var3] = var2;
            return var1;
        }
    };
    var6['getUserSettingsWithDefaults'] = var11;
    var10 = function isEligible() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.isEligibleForSensitiveContentGoreExperiment;
        var1 = 'ContentPolicyRegistry';
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var6['isEligible'] = var10;
    var2[var9] = var6;
    var6 = 8;
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
// discord_common/js/packages/protos/discord_protos/users/v1/user.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var54 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var55 = dependencyMap;
    var _closure1_slot0 = var54;
    var _closure1_slot1 = var55;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot49;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot48 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot49 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot49 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var7 = 0;
    var2 = var55[var7];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var6 = 1;
    var2 = var55[var6];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var5 = 2;
    var2 = var55[var5];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var19 = 3;
    var2 = var55[var19];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var18 = 4;
    var2 = var55[var18];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var17 = 5;
    var2 = var55[var17];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var52 = {};
    var52['DAY_OF_WEEK_UNSPECIFIED'] = var7;
    var2 = 'DAY_OF_WEEK_UNSPECIFIED';
    var52[var7] = var2;
    var52['MONDAY'] = var6;
    var2 = 'MONDAY';
    var52[var6] = var2;
    var52['TUESDAY'] = var5;
    var2 = 'TUESDAY';
    var52[var5] = var2;
    var52['WEDNESDAY'] = var19;
    var2 = 'WEDNESDAY';
    var52[var19] = var2;
    var52['THURSDAY'] = var18;
    var2 = 'THURSDAY';
    var52[var18] = var2;
    var52['FRIDAY'] = var17;
    var2 = 'FRIDAY';
    var52[var17] = var2;
    var2 = 6;
    var52['SATURDAY'] = var2;
    var4 = 'SATURDAY';
    var52[var2] = var4;
    var16 = 7;
    var52['SUNDAY'] = var16;
    var4 = 'SUNDAY';
    var52[var16] = var4;
    var _closure1_slot8 = var52;
    var51 = {};
    var51['UNSPECIFIED'] = var7;
    var4 = 'UNSPECIFIED';
    var51[var7] = var4;
    var13 = 11;
    var51['DEFAULT'] = var13;
    var8 = 'DEFAULT';
    var51[var13] = var8;
    var51['BANGERS'] = var6;
    var8 = 'BANGERS';
    var51[var6] = var8;
    var51['BIO_RHYME'] = var5;
    var8 = 'BIO_RHYME';
    var51[var5] = var8;
    var51['CHERRY_BOMB'] = var19;
    var8 = 'CHERRY_BOMB';
    var51[var19] = var8;
    var51['CHICLE'] = var18;
    var8 = 'CHICLE';
    var51[var18] = var8;
    var51['COMPAGNON'] = var17;
    var8 = 'COMPAGNON';
    var51[var17] = var8;
    var51['MUSEO_MODERNO'] = var2;
    var8 = 'MUSEO_MODERNO';
    var51[var2] = var8;
    var51['NEO_CASTEL'] = var16;
    var8 = 'NEO_CASTEL';
    var51[var16] = var8;
    var15 = 8;
    var51['PIXELIFY'] = var15;
    var8 = 'PIXELIFY';
    var51[var15] = var8;
    var14 = 9;
    var51['RIBES'] = var14;
    var8 = 'RIBES';
    var51[var14] = var8;
    var53 = 10;
    var51['SINISTRE'] = var53;
    var8 = 'SINISTRE';
    var51[var53] = var8;
    var12 = 12;
    var51['ZILLA_SLAB'] = var12;
    var8 = 'ZILLA_SLAB';
    var51[var12] = var8;
    var11 = 13;
    var51['PLAYPEN_SANS'] = var11;
    var8 = 'PLAYPEN_SANS';
    var51[var11] = var8;
    var10 = 14;
    var51['ORBITRON'] = var10;
    var8 = 'ORBITRON';
    var51[var10] = var8;
    var9 = 15;
    var51['NEW_ROCKER'] = var9;
    var8 = 'NEW_ROCKER';
    var51[var9] = var8;
    var8 = 16;
    var51['KALAM'] = var8;
    var20 = 'KALAM';
    var51[var8] = var20;
    var _closure1_slot9 = var51;
    var50 = {};
    var50['UNSPECIFIED'] = var7;
    var50[var7] = var4;
    var50['SOLID'] = var6;
    var20 = 'SOLID';
    var50[var6] = var20;
    var50['GRADIENT'] = var5;
    var20 = 'GRADIENT';
    var50[var5] = var20;
    var50['NEON'] = var19;
    var20 = 'NEON';
    var50[var19] = var20;
    var50['TOON'] = var18;
    var20 = 'TOON';
    var50[var18] = var20;
    var50['POP'] = var17;
    var20 = 'POP';
    var50[var17] = var20;
    var50['GLOW'] = var2;
    var20 = 'GLOW';
    var50[var2] = var20;
    var50['PRISM'] = var16;
    var20 = 'PRISM';
    var50[var16] = var20;
    var50['GUMMY'] = var15;
    var20 = 'GUMMY';
    var50[var15] = var20;
    var21 = 1001;
    var50['TEST_1'] = var21;
    var20 = 'TEST_1';
    var50[var21] = var20;
    var21 = 1002;
    var50['TEST_2'] = var21;
    var20 = 'TEST_2';
    var50[var21] = var20;
    var21 = 1003;
    var50['TEST_3'] = var21;
    var20 = 'TEST_3';
    var50[var21] = var20;
    var21 = 1004;
    var50['TEST_4'] = var21;
    var20 = 'TEST_4';
    var50[var21] = var20;
    var _closure1_slot10 = var50;
    var49 = {};
    var49['BADGE_TYPE_UNSPECIFIED'] = var7;
    var20 = 'BADGE_TYPE_UNSPECIFIED';
    var49[var7] = var20;
    var49['APRIL_FOOLS_2026'] = var6;
    var20 = 'APRIL_FOOLS_2026';
    var49[var6] = var20;
    var48 = {};
    var48['UNSPECIFIED'] = var7;
    var48[var7] = var4;
    var48['TO_BE_ANONYMIZED_USER'] = var6;
    var20 = 'TO_BE_ANONYMIZED_USER';
    var48[var6] = var20;
    var48['INACCESSIBLE_ANONYMIZED_USER'] = var5;
    var20 = 'INACCESSIBLE_ANONYMIZED_USER';
    var48[var5] = var20;
    var48['ANONYMOUS_USER'] = var19;
    var20 = 'ANONYMOUS_USER';
    var48[var19] = var20;
    var _closure1_slot11 = var48;
    var47 = {};
    var47['AGE_ASSURANCE_TIER_UNSPECIFIED'] = var7;
    var20 = 'AGE_ASSURANCE_TIER_UNSPECIFIED';
    var47[var7] = var20;
    var47['AGE_ASSURANCE_TIER_1'] = var6;
    var20 = 'AGE_ASSURANCE_TIER_1';
    var47[var6] = var20;
    var47['AGE_ASSURANCE_TIER_2'] = var5;
    var20 = 'AGE_ASSURANCE_TIER_2';
    var47[var5] = var20;
    var47['AGE_ASSURANCE_TIER_3'] = var19;
    var20 = 'AGE_ASSURANCE_TIER_3';
    var47[var19] = var20;
    var47['AGE_ASSURANCE_TIER_4'] = var18;
    var20 = 'AGE_ASSURANCE_TIER_4';
    var47[var18] = var20;
    var46 = {};
    var46['UNSPECIFIED'] = var7;
    var46[var7] = var4;
    var46['ID_SELFIE_MATCH'] = var6;
    var20 = 'ID_SELFIE_MATCH';
    var46[var6] = var20;
    var46['ID_SCAN'] = var5;
    var20 = 'ID_SCAN';
    var46[var5] = var20;
    var46['FACIAL_AGE_ESTIMATION'] = var19;
    var20 = 'FACIAL_AGE_ESTIMATION';
    var46[var19] = var20;
    var46['BEHAVIORAL_INFERENCE'] = var18;
    var20 = 'BEHAVIORAL_INFERENCE';
    var46[var18] = var20;
    var46['CREDIT_CARD'] = var17;
    var20 = 'CREDIT_CARD';
    var46[var17] = var20;
    var46['EMAIL_DOMAIN'] = var2;
    var20 = 'EMAIL_DOMAIN';
    var46[var2] = var20;
    var46['OS_SIGNAL'] = var16;
    var20 = 'OS_SIGNAL';
    var46[var16] = var20;
    var46['ML_AGE_INFERENCE'] = var15;
    var20 = 'ML_AGE_INFERENCE';
    var46[var15] = var20;
    var46['GOOGLE_WALLET'] = var14;
    var20 = 'GOOGLE_WALLET';
    var46[var14] = var20;
    var _closure1_slot12 = var46;
    var45 = {};
    var45['UNSPECIFIED'] = var7;
    var45[var7] = var4;
    var45['K_ID'] = var6;
    var21 = 'K_ID';
    var45[var6] = var21;
    var45['PERSONA'] = var5;
    var21 = 'PERSONA';
    var45[var5] = var21;
    var45['INCODE'] = var19;
    var21 = 'INCODE';
    var45[var19] = var21;
    var45['DISCORD'] = var18;
    var21 = 'DISCORD';
    var45[var18] = var21;
    var45['GOOGLE_WALLET'] = var17;
    var45[var17] = var20;
    var _closure1_slot13 = var45;
    var44 = {};
    var44['AGE_ASSURANCE_GROUP_UNSPECIFIED'] = var7;
    var20 = 'AGE_ASSURANCE_GROUP_UNSPECIFIED';
    var44[var7] = var20;
    var44['AGE_ASSURANCE_GROUP_13'] = var6;
    var20 = 'AGE_ASSURANCE_GROUP_13';
    var44[var6] = var20;
    var44['AGE_ASSURANCE_GROUP_14'] = var5;
    var20 = 'AGE_ASSURANCE_GROUP_14';
    var44[var5] = var20;
    var44['AGE_ASSURANCE_GROUP_15'] = var19;
    var20 = 'AGE_ASSURANCE_GROUP_15';
    var44[var19] = var20;
    var44['AGE_ASSURANCE_GROUP_16'] = var18;
    var20 = 'AGE_ASSURANCE_GROUP_16';
    var44[var18] = var20;
    var44['AGE_ASSURANCE_GROUP_17'] = var17;
    var20 = 'AGE_ASSURANCE_GROUP_17';
    var44[var17] = var20;
    var44['AGE_ASSURANCE_GROUP_18_21'] = var2;
    var20 = 'AGE_ASSURANCE_GROUP_18_21';
    var44[var2] = var20;
    var44['AGE_ASSURANCE_GROUP_22_24'] = var16;
    var20 = 'AGE_ASSURANCE_GROUP_22_24';
    var44[var16] = var20;
    var44['AGE_ASSURANCE_GROUP_25_34'] = var15;
    var20 = 'AGE_ASSURANCE_GROUP_25_34';
    var44[var15] = var20;
    var44['AGE_ASSURANCE_GROUP_35_UP'] = var14;
    var20 = 'AGE_ASSURANCE_GROUP_35_UP';
    var44[var14] = var20;
    var _closure1_slot14 = var44;
    var43 = {};
    var43['USER_LINK_TYPE_UNSPECIFIED'] = var7;
    var20 = 'USER_LINK_TYPE_UNSPECIFIED';
    var43[var7] = var20;
    var43['PARENT'] = var6;
    var20 = 'PARENT';
    var43[var6] = var20;
    var43['CHILD'] = var5;
    var20 = 'CHILD';
    var43[var5] = var20;
    var _closure1_slot15 = var43;
    var42 = {};
    var42['USER_LINK_STATUS_UNSPECIFIED'] = var7;
    var20 = 'USER_LINK_STATUS_UNSPECIFIED';
    var42[var7] = var20;
    var42['PENDING'] = var6;
    var20 = 'PENDING';
    var42[var6] = var20;
    var42['ACTIVE'] = var5;
    var20 = 'ACTIVE';
    var42[var5] = var20;
    var42['INACTIVE'] = var19;
    var20 = 'INACTIVE';
    var42[var19] = var20;
    var42['DECLINED'] = var18;
    var20 = 'DECLINED';
    var42[var18] = var20;
    var _closure1_slot16 = var42;
    var41 = {};
    var41['RATE_LIMIT_TIER_UNSPECIFIED'] = var7;
    var20 = 'RATE_LIMIT_TIER_UNSPECIFIED';
    var41[var7] = var20;
    var41['UNLIMITED'] = var6;
    var20 = 'UNLIMITED';
    var41[var6] = var20;
    var41['TIER_2'] = var5;
    var20 = 'TIER_2';
    var41[var5] = var20;
    var41['TIER_3'] = var19;
    var21 = 'TIER_3';
    var41[var19] = var21;
    var41['TIER_4'] = var18;
    var21 = 'TIER_4';
    var41[var18] = var21;
    var41['DISABLED'] = var17;
    var21 = 'DISABLED';
    var41[var17] = var21;
    var40 = {};
    var40['FEATURE_LIMIT_NAME_UNSPECIFIED'] = var7;
    var21 = 'FEATURE_LIMIT_NAME_UNSPECIFIED';
    var40[var7] = var21;
    var40['GUILD_MESSAGE_SEND'] = var6;
    var21 = 'GUILD_MESSAGE_SEND';
    var40[var6] = var21;
    var40['DM_SEND'] = var5;
    var21 = 'DM_SEND';
    var40[var5] = var21;
    var40['FRIEND_REQUEST'] = var19;
    var21 = 'FRIEND_REQUEST';
    var40[var19] = var21;
    var40['GUILD_CREATE'] = var18;
    var21 = 'GUILD_CREATE';
    var40[var18] = var21;
    var40['GUILD_JOIN'] = var17;
    var21 = 'GUILD_JOIN';
    var40[var17] = var21;
    var40['GUILD_TEXT_CHANNEL_CREATE'] = var2;
    var21 = 'GUILD_TEXT_CHANNEL_CREATE';
    var40[var2] = var21;
    var40['GUILD_UPLOAD_ATTACHMENT'] = var16;
    var21 = 'GUILD_UPLOAD_ATTACHMENT';
    var40[var16] = var21;
    var40['DM_UPLOAD_ATTACHMENT'] = var15;
    var21 = 'DM_UPLOAD_ATTACHMENT';
    var40[var15] = var21;
    var40['GDM_UPLOAD_ATTACHMENT'] = var14;
    var21 = 'GDM_UPLOAD_ATTACHMENT';
    var40[var14] = var21;
    var40['GDM_SEND'] = var53;
    var21 = 'GDM_SEND';
    var40[var53] = var21;
    var40['GUILD_VOICE_CHANNEL_CREATE'] = var13;
    var21 = 'GUILD_VOICE_CHANNEL_CREATE';
    var40[var13] = var21;
    var40['USER_PROFILE_EDIT'] = var12;
    var21 = 'USER_PROFILE_EDIT';
    var40[var12] = var21;
    var39 = {};
    var39['SAFETY_FLAG_TYPE_UNSPECIFIED'] = var7;
    var21 = 'SAFETY_FLAG_TYPE_UNSPECIFIED';
    var39[var7] = var21;
    var39['STRANGER_DANGER'] = var6;
    var21 = 'STRANGER_DANGER';
    var39[var6] = var21;
    var39['LIKELY_ATO'] = var5;
    var21 = 'LIKELY_ATO';
    var39[var5] = var21;
    var39['PARENTAL_CONSENT_REVOKED_IOS'] = var19;
    var21 = 'PARENTAL_CONSENT_REVOKED_IOS';
    var39[var19] = var21;
    var39['PARENTAL_CONSENT_REVOKED_ANDROID'] = var18;
    var21 = 'PARENTAL_CONSENT_REVOKED_ANDROID';
    var39[var18] = var21;
    var39['REACTIVE_CHECK_APPLIED'] = var17;
    var21 = 'REACTIVE_CHECK_APPLIED';
    var39[var17] = var21;
    var39['PARENTAL_CONSENT_GRACE'] = var2;
    var21 = 'PARENTAL_CONSENT_GRACE';
    var39[var2] = var21;
    var38 = {};
    var38['NONE_UNSPECIFIED'] = var7;
    var21 = 'NONE_UNSPECIFIED';
    var38[var7] = var21;
    var38['SUBSCRIPTION'] = var6;
    var22 = 'SUBSCRIPTION';
    var38[var6] = var22;
    var38['FRACTIONAL_NITRO'] = var5;
    var22 = 'FRACTIONAL_NITRO';
    var38[var5] = var22;
    var38['REVERSE_TRIAL'] = var19;
    var22 = 'REVERSE_TRIAL';
    var38[var19] = var22;
    var38['SUBSCRIPTION_GROUP'] = var18;
    var22 = 'SUBSCRIPTION_GROUP';
    var38[var18] = var22;
    var _closure1_slot17 = var38;
    var37 = {};
    var37['NONE_UNSPECIFIED'] = var7;
    var37[var7] = var21;
    var37['BOOST_ONLY'] = var6;
    var21 = 'BOOST_ONLY';
    var37[var6] = var21;
    var37['TIER_0'] = var5;
    var21 = 'TIER_0';
    var37[var5] = var21;
    var37['TIER_1'] = var19;
    var21 = 'TIER_1';
    var37[var19] = var21;
    var37['TIER_2'] = var18;
    var37[var18] = var20;
    var _closure1_slot18 = var37;
    var36 = {};
    var36['UNSPECIFIED'] = var7;
    var36[var7] = var4;
    var36['PRIMARY'] = var6;
    var20 = 'PRIMARY';
    var36[var6] = var20;
    var36['MEMBER'] = var5;
    var20 = 'MEMBER';
    var36[var5] = var20;
    var _closure1_slot19 = var36;
    var35 = {};
    var35['UNSPECIFIED'] = var7;
    var35[var7] = var4;
    var35['ANIMATED_EMOJIS'] = var6;
    var4 = 'ANIMATED_EMOJIS';
    var35[var6] = var4;
    var35['EMOJIS_EVERYWHERE'] = var5;
    var4 = 'EMOJIS_EVERYWHERE';
    var35[var5] = var4;
    var35['STICKERS_EVERYWHERE'] = var19;
    var4 = 'STICKERS_EVERYWHERE';
    var35[var19] = var4;
    var35['SOUNDBOARD_EVERYWHERE'] = var18;
    var4 = 'SOUNDBOARD_EVERYWHERE';
    var35[var18] = var4;
    var35['ANIMATED_AVATAR'] = var17;
    var4 = 'ANIMATED_AVATAR';
    var35[var17] = var4;
    var35['CUSTOM_DISCRIMINATOR'] = var2;
    var4 = 'CUSTOM_DISCRIMINATOR';
    var35[var2] = var4;
    var35['PREMIUM_GUILD_MEMBER_PROFILE'] = var16;
    var4 = 'PREMIUM_GUILD_MEMBER_PROFILE';
    var35[var16] = var4;
    var35['PROFILE_PREMIUM_FEATURES'] = var15;
    var4 = 'PROFILE_PREMIUM_FEATURES';
    var35[var15] = var4;
    var35['STREAM_MID_QUALITY'] = var14;
    var4 = 'STREAM_MID_QUALITY';
    var35[var14] = var4;
    var35['STREAM_HIGH_QUALITY'] = var53;
    var4 = 'STREAM_HIGH_QUALITY';
    var35[var53] = var4;
    var35['CUSTOM_NOTIFICATION_SOUNDS'] = var13;
    var4 = 'CUSTOM_NOTIFICATION_SOUNDS';
    var35[var13] = var4;
    var35['VIDEO_FILTER_ASSETS'] = var12;
    var4 = 'VIDEO_FILTER_ASSETS';
    var35[var12] = var4;
    var35['INCREASED_FILE_UPLOAD_SIZE'] = var11;
    var4 = 'INCREASED_FILE_UPLOAD_SIZE';
    var35[var11] = var4;
    var35['INCREASED_GUILD_LIMIT'] = var10;
    var4 = 'INCREASED_GUILD_LIMIT';
    var35[var10] = var4;
    var35['INCREASED_MESSAGE_LENGTH'] = var9;
    var4 = 'INCREASED_MESSAGE_LENGTH';
    var35[var9] = var4;
    var35['NITRO_REACTION_TOGGLE'] = var8;
    var4 = 'NITRO_REACTION_TOGGLE';
    var35[var8] = var4;
    var8 = 17;
    var35['CLIENT_THEMES'] = var8;
    var4 = 'CLIENT_THEMES';
    var35[var8] = var4;
    var8 = 18;
    var35['PREMIUM_COLLECTIBLES'] = var8;
    var4 = 'PREMIUM_COLLECTIBLES';
    var35[var8] = var4;
    var8 = 19;
    var35['CUSTOM_CALL_SOUNDS'] = var8;
    var4 = 'CUSTOM_CALL_SOUNDS';
    var35[var8] = var4;
    var8 = 20;
    var35['SAVED_MESSAGES'] = var8;
    var4 = 'SAVED_MESSAGES';
    var35[var8] = var4;
    var8 = 21;
    var35['PREMIUM_VOICE_FILTERS'] = var8;
    var4 = 'PREMIUM_VOICE_FILTERS';
    var35[var8] = var4;
    var8 = 22;
    var35['CHAT_WALLPAPERS'] = var8;
    var4 = 'CHAT_WALLPAPERS';
    var35[var8] = var4;
    var8 = 23;
    var35['MONTHLY_ORBS'] = var8;
    var4 = 'MONTHLY_ORBS';
    var35[var8] = var4;
    var8 = 24;
    var35['SHOP_DISCOUNTS'] = var8;
    var4 = 'SHOP_DISCOUNTS';
    var35[var8] = var4;
    var8 = 25;
    var35['MORE_QUEST_ORBS'] = var8;
    var4 = 'MORE_QUEST_ORBS';
    var35[var8] = var4;
    var8 = 26;
    var35['PROFILE_BADGES'] = var8;
    var4 = 'PROFILE_BADGES';
    var35[var8] = var4;
    var8 = 27;
    var35['APP_ICONS'] = var8;
    var4 = 'APP_ICONS';
    var35[var8] = var4;
    var8 = 28;
    var35['BOOST_DISCOUNT'] = var8;
    var4 = 'BOOST_DISCOUNT';
    var35[var8] = var4;
    var8 = 29;
    var35['FREE_BOOSTS'] = var8;
    var4 = 'FREE_BOOSTS';
    var35[var8] = var4;
    var8 = 30;
    var35['INSTALL_PREMIUM_APPLICATIONS'] = var8;
    var4 = 'INSTALL_PREMIUM_APPLICATIONS';
    var35[var8] = var4;
    var8 = 31;
    var35['INCREASED_VIDEO_UPLOAD_QUALITY'] = var8;
    var4 = 'INCREASED_VIDEO_UPLOAD_QUALITY';
    var35[var8] = var4;
    var34 = {};
    var34['SOURCE_UNSPECIFIED'] = var7;
    var4 = 'SOURCE_UNSPECIFIED';
    var34[var7] = var4;
    var34['SOURCE_NITRO'] = var6;
    var4 = 'SOURCE_NITRO';
    var34[var6] = var4;
    var34['SOURCE_THIRDPARTY_CROISSANT'] = var5;
    var4 = 'SOURCE_THIRDPARTY_CROISSANT';
    var34[var5] = var4;
    var _closure1_slot20 = var34;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function TimeOfDay$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(4);
            var1 = {'no': 1, 'name': 'hours', 'kind': 'scalar', 'T': 5};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'minutes', 'kind': 'scalar', 'T': 5};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'seconds', 'kind': 'scalar', 'T': 5};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'nanos', 'kind': 'scalar', 'T': 5};
            var6[3] = var1;
            var1 = ['discord_protos.users.v1.TimeOfDay'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'hours': 0, 'minutes': 0, 'seconds': 0, 'nanos': 0};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0003_ip = 11; continue _fun0003 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 12:
                var3 = var19.pos;
                var2 = arg2;
                var16 = var3 + var2;
                var2 = var19.pos;
                var2 = var2 < var16;
                var15 = undefined;
                var13 = 6;
                var12 = true;
                var11 = false;
                var10 = 'throw';
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0004_ip = 16; continue _fun0004 }
case 11:
                if(!(var7 !== var28)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                if(!(var8 !== var28)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                if(!(var9 !== var28)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var22 = var18.readUnknownField;
                if(!(var10 !== var22)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var11 !== var22)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                var24 = var22;
                if(!(var12 === var22)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var13];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 27:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0004_ip = 25; continue _fun0004;
case 23:
                var2 = global;
                var22 = var2.globalThis;
                var23 = var22.Error;
                var29 = var17.typeName;
                var2 = var2.HermesInternal;
                var25 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var27;
                var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                var22 = var23.prototype;
                var22 = Object.create(var22, {constructor: {value: var23}});
                var34 = var22;
                var2 = new var34[var23](var33, var32);
                var2 = var2 instanceof Object ? var2 : var22;
                throw var2;
case 21:
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var1['nanos'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0004_ip = 25; continue _fun0004;
case 19:
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var1['seconds'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0004_ip = 25; continue _fun0004;
case 17:
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var1['minutes'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0004_ip = 25; continue _fun0004;
case 16:
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var1['hours'] = var2;
                var21 = var4;
                var20 = var3;
case 25:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0004_ip = 15; continue _fun0004 }
case 14:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.hours;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0005_ip = 29; continue _fun0005 }
case 13:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.hours;
                var2 = var4.bind(var6)(var2);
case 29:
                var2 = var5.minutes;
                if(!(var3 !== var2)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 2;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.minutes;
                var2 = var4.bind(var6)(var2);
case 30:
                var2 = var5.seconds;
                if(!(var3 !== var2)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 3;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.seconds;
                var2 = var4.bind(var6)(var2);
case 32:
                var2 = var5.nanos;
                if(!(var3 !== var2)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 4;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.nanos;
                var2 = var3.bind(var4)(var2);
case 34:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var2 = 1;
                if(!(var2 == var4)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 38:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 36:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var33 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot21 = var33;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function User$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(12);
            var1 = {'no': 1, 'name': 'id', 'kind': 'scalar', 'T': 4};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'username', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'discriminator', 'kind': 'scalar', 'T': 9};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'avatar', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'bot', 'kind': 'scalar', 'T': 8};
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'public_flags', 'kind': 'scalar', 'T': 4};
            var6[5] = var1;
            var1 = {'no': 8, 'name': 'global_name', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 9, 'name': 'avatar_decoration_data', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot22;
                return var1;
            };
            var1['T'] = var8;
            var6[7] = var1;
            var1 = {'no': 10, 'name': 'primary_guild', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot26;
                return var1;
            };
            var1['T'] = var8;
            var6[8] = var1;
            var1 = {'no': 11, 'name': 'collectibles', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot25;
                return var1;
            };
            var1['T'] = var8;
            var6[9] = var1;
            var1 = {'no': 12, 'name': 'safety_state', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.SafetyState;
                return var1;
            };
            var1['T'] = var8;
            var6[10] = var1;
            var1 = {'no': 13, 'name': 'display_name_styles', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot24;
                return var1;
            };
            var1['T'] = var7;
            var6[11] = var1;
            var1 = ['discord_protos.users.v1.User'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'id': '0', 'username': '', 'discriminator': '', 'bot': false, 'publicFlags': '0'};
                var11 = false;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0006_ip = 11; continue _fun0006 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0007_ip = 12; continue _fun0007 }
case 13:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 12:
                var4 = var21.pos;
                var3 = arg2;
                var19 = var4 + var3;
                var3 = var21.pos;
                var3 = var3 < var19;
                var18 = undefined;
                var16 = 6;
                var15 = true;
                var14 = false;
                var13 = 'throw';
                var12 = 7;
                var11 = 8;
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0007_ip = 40; continue _fun0007 }
case 15:
                var3 = var21.tag;
                var7 = var3.bind(var21)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var18)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=927, default_jump_address=730, unsigned_min_value=1, unsigned_max_value=13) // Switch table: [697, 671, 645, 570, 543, 507, 730, 432, 376, 320, 264, 189, 133];
case 41:
                var24 = _closure1_slot24;
                var23 = var24.internalBinaryRead;
                var3 = var21.uint32;
                var31 = var3.bind(var21)();
                var29 = var1.displayNameStyles;
                var33 = var24;
                var32 = var21;
                var30 = var20;
                var3 = var33[var23](var32, var31, var30, var29, var28);
                var1['displayNameStyles'] = var3;
                var23 = var5;
                var22 = var4;
                _fun0007_ip = 42; continue _fun0007;
case 43:
                var24 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var24.bind(var18)(var3);
                var26 = var3.SafetyState;
                var25 = var26.internalBinaryRead;
                var3 = var21.uint32;
                var31 = var3.bind(var21)();
                var29 = var1.safetyState;
                var33 = var26;
                var32 = var21;
                var30 = var20;
                var3 = var33[var25](var32, var31, var30, var29, var28);
                var1['safetyState'] = var3;
                var23 = var5;
                var22 = var4;
                _fun0007_ip = 42; continue _fun0007;
case 44:
                var26 = _closure1_slot25;
                var25 = var26.internalBinaryRead;
                var3 = var21.uint32;
                var31 = var3.bind(var21)();
                var29 = var1.collectibles;
                var33 = var26;
                var32 = var21;
                var30 = var20;
                var3 = var33[var25](var32, var31, var30, var29, var28);
                var1['collectibles'] = var3;
                var23 = var5;
                var22 = var4;
                _fun0007_ip = 42; continue _fun0007;
case 45:
                var26 = _closure1_slot26;
                var25 = var26.internalBinaryRead;
                var3 = var21.uint32;
                var31 = var3.bind(var21)();
                var29 = var1.primaryGuild;
                var33 = var26;
                var32 = var21;
                var30 = var20;
                var3 = var33[var25](var32, var31, var30, var29, var28);
                var1['primaryGuild'] = var3;
                var23 = var5;
                var22 = var4;
                _fun0007_ip = 42; continue _fun0007;
case 17:
                var26 = _closure1_slot22;
                var25 = var26.internalBinaryRead;
                var3 = var21.uint32;
                var31 = var3.bind(var21)();
                var29 = var1.avatarDecorationData;
                var33 = var26;
                var32 = var21;
                var30 = var20;
                var3 = var33[var25](var32, var31, var30, var29, var28);
                var1['avatarDecorationData'] = var3;
                var23 = var5;
                var22 = var4;
                _fun0007_ip = 42; continue _fun0007;
case 46:
                var24 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var12];
                var3 = var24.bind(var18)(var3);
                var26 = var3.StringValue;
                var25 = var26.internalBinaryRead;
                var3 = var21.uint32;
                var31 = var3.bind(var21)();
                var29 = var1.globalName;
                var33 = var26;
                var32 = var21;
                var30 = var20;
                var3 = var33[var25](var32, var31, var30, var29, var28);
                var1['globalName'] = var3;
                var23 = var5;
                var22 = var4;
                _fun0007_ip = 42; continue _fun0007;
case 47:
                var3 = var21.uint64;
                var24 = var3.bind(var21)();
                var3 = var24.toString;
                var3 = var3.bind(var24)();
                var1['publicFlags'] = var3;
                var23 = var5;
                var22 = var4;
                _fun0007_ip = 42; continue _fun0007;
case 48:
                var3 = var21.bool;
                var3 = var3.bind(var21)();
                var1['bot'] = var3;
                var23 = var5;
                var22 = var4;
                _fun0007_ip = 42; continue _fun0007;
case 49:
                var24 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var12];
                var3 = var24.bind(var18)(var3);
                var26 = var3.StringValue;
                var25 = var26.internalBinaryRead;
                var3 = var21.uint32;
                var31 = var3.bind(var21)();
                var29 = var1.avatar;
                var33 = var26;
                var32 = var21;
                var30 = var20;
                var3 = var33[var25](var32, var31, var30, var29, var28);
                var1['avatar'] = var3;
                var23 = var5;
                var22 = var4;
                _fun0007_ip = 42; continue _fun0007;
case 50:
                var3 = var21.string;
                var3 = var3.bind(var21)();
                var1['discriminator'] = var3;
                var23 = var5;
                var22 = var4;
                _fun0007_ip = 42; continue _fun0007;
case 51:
                var3 = var21.string;
                var3 = var3.bind(var21)();
                var1['username'] = var3;
                var23 = var5;
                var22 = var4;
                _fun0007_ip = 42; continue _fun0007;
case 52:
                var3 = var21.uint64;
                var24 = var3.bind(var21)();
                var3 = var24.toString;
                var3 = var3.bind(var24)();
                var1['id'] = var3;
                var23 = var5;
                var22 = var4;
                _fun0007_ip = 42; continue _fun0007;
case 53:
                var24 = var20.readUnknownField;
                if(!(var13 !== var24)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var3 = var21.skip;
                var3 = var3.bind(var21)(var7);
                var23 = var24;
                var22 = var3;
                if(!(var14 !== var24)) { _fun0007_ip = 42; continue _fun0007 }
case 56:
                var26 = var24;
                if(!(var15 === var24)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var16];
                var25 = var27.bind(var18)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 57:
                var32 = var2.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var8;
                var29 = var7;
                var28 = var3;
                var25 = var33[var26](var32, var31, var30, var29, var28, var27);
                var23 = var24;
                var22 = var3;
case 42:
                var3 = var21.pos;
                var5 = var23;
                var4 = var22;
                if(var3 < var19) { _fun0007_ip = 15; continue _fun0007 }
case 40:
                return var1;
case 54:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var28 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var8;
                var30 = var7;
                var32 = var33[var5](var32, var31, var30, var29, var28, var27);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var33 = var2;
                var1 = new var33[var3](var32, var31);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.id;
                var6 = '0';
                if(!(var6 !== var2)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 1;
                var7 = var7.bind(var1)(var2, var4);
                var4 = var7.uint64;
                var2 = var5.id;
                var2 = var4.bind(var7)(var2);
case 59:
                var2 = var5.username;
                var4 = '';
                if(!(var4 !== var2)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 6;
                var7 = var7[var2];
                var2 = undefined;
                var2 = var9.bind(var2)(var7);
                var2 = var2.WireType;
                var7 = var2.LengthDelimited;
                var2 = 2;
                var8 = var8.bind(var1)(var2, var7);
                var7 = var8.string;
                var2 = var5.username;
                var2 = var7.bind(var8)(var2);
case 61:
                var2 = var5.discriminator;
                if(!(var4 !== var2)) { _fun0008_ip = 63; continue _fun0008 }
case 64:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 3;
                var7 = var7.bind(var1)(var2, var4);
                var4 = var7.string;
                var2 = var5.discriminator;
                var2 = var4.bind(var7)(var2);
case 63:
                var2 = var5.avatar;
                if(!var2) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 7;
                var2 = var12[var2];
                var9 = undefined;
                var2 = var11.bind(var9)(var2);
                var8 = var2.StringValue;
                var7 = var8.internalBinaryWrite;
                var4 = var5.avatar;
                var10 = var1.tag;
                var2 = 6;
                var2 = var12[var2];
                var2 = var11.bind(var9)(var2);
                var2 = var2.WireType;
                var9 = var2.LengthDelimited;
                var2 = 4;
                var9 = var10.bind(var1)(var2, var9);
                var2 = var9.fork;
                var2 = var2.bind(var9)();
                var4 = var7.bind(var8)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 65:
                var4 = var5.bot;
                var2 = false;
                if(!(var2 !== var4)) { _fun0008_ip = 67; continue _fun0008 }
case 68:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 6;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var9.bind(var4)(var7);
                var4 = var4.WireType;
                var7 = var4.Varint;
                var4 = 5;
                var8 = var8.bind(var1)(var4, var7);
                var7 = var8.bool;
                var4 = var5.bot;
                var4 = var7.bind(var8)(var4);
case 67:
                var4 = var5.publicFlags;
                if(!(var6 !== var4)) { _fun0008_ip = 69; continue _fun0008 }
case 70:
                var7 = var1.tag;
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = 6;
                var8 = var4[var6];
                var4 = undefined;
                var4 = var9.bind(var4)(var8);
                var4 = var4.WireType;
                var4 = var4.Varint;
                var7 = var7.bind(var1)(var6, var4);
                var6 = var7.uint64;
                var4 = var5.publicFlags;
                var4 = var6.bind(var7)(var4);
case 69:
                var4 = var5.globalName;
                if(!var4) { _fun0008_ip = 71; continue _fun0008 }
case 72:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 7;
                var4 = var12[var4];
                var9 = undefined;
                var4 = var11.bind(var9)(var4);
                var8 = var4.StringValue;
                var7 = var8.internalBinaryWrite;
                var6 = var5.globalName;
                var10 = var1.tag;
                var4 = 6;
                var4 = var12[var4];
                var4 = var11.bind(var9)(var4);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 8;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 71:
                var4 = var5.avatarDecorationData;
                if(!var4) { _fun0008_ip = 73; continue _fun0008 }
case 74:
                var8 = _closure1_slot22;
                var7 = var8.internalBinaryWrite;
                var6 = var5.avatarDecorationData;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 6;
                var9 = var9[var4];
                var4 = undefined;
                var4 = var11.bind(var4)(var9);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 9;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 73:
                var4 = var5.primaryGuild;
                if(!var4) { _fun0008_ip = 75; continue _fun0008 }
case 76:
                var8 = _closure1_slot26;
                var7 = var8.internalBinaryWrite;
                var6 = var5.primaryGuild;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 6;
                var9 = var9[var4];
                var4 = undefined;
                var4 = var11.bind(var4)(var9);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 10;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 75:
                var4 = var5.collectibles;
                if(!var4) { _fun0008_ip = 77; continue _fun0008 }
case 78:
                var8 = _closure1_slot25;
                var7 = var8.internalBinaryWrite;
                var6 = var5.collectibles;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 6;
                var9 = var9[var4];
                var4 = undefined;
                var4 = var11.bind(var4)(var9);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 11;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 77:
                var4 = var5.safetyState;
                if(!var4) { _fun0008_ip = 79; continue _fun0008 }
case 80:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 8;
                var4 = var12[var4];
                var9 = undefined;
                var4 = var11.bind(var9)(var4);
                var8 = var4.SafetyState;
                var7 = var8.internalBinaryWrite;
                var6 = var5.safetyState;
                var10 = var1.tag;
                var4 = 6;
                var4 = var12[var4];
                var4 = var11.bind(var9)(var4);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 12;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 79:
                var4 = var5.displayNameStyles;
                if(!var4) { _fun0008_ip = 81; continue _fun0008 }
case 82:
                var8 = _closure1_slot24;
                var7 = var8.internalBinaryWrite;
                var6 = var5.displayNameStyles;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 6;
                var9 = var9[var4];
                var4 = undefined;
                var4 = var11.bind(var4)(var9);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 13;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 81:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0008_ip = 83; continue _fun0008 }
case 84:
                var2 = 1;
                if(!(var2 == var4)) { _fun0008_ip = 85; continue _fun0008 }
case 86:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 85:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 83:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var32 = var4 instanceof Object ? var4 : var5;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function MediumUser$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(8);
            var1 = {'no': 1, 'name': 'id', 'kind': 'scalar', 'T': 6};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'username', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'discriminator', 'kind': 'scalar', 'T': 13};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'avatar_hash', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'bot', 'kind': 'scalar', 'T': 8};
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'flags', 'kind': 'scalar', 'T': 4};
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'email', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 8, 'name': 'phone', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var7;
            var6[7] = var1;
            var1 = ['discord_protos.users.v1.MediumUser'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'id': '0', 'username': '', 'discriminator': 0, 'bot': false, 'flags': '0'};
                var11 = false;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0009_ip = 11; continue _fun0009 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var22 = arg1;
                var21 = arg3;
                var1 = arg4;
                var20 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0010_ip = 12; continue _fun0010 }
case 13:
                var2 = var20.create;
                var1 = var2.bind(var20)();
case 12:
                var3 = var22.pos;
                var2 = arg2;
                var19 = var3 + var2;
                var2 = var22.pos;
                var2 = var2 < var19;
                var18 = undefined;
                var16 = 7;
                var15 = 6;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 8;
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0010_ip = 87; continue _fun0010 }
case 88:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0010_ip = 52; continue _fun0010 }
case 89:
                if(!(var7 !== var31)) { _fun0010_ip = 90; continue _fun0010 }
case 91:
                if(!(var8 !== var31)) { _fun0010_ip = 92; continue _fun0010 }
case 93:
                if(!(var9 !== var31)) { _fun0010_ip = 94; continue _fun0010 }
case 95:
                if(!(var10 !== var31)) { _fun0010_ip = 96; continue _fun0010 }
case 97:
                if(!(var15 !== var31)) { _fun0010_ip = 98; continue _fun0010 }
case 99:
                if(!(var16 !== var31)) { _fun0010_ip = 14; continue _fun0010 }
case 100:
                if(!(var11 !== var31)) { _fun0010_ip = 101; continue _fun0010 }
case 102:
                var25 = var21.readUnknownField;
                if(!(var12 !== var25)) { _fun0010_ip = 103; continue _fun0010 }
case 104:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var13 !== var25)) { _fun0010_ip = 105; continue _fun0010 }
case 106:
                var27 = var25;
                if(!(var14 === var25)) { _fun0010_ip = 107; continue _fun0010 }
case 108:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var15];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 107:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0010_ip = 105; continue _fun0010;
case 103:
                var2 = global;
                var25 = var2.globalThis;
                var26 = var25.Error;
                var32 = var20.typeName;
                var2 = var2.HermesInternal;
                var28 = var2.concat;
                var37 = 'Unknown field ';
                var35 = ' (wire type ';
                var33 = ') for ';
                var36 = var31;
                var34 = var30;
                var36 = var37[var28](var36, var35, var34, var33, var32, var31);
                var25 = var26.prototype;
                var25 = Object.create(var25, {constructor: {value: var26}});
                var37 = var25;
                var2 = new var37[var26](var36, var35);
                var2 = var2 instanceof Object ? var2 : var25;
                throw var2;
case 101:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.StringValue;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.phone;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['phone'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 105; continue _fun0010;
case 14:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.StringValue;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.email;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['email'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 105; continue _fun0010;
case 98:
                var2 = var22.uint64;
                var25 = var2.bind(var22)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var1['flags'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 105; continue _fun0010;
case 96:
                var2 = var22.bool;
                var2 = var2.bind(var22)();
                var1['bot'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 105; continue _fun0010;
case 94:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.StringValue;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.avatarHash;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['avatarHash'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 105; continue _fun0010;
case 92:
                var2 = var22.uint32;
                var2 = var2.bind(var22)();
                var1['discriminator'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 105; continue _fun0010;
case 90:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['username'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 105; continue _fun0010;
case 52:
                var2 = var22.fixed64;
                var25 = var2.bind(var22)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var1['id'] = var2;
                var24 = var4;
                var23 = var3;
case 105:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0010_ip = 88; continue _fun0010 }
case 87:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.id;
                var6 = '0';
                if(!(var6 !== var2)) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Bit64;
                var2 = 1;
                var7 = var7.bind(var1)(var2, var4);
                var4 = var7.fixed64;
                var2 = var5.id;
                var2 = var4.bind(var7)(var2);
case 59:
                var4 = var5.username;
                var2 = '';
                if(!(var2 !== var4)) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 2;
                var7 = var7.bind(var1)(var2, var4);
                var4 = var7.string;
                var2 = var5.username;
                var2 = var4.bind(var7)(var2);
case 61:
                var4 = var5.discriminator;
                var2 = 0;
                if(!(var2 !== var4)) { _fun0011_ip = 23; continue _fun0011 }
case 109:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 3;
                var7 = var7.bind(var1)(var2, var4);
                var4 = var7.uint32;
                var2 = var5.discriminator;
                var2 = var4.bind(var7)(var2);
case 23:
                var2 = var5.avatarHash;
                if(!var2) { _fun0011_ip = 110; continue _fun0011 }
case 111:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 7;
                var2 = var12[var2];
                var9 = undefined;
                var2 = var11.bind(var9)(var2);
                var8 = var2.StringValue;
                var7 = var8.internalBinaryWrite;
                var4 = var5.avatarHash;
                var10 = var1.tag;
                var2 = 6;
                var2 = var12[var2];
                var2 = var11.bind(var9)(var2);
                var2 = var2.WireType;
                var9 = var2.LengthDelimited;
                var2 = 4;
                var9 = var10.bind(var1)(var2, var9);
                var2 = var9.fork;
                var2 = var2.bind(var9)();
                var4 = var7.bind(var8)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 110:
                var4 = var5.bot;
                var2 = false;
                if(!(var2 !== var4)) { _fun0011_ip = 112; continue _fun0011 }
case 113:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 6;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var9.bind(var4)(var7);
                var4 = var4.WireType;
                var7 = var4.Varint;
                var4 = 5;
                var8 = var8.bind(var1)(var4, var7);
                var7 = var8.bool;
                var4 = var5.bot;
                var4 = var7.bind(var8)(var4);
case 112:
                var4 = var5.flags;
                if(!(var6 !== var4)) { _fun0011_ip = 114; continue _fun0011 }
case 115:
                var7 = var1.tag;
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = 6;
                var8 = var4[var6];
                var4 = undefined;
                var4 = var9.bind(var4)(var8);
                var4 = var4.WireType;
                var4 = var4.Varint;
                var7 = var7.bind(var1)(var6, var4);
                var6 = var7.uint64;
                var4 = var5.flags;
                var4 = var6.bind(var7)(var4);
case 114:
                var4 = var5.email;
                if(!var4) { _fun0011_ip = 116; continue _fun0011 }
case 117:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var10 = 7;
                var4 = var13[var10];
                var11 = undefined;
                var4 = var12.bind(var11)(var4);
                var8 = var4.StringValue;
                var7 = var8.internalBinaryWrite;
                var6 = var5.email;
                var9 = var1.tag;
                var4 = 6;
                var4 = var13[var4];
                var4 = var12.bind(var11)(var4);
                var4 = var4.WireType;
                var4 = var4.LengthDelimited;
                var9 = var9.bind(var1)(var10, var4);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 116:
                var4 = var5.phone;
                if(!var4) { _fun0011_ip = 118; continue _fun0011 }
case 119:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 7;
                var4 = var12[var4];
                var9 = undefined;
                var4 = var11.bind(var9)(var4);
                var8 = var4.StringValue;
                var7 = var8.internalBinaryWrite;
                var6 = var5.phone;
                var10 = var1.tag;
                var4 = 6;
                var4 = var12[var4];
                var4 = var11.bind(var9)(var4);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 8;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 118:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0011_ip = 120; continue _fun0011 }
case 121:
                var2 = 1;
                if(!(var2 == var4)) { _fun0011_ip = 122; continue _fun0011 }
case 123:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 122:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 120:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var31 = var4 instanceof Object ? var4 : var5;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserAvatarDecoration$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(3);
            var1 = {'no': 1, 'name': 'asset', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'sku_id', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'expires_at', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.users.v1.UserAvatarDecoration'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = '';
                var1['asset'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0012_ip = 124; continue _fun0012 }
case 125:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 124:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0013_ip = 12; continue _fun0013 }
case 13:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 12:
                var3 = var19.pos;
                var2 = arg2;
                var16 = var3 + var2;
                var2 = var19.pos;
                var2 = var2 < var16;
                var15 = undefined;
                var13 = 7;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0013_ip = 126; continue _fun0013 }
case 15:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0013_ip = 127; continue _fun0013 }
case 11:
                if(!(var7 !== var28)) { _fun0013_ip = 36; continue _fun0013 }
case 18:
                if(!(var8 !== var28)) { _fun0013_ip = 128; continue _fun0013 }
case 20:
                var22 = var18.readUnknownField;
                if(!(var9 !== var22)) { _fun0013_ip = 129; continue _fun0013 }
case 130:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var10 !== var22)) { _fun0013_ip = 131; continue _fun0013 }
case 132:
                var24 = var22;
                if(!(var11 === var22)) { _fun0013_ip = 133; continue _fun0013 }
case 26:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var12];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 133:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0013_ip = 131; continue _fun0013;
case 129:
                var2 = global;
                var22 = var2.globalThis;
                var23 = var22.Error;
                var29 = var17.typeName;
                var2 = var2.HermesInternal;
                var25 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var27;
                var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                var22 = var23.prototype;
                var22 = Object.create(var22, {constructor: {value: var23}});
                var34 = var22;
                var2 = new var34[var23](var33, var32);
                var2 = var2 instanceof Object ? var2 : var22;
                throw var2;
case 128:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.UInt32Value;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.expiresAt;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['expiresAt'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0013_ip = 131; continue _fun0013;
case 36:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.UInt64Value;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.skuId;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['skuId'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0013_ip = 131; continue _fun0013;
case 127:
                var2 = var19.string;
                var2 = var2.bind(var19)();
                var1['asset'] = var2;
                var21 = var4;
                var20 = var3;
case 131:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0013_ip = 15; continue _fun0013 }
case 126:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var4 = var5.asset;
                var3 = '';
                if(!(var3 !== var4)) { _fun0014_ip = 15; continue _fun0014 }
case 134:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.string;
                var3 = var5.asset;
                var3 = var4.bind(var6)(var3);
case 15:
                var3 = var5.skuId;
                if(!var3) { _fun0014_ip = 135; continue _fun0014 }
case 136:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.skuId;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 135:
                var3 = var5.expiresAt;
                if(!var3) { _fun0014_ip = 137; continue _fun0014 }
case 138:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt32Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.expiresAt;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 137:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0014_ip = 139; continue _fun0014 }
case 140:
                var2 = 1;
                if(!(var2 == var4)) { _fun0014_ip = 68; continue _fun0014 }
case 141:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 68:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 139:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var30 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot22 = var30;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserNameplate$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(5);
            var1 = {'no': 1, 'name': 'asset', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'palette', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'sku_id', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'expires_at', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var7;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'label', 'kind': 'scalar', 'T': 9};
            var6[4] = var1;
            var1 = ['discord_protos.users.v1.UserNameplate'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'asset': '', 'palette': '', 'label': ''};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0015_ip = 11; continue _fun0015 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var22 = arg1;
                var21 = arg3;
                var1 = arg4;
                var20 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0016_ip = 12; continue _fun0016 }
case 13:
                var2 = var20.create;
                var1 = var2.bind(var20)();
case 12:
                var3 = var22.pos;
                var2 = arg2;
                var19 = var3 + var2;
                var2 = var22.pos;
                var2 = var2 < var19;
                var18 = undefined;
                var16 = 7;
                var15 = 9;
                var14 = 6;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0016_ip = 142; continue _fun0016 }
case 88:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0016_ip = 143; continue _fun0016 }
case 89:
                if(!(var7 !== var31)) { _fun0016_ip = 114; continue _fun0016 }
case 91:
                if(!(var8 !== var31)) { _fun0016_ip = 144; continue _fun0016 }
case 93:
                if(!(var9 !== var31)) { _fun0016_ip = 68; continue _fun0016 }
case 95:
                if(!(var10 !== var31)) { _fun0016_ip = 145; continue _fun0016 }
case 97:
                var25 = var21.readUnknownField;
                if(!(var11 !== var25)) { _fun0016_ip = 44; continue _fun0016 }
case 61:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var12 !== var25)) { _fun0016_ip = 146; continue _fun0016 }
case 147:
                var27 = var25;
                if(!(var13 === var25)) { _fun0016_ip = 148; continue _fun0016 }
case 135:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var14];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 148:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0016_ip = 146; continue _fun0016;
case 44:
                var2 = global;
                var25 = var2.globalThis;
                var26 = var25.Error;
                var32 = var20.typeName;
                var2 = var2.HermesInternal;
                var28 = var2.concat;
                var37 = 'Unknown field ';
                var35 = ' (wire type ';
                var33 = ') for ';
                var36 = var31;
                var34 = var30;
                var36 = var37[var28](var36, var35, var34, var33, var32, var31);
                var25 = var26.prototype;
                var25 = Object.create(var25, {constructor: {value: var26}});
                var37 = var25;
                var2 = new var37[var26](var36, var35);
                var2 = var2 instanceof Object ? var2 : var25;
                throw var2;
case 145:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['label'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0016_ip = 146; continue _fun0016;
case 68:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var25.bind(var18)(var2);
                var27 = var2.Timestamp;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.expiresAt;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['expiresAt'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0016_ip = 146; continue _fun0016;
case 144:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.UInt64Value;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.skuId;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['skuId'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0016_ip = 146; continue _fun0016;
case 114:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['palette'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0016_ip = 146; continue _fun0016;
case 143:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['asset'] = var2;
                var24 = var4;
                var23 = var3;
case 146:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0016_ip = 88; continue _fun0016 }
case 142:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.asset;
                var4 = '';
                if(!(var4 !== var3)) { _fun0017_ip = 15; continue _fun0017 }
case 134:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 1;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.asset;
                var3 = var6.bind(var7)(var3);
case 15:
                var3 = var5.palette;
                if(!(var4 !== var3)) { _fun0017_ip = 149; continue _fun0017 }
case 150:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 2;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.palette;
                var3 = var6.bind(var7)(var3);
case 149:
                var3 = var5.skuId;
                if(!var3) { _fun0017_ip = 151; continue _fun0017 }
case 152:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var3 = 7;
                var3 = var12[var3];
                var9 = undefined;
                var3 = var11.bind(var9)(var3);
                var8 = var3.UInt64Value;
                var7 = var8.internalBinaryWrite;
                var6 = var5.skuId;
                var10 = var1.tag;
                var3 = 6;
                var3 = var12[var3];
                var3 = var11.bind(var9)(var3);
                var3 = var3.WireType;
                var9 = var3.LengthDelimited;
                var3 = 3;
                var9 = var10.bind(var1)(var3, var9);
                var3 = var9.fork;
                var3 = var3.bind(var9)();
                var6 = var7.bind(var8)(var6, var3, var2);
                var3 = var6.join;
                var3 = var3.bind(var6)();
case 151:
                var3 = var5.expiresAt;
                if(!var3) { _fun0017_ip = 153; continue _fun0017 }
case 154:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var3 = 9;
                var3 = var12[var3];
                var9 = undefined;
                var3 = var11.bind(var9)(var3);
                var8 = var3.Timestamp;
                var7 = var8.internalBinaryWrite;
                var6 = var5.expiresAt;
                var10 = var1.tag;
                var3 = 6;
                var3 = var12[var3];
                var3 = var11.bind(var9)(var3);
                var3 = var3.WireType;
                var9 = var3.LengthDelimited;
                var3 = 4;
                var9 = var10.bind(var1)(var3, var9);
                var3 = var9.fork;
                var3 = var3.bind(var9)();
                var6 = var7.bind(var8)(var6, var3, var2);
                var3 = var6.join;
                var3 = var3.bind(var6)();
case 153:
                var3 = var5.label;
                if(!(var4 !== var3)) { _fun0017_ip = 155; continue _fun0017 }
case 156:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 5;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.string;
                var3 = var5.label;
                var3 = var4.bind(var6)(var3);
case 155:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0017_ip = 143; continue _fun0017 }
case 157:
                var2 = 1;
                if(!(var2 == var4)) { _fun0017_ip = 158; continue _fun0017 }
case 159:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 158:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 143:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var29 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot23 = var29;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function DisplayNameStyles$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'font_id', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot9;
                var1 = ['discord_protos.users.v1.DisplayNameFont'];
                var1[1] = var2;
                var2 = 'DISPLAY_NAME_FONT_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(4);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'effect_id', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot10;
                var1 = ['discord_protos.users.v1.DisplayNameEffect'];
                var1[1] = var2;
                var2 = 'DISPLAY_NAME_EFFECT_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'colors', 'kind': 'scalar', 'repeat': 1, 'T': 13};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'animated', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var7;
            var6[3] = var1;
            var1 = ['discord_protos.users.v1.DisplayNameStyles'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'fontId': 0, 'effectId': 0};
                var2 = new Array(0);
                var1['colors'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0018_ip = 160; continue _fun0018 }
case 161:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 160:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0019_ip = 12; continue _fun0019 }
case 13:
                var2 = var19.create;
                var1 = var2.bind(var19)();
case 12:
                var3 = var21.pos;
                var2 = arg2;
                var18 = var3 + var2;
                var2 = var21.pos;
                var2 = var2 < var18;
                var17 = undefined;
                var15 = 6;
                var14 = 7;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 4;
                var9 = 3;
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0019_ip = 162; continue _fun0019 }
case 163:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var8);
                var31 = var2[var6];
                var25 = var2[var7];
                if(!(var7 !== var31)) { _fun0019_ip = 164; continue _fun0019 }
case 165:
                if(!(var8 !== var31)) { _fun0019_ip = 166; continue _fun0019 }
case 167:
                if(!(var9 !== var31)) { _fun0019_ip = 168; continue _fun0019 }
case 169:
                if(!(var10 !== var31)) { _fun0019_ip = 170; continue _fun0019 }
case 171:
                var26 = var20.readUnknownField;
                if(!(var11 !== var26)) { _fun0019_ip = 172; continue _fun0019 }
case 173:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var25);
                var24 = var5;
                var23 = var26;
                var22 = var2;
                if(!(var12 !== var26)) { _fun0019_ip = 174; continue _fun0019 }
case 175:
                var28 = var26;
                if(!(var13 === var26)) { _fun0019_ip = 108; continue _fun0019 }
case 176:
                var29 = _closure1_slot0;
                var27 = _closure1_slot1;
                var27 = var27[var15];
                var27 = var29.bind(var17)(var27);
                var27 = var27.UnknownFieldHandler;
                var28 = var27.onRead;
case 108:
                var36 = var19.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var25;
                var32 = var2;
                var27 = var37[var28](var36, var35, var34, var33, var32, var31);
                var24 = var5;
                var23 = var26;
                var22 = var2;
                _fun0019_ip = 174; continue _fun0019;
case 172:
                var2 = global;
                var26 = var2.globalThis;
                var27 = var26.Error;
                var32 = var19.typeName;
                var2 = var2.HermesInternal;
                var29 = var2.concat;
                var37 = 'Unknown field ';
                var35 = ' (wire type ';
                var33 = ') for ';
                var36 = var31;
                var34 = var25;
                var36 = var37[var29](var36, var35, var34, var33, var32, var31);
                var26 = var27.prototype;
                var26 = Object.create(var26, {constructor: {value: var27}});
                var37 = var26;
                var2 = new var37[var27](var36, var35);
                var2 = var2 instanceof Object ? var2 : var26;
                throw var2;
case 170:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var14];
                var2 = var26.bind(var17)(var2);
                var28 = var2.BoolValue;
                var27 = var28.internalBinaryRead;
                var2 = var21.uint32;
                var35 = var2.bind(var21)();
                var33 = var1.animated;
                var37 = var28;
                var36 = var21;
                var34 = var20;
                var2 = var37[var27](var36, var35, var34, var33, var32);
                var1['animated'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0019_ip = 174; continue _fun0019;
case 168:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var26.bind(var17)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var25 !== var2)) { _fun0019_ip = 177; continue _fun0019 }
case 178:
                var26 = var1.colors;
                var25 = var26.push;
                var2 = var21.uint32;
                var2 = var2.bind(var21)();
                var2 = var25.bind(var26)(var2);
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0019_ip = 174; continue _fun0019;
case 177:
                var2 = var21.int32;
                var25 = var2.bind(var21)();
                var2 = var21.pos;
                var25 = var25 + var2;
                var2 = var21.pos;
                var23 = var4;
                var22 = var3;
                var24 = var25;
                if(!(var2 < var24)) { _fun0019_ip = 174; continue _fun0019 }
case 179:
                var27 = var1.colors;
                var26 = var27.push;
                var2 = var21.uint32;
                var2 = var2.bind(var21)();
                var2 = var26.bind(var27)(var2);
                var2 = var21.pos;
                var24 = var25;
                var23 = var4;
                var22 = var3;
                if(var2 < var25) { _fun0019_ip = 179; continue _fun0019 }
case 180:
                _fun0019_ip = 174; continue _fun0019;
case 166:
                var2 = var21.int32;
                var2 = var2.bind(var21)();
                var1['effectId'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0019_ip = 174; continue _fun0019;
case 164:
                var2 = var21.int32;
                var2 = var2.bind(var21)();
                var1['fontId'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
case 174:
                var2 = var21.pos;
                var5 = var24;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0019_ip = 163; continue _fun0019 }
case 162:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.fontId;
                var4 = 0;
                if(!(var4 !== var3)) { _fun0020_ip = 15; continue _fun0020 }
case 181:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 1;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.int32;
                var3 = var5.fontId;
                var3 = var6.bind(var7)(var3);
case 15:
                var3 = var5.effectId;
                if(!(var4 !== var3)) { _fun0020_ip = 182; continue _fun0020 }
case 150:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 2;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.int32;
                var3 = var5.effectId;
                var3 = var6.bind(var7)(var3);
case 182:
                var3 = var5.colors;
                var3 = var3.length;
                if(!var3) { _fun0020_ip = 183; continue _fun0020 }
case 109:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 3;
                var6 = var7.bind(var1)(var3, var6);
                var3 = var6.fork;
                var3 = var3.bind(var6)();
                var3 = var5.colors;
                var3 = var3.length;
                var3 = var4 < var3;
                var4 = 0;
                if(!var3) { _fun0020_ip = 184; continue _fun0020 }
case 172:
                var6 = var1.uint32;
                var3 = var5.colors;
                var3 = var3[var4];
                var3 = var6.bind(var1)(var3);
                var4 = var4 + 1;
                var3 = var5.colors;
                var3 = var3.length;
                if(var4 < var3) { _fun0020_ip = 172; continue _fun0020 }
case 184:
                var3 = var1.join;
                var3 = var3.bind(var1)();
case 183:
                var3 = var5.animated;
                if(!var3) { _fun0020_ip = 185; continue _fun0020 }
case 137:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.animated;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 4;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 185:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0020_ip = 186; continue _fun0020 }
case 187:
                var2 = 1;
                if(!(var2 == var4)) { _fun0020_ip = 188; continue _fun0020 }
case 189:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 188:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 186:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var28 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot24 = var28;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserCollectibles$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'nameplate', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot23;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.UserCollectibles'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0021_ip = 190; continue _fun0021 }
case 191:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 190:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0022_ip = 12; continue _fun0022 }
case 13:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 12:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0022_ip = 68; continue _fun0022 }
case 192:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0022_ip = 193; continue _fun0022 }
case 194:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0022_ip = 108; continue _fun0022 }
case 195:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0022_ip = 19; continue _fun0022 }
case 196:
                var22 = var20;
                if(!(var10 === var20)) { _fun0022_ip = 197; continue _fun0022 }
case 198:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 197:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0022_ip = 19; continue _fun0022;
case 108:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 193:
                var22 = _closure1_slot23;
                var21 = var22.internalBinaryRead;
                var2 = var17.uint32;
                var30 = var2.bind(var17)();
                var28 = var1.nameplate;
                var32 = var22;
                var31 = var17;
                var29 = var16;
                var2 = var32[var21](var31, var30, var29, var28, var27);
                var1['nameplate'] = var2;
                var19 = var4;
                var18 = var3;
case 19:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0022_ip = 192; continue _fun0022 }
case 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.nameplate;
                if(!var3) { _fun0023_ip = 199; continue _fun0023 }
case 13:
                var7 = _closure1_slot23;
                var6 = var7.internalBinaryWrite;
                var4 = var5.nameplate;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 199:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0023_ip = 200; continue _fun0023 }
case 201:
                var2 = 1;
                if(!(var2 == var4)) { _fun0023_ip = 182; continue _fun0023 }
case 202:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 182:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 200:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var27 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot25 = var27;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserPrimaryGuild$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'identity_guild_id', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(4);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'identity_enabled', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'tag', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'badge', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var7;
            var6[3] = var1;
            var1 = ['discord_protos.users.v1.UserPrimaryGuild'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0024_ip = 190; continue _fun0024 }
case 191:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 190:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var18 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0025_ip = 12; continue _fun0025 }
case 13:
                var2 = var18.create;
                var1 = var2.bind(var18)();
case 12:
                var3 = var20.pos;
                var2 = arg2;
                var17 = var3 + var2;
                var2 = var20.pos;
                var2 = var2 < var17;
                var16 = undefined;
                var14 = 7;
                var13 = 6;
                var12 = true;
                var11 = false;
                var10 = 'throw';
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0025_ip = 203; continue _fun0025 }
case 204:
                var2 = var20.tag;
                var21 = var2.bind(var20)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var16)(var21, var7);
                var29 = var2[var5];
                var28 = var2[var6];
                if(!(var6 !== var29)) { _fun0025_ip = 205; continue _fun0025 }
case 206:
                if(!(var7 !== var29)) { _fun0025_ip = 207; continue _fun0025 }
case 208:
                if(!(var8 !== var29)) { _fun0025_ip = 209; continue _fun0025 }
case 210:
                if(!(var9 !== var29)) { _fun0025_ip = 37; continue _fun0025 }
case 130:
                var23 = var19.readUnknownField;
                if(!(var10 !== var23)) { _fun0025_ip = 211; continue _fun0025 }
case 212:
                var2 = var20.skip;
                var2 = var2.bind(var20)(var28);
                var22 = var23;
                var21 = var2;
                if(!(var11 !== var23)) { _fun0025_ip = 213; continue _fun0025 }
case 102:
                var25 = var23;
                if(!(var12 === var23)) { _fun0025_ip = 214; continue _fun0025 }
case 215:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var13];
                var24 = var26.bind(var16)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 214:
                var34 = var18.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var29;
                var31 = var28;
                var30 = var2;
                var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                var22 = var23;
                var21 = var2;
                _fun0025_ip = 213; continue _fun0025;
case 211:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var30 = var18.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var35 = 'Unknown field ';
                var33 = ' (wire type ';
                var31 = ') for ';
                var34 = var29;
                var32 = var28;
                var34 = var35[var26](var34, var33, var32, var31, var30, var29);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var35 = var23;
                var2 = new var35[var24](var34, var33);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 37:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var14];
                var2 = var23.bind(var16)(var2);
                var25 = var2.StringValue;
                var24 = var25.internalBinaryRead;
                var2 = var20.uint32;
                var33 = var2.bind(var20)();
                var31 = var1.badge;
                var35 = var25;
                var34 = var20;
                var32 = var19;
                var2 = var35[var24](var34, var33, var32, var31, var30);
                var1['badge'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0025_ip = 213; continue _fun0025;
case 209:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var14];
                var2 = var23.bind(var16)(var2);
                var25 = var2.StringValue;
                var24 = var25.internalBinaryRead;
                var2 = var20.uint32;
                var33 = var2.bind(var20)();
                var31 = var1.tag;
                var35 = var25;
                var34 = var20;
                var32 = var19;
                var2 = var35[var24](var34, var33, var32, var31, var30);
                var1['tag'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0025_ip = 213; continue _fun0025;
case 207:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var14];
                var2 = var23.bind(var16)(var2);
                var25 = var2.BoolValue;
                var24 = var25.internalBinaryRead;
                var2 = var20.uint32;
                var33 = var2.bind(var20)();
                var31 = var1.identityEnabled;
                var35 = var25;
                var34 = var20;
                var32 = var19;
                var2 = var35[var24](var34, var33, var32, var31, var30);
                var1['identityEnabled'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0025_ip = 213; continue _fun0025;
case 205:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var14];
                var2 = var23.bind(var16)(var2);
                var25 = var2.UInt64Value;
                var24 = var25.internalBinaryRead;
                var2 = var20.uint32;
                var33 = var2.bind(var20)();
                var31 = var1.identityGuildId;
                var35 = var25;
                var34 = var20;
                var32 = var19;
                var2 = var35[var24](var34, var33, var32, var31, var30);
                var1['identityGuildId'] = var2;
                var22 = var4;
                var21 = var3;
case 213:
                var2 = var20.pos;
                var4 = var22;
                var3 = var21;
                if(var2 < var17) { _fun0025_ip = 204; continue _fun0025 }
case 203:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.identityGuildId;
                if(!var3) { _fun0026_ip = 216; continue _fun0026 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.identityGuildId;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 216:
                var3 = var5.identityEnabled;
                if(!var3) { _fun0026_ip = 217; continue _fun0026 }
case 208:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.identityEnabled;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 217:
                var3 = var5.tag;
                if(!var3) { _fun0026_ip = 218; continue _fun0026 }
case 219:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.tag;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 218:
                var3 = var5.badge;
                if(!var3) { _fun0026_ip = 220; continue _fun0026 }
case 65:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.badge;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 4;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 220:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0026_ip = 221; continue _fun0026 }
case 188:
                var2 = 1;
                if(!(var2 == var4)) { _fun0026_ip = 222; continue _fun0026 }
case 223:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 222:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 221:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var26 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot26 = var26;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ScheduleRule$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(6);
            var1 = {'no': 1, 'name': 'rule_id', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'label', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'start_time', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot21;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'end_time', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot21;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'days', 'kind': 'enum', 'repeat': 1};
            var7 = function T() {
                var2 = _closure1_slot8;
                var1 = ['discord_protos.users.v1.DayOfWeek'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'enabled', 'kind': 'scalar', 'T': 8};
            var6[5] = var1;
            var1 = ['discord_protos.users.v1.ScheduleRule'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'ruleId': '', 'label': '', 'days': null, 'enabled': false};
                var2 = new Array(0);
                var1['days'] = var2;
                var11 = false;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0027_ip = 208; continue _fun0027 }
case 224:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 208:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0028_ip = 12; continue _fun0028 }
case 13:
                var2 = var19.create;
                var1 = var2.bind(var19)();
case 12:
                var3 = var21.pos;
                var2 = arg2;
                var18 = var3 + var2;
                var2 = var21.pos;
                var2 = var2 < var18;
                var17 = undefined;
                var15 = 6;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 5;
                var10 = 4;
                var9 = 3;
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0028_ip = 225; continue _fun0028 }
case 163:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var8);
                var31 = var2[var6];
                var25 = var2[var7];
                if(!(var7 !== var31)) { _fun0028_ip = 226; continue _fun0028 }
case 165:
                if(!(var8 !== var31)) { _fun0028_ip = 227; continue _fun0028 }
case 167:
                if(!(var9 !== var31)) { _fun0028_ip = 228; continue _fun0028 }
case 169:
                if(!(var10 !== var31)) { _fun0028_ip = 48; continue _fun0028 }
case 171:
                if(!(var11 !== var31)) { _fun0028_ip = 229; continue _fun0028 }
case 230:
                if(!(var15 !== var31)) { _fun0028_ip = 231; continue _fun0028 }
case 30:
                var26 = var20.readUnknownField;
                if(!(var12 !== var26)) { _fun0028_ip = 232; continue _fun0028 }
case 33:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var25);
                var24 = var5;
                var23 = var26;
                var22 = var2;
                if(!(var13 !== var26)) { _fun0028_ip = 233; continue _fun0028 }
case 234:
                var28 = var26;
                if(!(var14 === var26)) { _fun0028_ip = 235; continue _fun0028 }
case 133:
                var29 = _closure1_slot0;
                var27 = _closure1_slot1;
                var27 = var27[var15];
                var27 = var29.bind(var17)(var27);
                var27 = var27.UnknownFieldHandler;
                var28 = var27.onRead;
case 235:
                var36 = var19.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var25;
                var32 = var2;
                var27 = var37[var28](var36, var35, var34, var33, var32, var31);
                var24 = var5;
                var23 = var26;
                var22 = var2;
                _fun0028_ip = 233; continue _fun0028;
case 232:
                var2 = global;
                var26 = var2.globalThis;
                var27 = var26.Error;
                var32 = var19.typeName;
                var2 = var2.HermesInternal;
                var29 = var2.concat;
                var37 = 'Unknown field ';
                var35 = ' (wire type ';
                var33 = ') for ';
                var36 = var31;
                var34 = var25;
                var36 = var37[var29](var36, var35, var34, var33, var32, var31);
                var26 = var27.prototype;
                var26 = Object.create(var26, {constructor: {value: var27}});
                var37 = var26;
                var2 = new var37[var27](var36, var35);
                var2 = var2 instanceof Object ? var2 : var26;
                throw var2;
case 231:
                var2 = var21.bool;
                var2 = var2.bind(var21)();
                var1['enabled'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0028_ip = 233; continue _fun0028;
case 229:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var26.bind(var17)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var25 !== var2)) { _fun0028_ip = 236; continue _fun0028 }
case 237:
                var26 = var1.days;
                var25 = var26.push;
                var2 = var21.int32;
                var2 = var2.bind(var21)();
                var2 = var25.bind(var26)(var2);
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0028_ip = 233; continue _fun0028;
case 236:
                var2 = var21.int32;
                var25 = var2.bind(var21)();
                var2 = var21.pos;
                var25 = var25 + var2;
                var2 = var21.pos;
                var23 = var4;
                var22 = var3;
                var24 = var25;
                if(!(var2 < var24)) { _fun0028_ip = 233; continue _fun0028 }
case 238:
                var27 = var1.days;
                var26 = var27.push;
                var2 = var21.int32;
                var2 = var2.bind(var21)();
                var2 = var26.bind(var27)(var2);
                var2 = var21.pos;
                var24 = var25;
                var23 = var4;
                var22 = var3;
                if(var2 < var25) { _fun0028_ip = 238; continue _fun0028 }
case 239:
                _fun0028_ip = 233; continue _fun0028;
case 48:
                var27 = _closure1_slot21;
                var26 = var27.internalBinaryRead;
                var2 = var21.uint32;
                var35 = var2.bind(var21)();
                var33 = var1.endTime;
                var37 = var27;
                var36 = var21;
                var34 = var20;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['endTime'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0028_ip = 233; continue _fun0028;
case 228:
                var27 = _closure1_slot21;
                var26 = var27.internalBinaryRead;
                var2 = var21.uint32;
                var35 = var2.bind(var21)();
                var33 = var1.startTime;
                var37 = var27;
                var36 = var21;
                var34 = var20;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['startTime'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0028_ip = 233; continue _fun0028;
case 227:
                var2 = var21.string;
                var2 = var2.bind(var21)();
                var1['label'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0028_ip = 233; continue _fun0028;
case 226:
                var2 = var21.string;
                var2 = var2.bind(var21)();
                var1['ruleId'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
case 233:
                var2 = var21.pos;
                var5 = var24;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0028_ip = 163; continue _fun0028 }
case 225:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.ruleId;
                var4 = '';
                if(!(var4 !== var2)) { _fun0029_ip = 15; continue _fun0029 }
case 134:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 6;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var6);
                var2 = var2.WireType;
                var6 = var2.LengthDelimited;
                var2 = 1;
                var7 = var7.bind(var1)(var2, var6);
                var6 = var7.string;
                var2 = var5.ruleId;
                var2 = var6.bind(var7)(var2);
case 15:
                var2 = var5.label;
                if(!(var4 !== var2)) { _fun0029_ip = 240; continue _fun0029 }
case 88:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 2;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.string;
                var2 = var5.label;
                var2 = var4.bind(var6)(var2);
case 240:
                var2 = var5.startTime;
                if(!var2) { _fun0029_ip = 241; continue _fun0029 }
case 132:
                var7 = _closure1_slot21;
                var6 = var7.internalBinaryWrite;
                var4 = var5.startTime;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 3;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 241:
                var2 = var5.endTime;
                if(!var2) { _fun0029_ip = 242; continue _fun0029 }
case 243:
                var7 = _closure1_slot21;
                var6 = var7.internalBinaryWrite;
                var4 = var5.endTime;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var8 = var8[var2];
                var2 = undefined;
                var2 = var10.bind(var2)(var8);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 4;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 242:
                var2 = var5.days;
                var2 = var2.length;
                if(!var2) { _fun0029_ip = 244; continue _fun0029 }
case 245:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 5;
                var4 = var6.bind(var1)(var2, var4);
                var2 = var4.fork;
                var2 = var2.bind(var4)();
                var2 = var5.days;
                var2 = var2.length;
                var4 = 0;
                var2 = var4 < var2;
                if(!var2) { _fun0029_ip = 246; continue _fun0029 }
case 247:
                var6 = var1.int32;
                var2 = var5.days;
                var2 = var2[var4];
                var2 = var6.bind(var1)(var2);
                var4 = var4 + 1;
                var2 = var5.days;
                var2 = var2.length;
                if(var4 < var2) { _fun0029_ip = 247; continue _fun0029 }
case 246:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 244:
                var4 = var5.enabled;
                var2 = false;
                if(!(var2 !== var4)) { _fun0029_ip = 248; continue _fun0029 }
case 249:
                var7 = var1.tag;
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = 6;
                var8 = var4[var6];
                var4 = undefined;
                var4 = var9.bind(var4)(var8);
                var4 = var4.WireType;
                var4 = var4.Varint;
                var7 = var7.bind(var1)(var6, var4);
                var6 = var7.bool;
                var4 = var5.enabled;
                var4 = var6.bind(var7)(var4);
case 248:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0029_ip = 250; continue _fun0029 }
case 251:
                var2 = 1;
                if(!(var2 == var4)) { _fun0029_ip = 119; continue _fun0029 }
case 164:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 119:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 250:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var25 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot27 = var25;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function RestrictedSchedule$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'rules', 'kind': 'message', 'repeat': 1};
            var6 = function T() {
                var1 = _closure1_slot27;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.RestrictedSchedule'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['rules'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0030_ip = 124; continue _fun0030 }
case 125:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 124:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0031_ip = 12; continue _fun0031 }
case 13:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 12:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0031_ip = 252; continue _fun0031 }
case 192:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0031_ip = 193; continue _fun0031 }
case 194:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0031_ip = 108; continue _fun0031 }
case 195:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0031_ip = 253; continue _fun0031 }
case 196:
                var22 = var20;
                if(!(var10 === var20)) { _fun0031_ip = 197; continue _fun0031 }
case 198:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 197:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0031_ip = 253; continue _fun0031;
case 108:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 193:
                var21 = var1.rules;
                var20 = var21.push;
                var23 = _closure1_slot27;
                var22 = var23.internalBinaryRead;
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var2 = var22.bind(var23)(var17, var2, var16);
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 253:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0031_ip = 192; continue _fun0031 }
case 252:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.rules;
                var2 = var2.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var8) { _fun0032_ip = 254; continue _fun0032 }
case 255:
                var12 = _closure1_slot27;
                var11 = var12.internalBinaryWrite;
                var8 = var5.rules;
                var10 = var8[var9];
                var13 = var1.tag;
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var13 = var13.bind(var1)(var6, var8);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var10 = var11.bind(var12)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
                var9 = var9 + 1;
                var8 = var5.rules;
                var8 = var8.length;
                if(var9 < var8) { _fun0032_ip = 255; continue _fun0032 }
case 254:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0032_ip = 256; continue _fun0032 }
case 257:
                if(!(var6 == var3)) { _fun0032_ip = 215; continue _fun0032 }
case 173:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 215:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 256:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var24 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot28 = var24;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function CrossPlatformRestriction$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'restriction_expiry', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'application_id', 'kind': 'scalar', 'T': 6};
            var6[1] = var1;
            var1 = ['discord_protos.users.v1.CrossPlatformRestriction'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = '0';
                var1['applicationId'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0033_ip = 258; continue _fun0033 }
case 59:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 258:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0034_ip = 12; continue _fun0034 }
case 13:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 12:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0034_ip = 46; continue _fun0034 }
case 29:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0034_ip = 145; continue _fun0034 }
case 124:
                if(!(var7 !== var27)) { _fun0034_ip = 259; continue _fun0034 }
case 195:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0034_ip = 260; continue _fun0034 }
case 20:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0034_ip = 237; continue _fun0034 }
case 261:
                var23 = var21;
                if(!(var10 === var21)) { _fun0034_ip = 262; continue _fun0034 }
case 263:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 262:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0034_ip = 237; continue _fun0034;
case 260:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 259:
                var2 = var18.fixed64;
                var21 = var2.bind(var18)();
                var2 = var21.toString;
                var2 = var2.bind(var21)();
                var1['applicationId'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0034_ip = 237; continue _fun0034;
case 145:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.Timestamp;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.restrictionExpiry;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['restrictionExpiry'] = var2;
                var20 = var4;
                var19 = var3;
case 237:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0034_ip = 29; continue _fun0034 }
case 46:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.restrictionExpiry;
                if(!var3) { _fun0035_ip = 216; continue _fun0035 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.restrictionExpiry;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 216:
                var4 = var5.applicationId;
                var3 = '0';
                if(!(var3 !== var4)) { _fun0035_ip = 264; continue _fun0035 }
case 91:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Bit64;
                var3 = 2;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.fixed64;
                var3 = var5.applicationId;
                var3 = var4.bind(var6)(var3);
case 264:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0035_ip = 265; continue _fun0035 }
case 214:
                var2 = 1;
                if(!(var2 == var4)) { _fun0035_ip = 266; continue _fun0035 }
case 267:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 266:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 265:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var23 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot29 = var23;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function BadgeCommon$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'obtained_at', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.BadgeCommon'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0036_ip = 190; continue _fun0036 }
case 191:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 190:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0037_ip = 12; continue _fun0037 }
case 13:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 12:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0037_ip = 268; continue _fun0037 }
case 29:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0037_ip = 269; continue _fun0037 }
case 124:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0037_ip = 270; continue _fun0037 }
case 18:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0037_ip = 113; continue _fun0037 }
case 24:
                var23 = var21;
                if(!(var10 === var21)) { _fun0037_ip = 43; continue _fun0037 }
case 261:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 43:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0037_ip = 113; continue _fun0037;
case 270:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 269:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.Timestamp;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.obtainedAt;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['obtainedAt'] = var2;
                var20 = var4;
                var19 = var3;
case 113:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0037_ip = 29; continue _fun0037 }
case 268:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.obtainedAt;
                if(!var3) { _fun0038_ip = 216; continue _fun0038 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.obtainedAt;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 216:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0038_ip = 271; continue _fun0038 }
case 272:
                var2 = 1;
                if(!(var2 == var4)) { _fun0038_ip = 64; continue _fun0038 }
case 254:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 64:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 271:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var22 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot30 = var22;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function AprilFools2026Badge$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'common', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot30;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(3);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'level', 'kind': 'scalar', 'T': 5};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'combat_class', 'kind': 'scalar', 'T': 9};
            var6[2] = var1;
            var1 = ['discord_protos.users.v1.AprilFools2026Badge'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'level': 0, 'combatClass': ''};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0039_ip = 11; continue _fun0039 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0040_ip = 12; continue _fun0040 }
case 13:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 12:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0040_ip = 273; continue _fun0040 }
case 29:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0040_ip = 101; continue _fun0040 }
case 124:
                if(!(var7 !== var27)) { _fun0040_ip = 274; continue _fun0040 }
case 195:
                if(!(var8 !== var27)) { _fun0040_ip = 275; continue _fun0040 }
case 41:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0040_ip = 276; continue _fun0040 }
case 22:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0040_ip = 277; continue _fun0040 }
case 263:
                var23 = var21;
                if(!(var11 === var21)) { _fun0040_ip = 256; continue _fun0040 }
case 278:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 256:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0040_ip = 277; continue _fun0040;
case 276:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 275:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['combatClass'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0040_ip = 277; continue _fun0040;
case 274:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['level'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0040_ip = 277; continue _fun0040;
case 101:
                var23 = _closure1_slot30;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.common;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['common'] = var2;
                var20 = var4;
                var19 = var3;
case 277:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0040_ip = 29; continue _fun0040 }
case 273:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.common;
                if(!var3) { _fun0041_ip = 199; continue _fun0041 }
case 13:
                var7 = _closure1_slot30;
                var6 = var7.internalBinaryWrite;
                var4 = var5.common;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 199:
                var4 = var5.level;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0041_ip = 279; continue _fun0041 }
case 201:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 2;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.int32;
                var3 = var5.level;
                var3 = var4.bind(var6)(var3);
case 279:
                var4 = var5.combatClass;
                var3 = '';
                if(!(var3 !== var4)) { _fun0041_ip = 280; continue _fun0041 }
case 281:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 3;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.string;
                var3 = var5.combatClass;
                var3 = var4.bind(var6)(var3);
case 280:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0041_ip = 274; continue _fun0041 }
case 282:
                var2 = 1;
                if(!(var2 == var4)) { _fun0041_ip = 283; continue _fun0041 }
case 284:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 283:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 274:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var21 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot31 = var21;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Badge$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'april_fools_2026', 'kind': 'message', 'oneof': 'badge'};
            var6 = function T() {
                var1 = _closure1_slot31;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.Badge'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var6 = undefined;
                var2['oneofKind'] = var6;
                var1['badge'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0042_ip = 11; continue _fun0042 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0043_ip = 12; continue _fun0043 }
case 13:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 12:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var13 = 'aprilFools2026';
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0043_ip = 268; continue _fun0043 }
case 285:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0043_ip = 183; continue _fun0043 }
case 258:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0043_ip = 286; continue _fun0043 }
case 160:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0043_ip = 113; continue _fun0043 }
case 257:
                var23 = var21;
                if(!(var10 === var21)) { _fun0043_ip = 104; continue _fun0043 }
case 240:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 104:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0043_ip = 113; continue _fun0043;
case 286:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 183:
                var2 = {};
                var2['oneofKind'] = var13;
                var24 = _closure1_slot31;
                var23 = var24.internalBinaryRead;
                var21 = var18.uint32;
                var31 = var21.bind(var18)();
                var21 = var1.badge;
                var29 = var21.aprilFools2026;
                var33 = var24;
                var32 = var18;
                var30 = var17;
                var21 = var33[var23](var32, var31, var30, var29, var28);
                var2['aprilFools2026'] = var21;
                var1['badge'] = var2;
                var20 = var4;
                var19 = var3;
case 113:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0043_ip = 285; continue _fun0043 }
case 268:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.badge;
                var4 = var3.oneofKind;
                var3 = 'aprilFools2026';
                if(!(var3 === var4)) { _fun0044_ip = 195; continue _fun0044 }
case 287:
                var7 = _closure1_slot31;
                var6 = var7.internalBinaryWrite;
                var4 = var5.badge;
                var4 = var4.aprilFools2026;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 195:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0044_ip = 135; continue _fun0044 }
case 91:
                var2 = 1;
                if(!(var2 == var4)) { _fun0044_ip = 288; continue _fun0044 }
case 93:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 288:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 135:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var20 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot32 = var20;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserBadges$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'badges', 'kind': 'message', 'repeat': 1};
            var6 = function T() {
                var1 = _closure1_slot32;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.UserBadges'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['badges'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0045_ip = 124; continue _fun0045 }
case 125:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 124:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0046_ip = 12; continue _fun0046 }
case 13:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 12:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0046_ip = 252; continue _fun0046 }
case 192:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0046_ip = 193; continue _fun0046 }
case 194:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0046_ip = 108; continue _fun0046 }
case 195:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0046_ip = 253; continue _fun0046 }
case 196:
                var22 = var20;
                if(!(var10 === var20)) { _fun0046_ip = 197; continue _fun0046 }
case 198:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 197:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0046_ip = 253; continue _fun0046;
case 108:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 193:
                var21 = var1.badges;
                var20 = var21.push;
                var23 = _closure1_slot32;
                var22 = var23.internalBinaryRead;
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var2 = var22.bind(var23)(var17, var2, var16);
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 253:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0046_ip = 192; continue _fun0046 }
case 252:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.badges;
                var2 = var2.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                if(!var8) { _fun0047_ip = 254; continue _fun0047 }
case 255:
                var12 = _closure1_slot32;
                var11 = var12.internalBinaryWrite;
                var8 = var5.badges;
                var10 = var8[var9];
                var13 = var1.tag;
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var13 = var13.bind(var1)(var6, var8);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var10 = var11.bind(var12)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
                var9 = var9 + 1;
                var8 = var5.badges;
                var8 = var8.length;
                if(var9 < var8) { _fun0047_ip = 255; continue _fun0047 }
case 254:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0047_ip = 256; continue _fun0047 }
case 257:
                if(!(var6 == var3)) { _fun0047_ip = 215; continue _fun0047 }
case 173:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 215:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 256:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var19 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot33 = var19;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function AnonymizationInfo$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'status', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot11;
                var1 = ['discord_protos.users.v1.AnonymizationStatus'];
                var1[1] = var2;
                var2 = 'ANONYMIZATION_STATUS_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'anon_user_id', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.users.v1.AnonymizationInfo'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = 0;
                var1['status'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0048_ip = 194; continue _fun0048 }
case 285:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 194:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0049_ip = 12; continue _fun0049 }
case 13:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 12:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 7;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0049_ip = 289; continue _fun0049 }
case 29:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0049_ip = 229; continue _fun0049 }
case 124:
                if(!(var7 !== var27)) { _fun0049_ip = 259; continue _fun0049 }
case 195:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0049_ip = 260; continue _fun0049 }
case 20:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0049_ip = 290; continue _fun0049 }
case 261:
                var23 = var21;
                if(!(var10 === var21)) { _fun0049_ip = 262; continue _fun0049 }
case 263:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 262:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0049_ip = 290; continue _fun0049;
case 260:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 259:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.UInt64Value;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.anonUserId;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['anonUserId'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0049_ip = 290; continue _fun0049;
case 229:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['status'] = var2;
                var20 = var4;
                var19 = var3;
case 290:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0049_ip = 29; continue _fun0049 }
case 289:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var4 = var5.status;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0050_ip = 285; continue _fun0050 }
case 291:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.int32;
                var3 = var5.status;
                var3 = var4.bind(var6)(var3);
case 285:
                var3 = var5.anonUserId;
                if(!var3) { _fun0050_ip = 135; continue _fun0050 }
case 31:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.anonUserId;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 135:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0050_ip = 292; continue _fun0050 }
case 293:
                var2 = 1;
                if(!(var2 == var4)) { _fun0050_ip = 294; continue _fun0050 }
case 295:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 294:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 292:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var18 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot34 = var18;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserData$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'linked_users', 'kind': 'map', 'K': 6};
            var6 = {};
            var9 = 'message';
            var6['kind'] = var9;
            var8 = function T() {
                var1 = _closure1_slot36;
                return var1;
            };
            var6['T'] = var8;
            var1['V'] = var6;
            var6 = new Array(18);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'safety_feature_limits', 'kind': 'map', 'K': 13};
            var8 = {};
            var8['kind'] = var9;
            var10 = function T() {
                var1 = _closure1_slot38;
                return var1;
            };
            var8['T'] = var10;
            var1['V'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'safety_flags', 'kind': 'map', 'K': 13};
            var8 = {};
            var8['kind'] = var9;
            var9 = function T() {
                var1 = _closure1_slot39;
                return var1;
            };
            var8['T'] = var9;
            var1['V'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'quest', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot40;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'primary_guild', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot26;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'cross_platform_restriction', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot29;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'collectibles', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot25;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 8, 'name': 'safety_state', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.SafetyState;
                return var1;
            };
            var1['T'] = var8;
            var6[7] = var1;
            var1 = {'no': 9, 'name': 'premium_state', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot41;
                return var1;
            };
            var1['T'] = var8;
            var6[8] = var1;
            var1 = {'no': 10, 'name': 'display_name_styles', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot24;
                return var1;
            };
            var1['T'] = var8;
            var6[9] = var1;
            var1 = {'no': 11, 'name': 'store_country', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot42;
                return var1;
            };
            var1['T'] = var8;
            var6[10] = var1;
            var1 = {'no': 12, 'name': 'restricted_schedule', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot28;
                return var1;
            };
            var1['T'] = var8;
            var6[11] = var1;
            var1 = {'no': 13, 'name': 'age_assurance_data', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot35;
                return var1;
            };
            var1['T'] = var8;
            var6[12] = var1;
            var1 = {'no': 14, 'name': 'perks', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot46;
                return var1;
            };
            var1['T'] = var8;
            var6[13] = var1;
            var1 = {'no': 15, 'name': 'badges', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot33;
                return var1;
            };
            var1['T'] = var8;
            var6[14] = var1;
            var1 = {'no': 16, 'name': 'country_data', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot47;
                return var1;
            };
            var1['T'] = var8;
            var6[15] = var1;
            var1 = {'no': 17, 'name': 'is_pending_required_action', 'kind': 'scalar', 'T': 8};
            var6[16] = var1;
            var1 = {'no': 18, 'name': 'anonymization_info', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot34;
                return var1;
            };
            var1['T'] = var7;
            var6[17] = var1;
            var1 = ['discord_protos.users.v1.UserData'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['linkedUsers'] = var2;
                var2 = {};
                var1['safetyFeatureLimits'] = var2;
                var2 = {};
                var1['safetyFlags'] = var2;
                var11 = false;
                var1['isPendingRequiredAction'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0051_ip = 20; continue _fun0051 }
case 296:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 20:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0052_ip = 12; continue _fun0052 }
case 13:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 12:
                var4 = var20.pos;
                var3 = arg2;
                var18 = var4 + var3;
                var3 = var20.pos;
                var3 = var3 < var18;
                var17 = undefined;
                var15 = 6;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 8;
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0052_ip = 297; continue _fun0052 }
case 29:
                var3 = var20.tag;
                var7 = var3.bind(var20)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var17)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=1244, default_jump_address=1047, unsigned_min_value=1, unsigned_max_value=18) // Switch table: [1020, 990, 960, 904, 848, 792, 736, 661, 605, 549, 493, 437, 381, 325, 269, 213, 186, 130];
case 160:
                var23 = _closure1_slot34;
                var22 = var23.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.anonymizationInfo;
                var32 = var23;
                var31 = var20;
                var29 = var19;
                var3 = var32[var22](var31, var30, var29, var28, var27);
                var1['anonymizationInfo'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 197:
                var3 = var20.bool;
                var3 = var3.bind(var20)();
                var1['isPendingRequiredAction'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 27:
                var25 = _closure1_slot47;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.countryData;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['countryData'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 299:
                var25 = _closure1_slot33;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.badges;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['badges'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 300:
                var25 = _closure1_slot46;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.perks;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['perks'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 301:
                var25 = _closure1_slot35;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.ageAssuranceData;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['ageAssuranceData'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 67:
                var25 = _closure1_slot28;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.restrictedSchedule;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['restrictedSchedule'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 186:
                var25 = _closure1_slot42;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.storeCountry;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['storeCountry'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 302:
                var25 = _closure1_slot24;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.displayNameStyles;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['displayNameStyles'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 303:
                var25 = _closure1_slot41;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.premiumState;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['premiumState'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 304:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.SafetyState;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.safetyState;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['safetyState'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 305:
                var25 = _closure1_slot25;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.collectibles;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['collectibles'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 122:
                var25 = _closure1_slot29;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.crossPlatformRestriction;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['crossPlatformRestriction'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 306:
                var25 = _closure1_slot26;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.primaryGuild;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['primaryGuild'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 307:
                var25 = _closure1_slot40;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.quest;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['quest'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 308:
                var23 = var2.binaryReadMap3;
                var3 = var1.safetyFlags;
                var3 = var23.bind(var2)(var3, var20, var19);
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 309:
                var23 = var2.binaryReadMap2;
                var3 = var1.safetyFeatureLimits;
                var3 = var23.bind(var2)(var3, var20, var19);
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 310:
                var23 = var2.binaryReadMap1;
                var3 = var1.linkedUsers;
                var3 = var23.bind(var2)(var3, var20, var19);
                var22 = var5;
                var21 = var4;
                _fun0052_ip = 298; continue _fun0052;
case 311:
                var23 = var19.readUnknownField;
                if(!(var12 !== var23)) { _fun0052_ip = 312; continue _fun0052 }
case 313:
                var3 = var20.skip;
                var3 = var3.bind(var20)(var7);
                var22 = var23;
                var21 = var3;
                if(!(var13 !== var23)) { _fun0052_ip = 298; continue _fun0052 }
case 314:
                var25 = var23;
                if(!(var14 === var23)) { _fun0052_ip = 315; continue _fun0052 }
case 316:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var15];
                var24 = var26.bind(var17)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 315:
                var31 = var2.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var8;
                var28 = var7;
                var27 = var3;
                var24 = var32[var25](var31, var30, var29, var28, var27, var26);
                var22 = var23;
                var21 = var3;
case 298:
                var3 = var20.pos;
                var5 = var22;
                var4 = var21;
                if(var3 < var18) { _fun0052_ip = 29; continue _fun0052 }
case 297:
                return var1;
case 312:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var27 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var8;
                var29 = var7;
                var31 = var32[var5](var31, var30, var29, var28, var27, var26);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var32 = var2;
                var1 = new var32[var3](var31, var30);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0053_ip = 138; continue _fun0053 }
case 317:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0053_ip = 99; continue _fun0053 }
case 4:
                if(!(var10 !== var3)) { _fun0053_ip = 318; continue _fun0053 }
case 136:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.users.v1.UserData.linked_users';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 318:
                var15 = _closure1_slot36;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0053_ip = 279; continue _fun0053;
case 99:
                var3 = var13.fixed64;
                var15 = var3.bind(var13)();
                var3 = var15.toString;
                var7 = var3.bind(var15)();
                var14 = var5;
case 279:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0053_ip = 317; continue _fun0053 }
case 138:
                var5 = null;
                var7 = var5 != var6;
                var3 = '0';
                if(!var7) { _fun0053_ip = 319; continue _fun0053 }
case 270:
                var3 = var6;
case 319:
                if(!(var5 == var4)) { _fun0053_ip = 63; continue _fun0053 }
case 260:
                var5 = _closure1_slot36;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 63:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'binaryReadMap2';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var5 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var4 = 0;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var3 = undefined;
                if(!var5) { _fun0054_ip = 135; continue _fun0054 }
case 317:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0054_ip = 99; continue _fun0054 }
case 4:
                if(!(var10 !== var5)) { _fun0054_ip = 318; continue _fun0054 }
case 136:
                var5 = global;
                var5 = var5.globalThis;
                var15 = var5.Error;
                var5 = var15.prototype;
                var14 = Object.create(var5, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.users.v1.UserData.safety_feature_limits';
                var19 = var14;
                var5 = new var19[var15](var18, var17);
                var5 = var5 instanceof Object ? var5 : var14;
                throw var5;
case 318:
                var15 = _closure1_slot38;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0054_ip = 64; continue _fun0054;
case 99:
                var5 = var13.uint32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 64:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0054_ip = 317; continue _fun0054 }
case 135:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0054_ip = 106; continue _fun0054 }
case 320:
                var4 = var6;
case 106:
                if(!(var5 == var3)) { _fun0054_ip = 260; continue _fun0054 }
case 321:
                var5 = _closure1_slot38;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 260:
                var2 = arg1;
                var2[var4] = var3;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'binaryReadMap3';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var5 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var4 = 0;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var3 = undefined;
                if(!var5) { _fun0055_ip = 135; continue _fun0055 }
case 317:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0055_ip = 99; continue _fun0055 }
case 4:
                if(!(var10 !== var5)) { _fun0055_ip = 318; continue _fun0055 }
case 136:
                var5 = global;
                var5 = var5.globalThis;
                var15 = var5.Error;
                var5 = var15.prototype;
                var14 = Object.create(var5, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.users.v1.UserData.safety_flags';
                var19 = var14;
                var5 = new var19[var15](var18, var17);
                var5 = var5 instanceof Object ? var5 : var14;
                throw var5;
case 318:
                var15 = _closure1_slot39;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0055_ip = 64; continue _fun0055;
case 99:
                var5 = var13.uint32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 64:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0055_ip = 317; continue _fun0055 }
case 135:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0055_ip = 106; continue _fun0055 }
case 320:
                var4 = var6;
case 106:
                if(!(var5 == var3)) { _fun0055_ip = 260; continue _fun0055 }
case 321:
                var5 = _closure1_slot39;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 260:
                var2 = arg1;
                var2[var4] = var3;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var13 = global;
                var6 = var13.Object;
                var4 = var6.keys;
                var2 = var5.linkedUsers;
                var10 = var4.bind(var6)(var2);
                var2 = var10.length;
                var12 = 0;
                var8 = var12 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                var11 = 2;
                var9 = 0;
                if(!var8) { _fun0056_ip = 266; continue _fun0056 }
case 322:
                var16 = var10[var9];
                var17 = var1.tag;
                var15 = _closure1_slot0;
                var8 = _closure1_slot1;
                var14 = var8[var7];
                var14 = var15.bind(var4)(var14);
                var14 = var14.WireType;
                var14 = var14.LengthDelimited;
                var17 = var17.bind(var1)(var6, var14);
                var14 = var17.fork;
                var18 = var14.bind(var17)();
                var17 = var18.tag;
                var14 = var8[var7];
                var14 = var15.bind(var4)(var14);
                var14 = var14.WireType;
                var14 = var14.Bit64;
                var17 = var17.bind(var18)(var6, var14);
                var14 = var17.fixed64;
                var14 = var14.bind(var17)(var16);
                var14 = var1.tag;
                var8 = var8[var7];
                var8 = var15.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var14 = var14.bind(var1)(var11, var8);
                var8 = var14.fork;
                var8 = var8.bind(var14)();
                var15 = _closure1_slot36;
                var14 = var15.internalBinaryWrite;
                var8 = var5.linkedUsers;
                var8 = var8[var16];
                var8 = var14.bind(var15)(var8, var1, var3);
                var8 = var1.join;
                var14 = var8.bind(var1)();
                var8 = var14.join;
                var8 = var8.bind(var14)();
                var9 = var9 + 1;
                var8 = var10.length;
                if(var9 < var8) { _fun0056_ip = 322; continue _fun0056 }
case 266:
                var10 = var13.Object;
                var9 = var10.keys;
                var8 = var5.safetyFeatureLimits;
                var10 = var9.bind(var10)(var8);
                var8 = var10.length;
                var8 = var12 < var8;
                var9 = 0;
                if(!var8) { _fun0056_ip = 323; continue _fun0056 }
case 324:
                var16 = var10[var9];
                var17 = var1.tag;
                var15 = _closure1_slot0;
                var8 = _closure1_slot1;
                var14 = var8[var7];
                var14 = var15.bind(var4)(var14);
                var14 = var14.WireType;
                var14 = var14.LengthDelimited;
                var17 = var17.bind(var1)(var11, var14);
                var14 = var17.fork;
                var18 = var14.bind(var17)();
                var17 = var18.tag;
                var14 = var8[var7];
                var14 = var15.bind(var4)(var14);
                var14 = var14.WireType;
                var14 = var14.Varint;
                var18 = var17.bind(var18)(var6, var14);
                var17 = var18.uint32;
                var14 = var13.parseInt;
                var14 = var14.bind(var4)(var16);
                var14 = var17.bind(var18)(var14);
                var14 = var1.tag;
                var8 = var8[var7];
                var8 = var15.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var14 = var14.bind(var1)(var11, var8);
                var8 = var14.fork;
                var8 = var8.bind(var14)();
                var15 = _closure1_slot38;
                var14 = var15.internalBinaryWrite;
                var8 = var5.safetyFeatureLimits;
                var8 = var8[var16];
                var8 = var14.bind(var15)(var8, var1, var3);
                var8 = var1.join;
                var14 = var8.bind(var1)();
                var8 = var14.join;
                var8 = var8.bind(var14)();
                var9 = var9 + 1;
                var8 = var10.length;
                if(var9 < var8) { _fun0056_ip = 324; continue _fun0056 }
case 323:
                var10 = var13.Object;
                var9 = var10.keys;
                var8 = var5.safetyFlags;
                var10 = var9.bind(var10)(var8);
                var8 = var10.length;
                var8 = var12 < var8;
                var9 = 3;
                var12 = 0;
                if(!var8) { _fun0056_ip = 325; continue _fun0056 }
case 326:
                var16 = var10[var12];
                var17 = var1.tag;
                var15 = _closure1_slot0;
                var8 = _closure1_slot1;
                var14 = var8[var7];
                var14 = var15.bind(var4)(var14);
                var14 = var14.WireType;
                var14 = var14.LengthDelimited;
                var17 = var17.bind(var1)(var9, var14);
                var14 = var17.fork;
                var18 = var14.bind(var17)();
                var17 = var18.tag;
                var14 = var8[var7];
                var14 = var15.bind(var4)(var14);
                var14 = var14.WireType;
                var14 = var14.Varint;
                var18 = var17.bind(var18)(var6, var14);
                var17 = var18.uint32;
                var14 = var13.parseInt;
                var14 = var14.bind(var4)(var16);
                var14 = var17.bind(var18)(var14);
                var14 = var1.tag;
                var8 = var8[var7];
                var8 = var15.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var14 = var14.bind(var1)(var11, var8);
                var8 = var14.fork;
                var8 = var8.bind(var14)();
                var15 = _closure1_slot39;
                var14 = var15.internalBinaryWrite;
                var8 = var5.safetyFlags;
                var8 = var8[var16];
                var8 = var14.bind(var15)(var8, var1, var3);
                var8 = var1.join;
                var14 = var8.bind(var1)();
                var8 = var14.join;
                var8 = var8.bind(var14)();
                var12 = var12 + 1;
                var8 = var10.length;
                if(var12 < var8) { _fun0056_ip = 326; continue _fun0056 }
case 325:
                var8 = var5.quest;
                if(!var8) { _fun0056_ip = 327; continue _fun0056 }
case 328:
                var11 = _closure1_slot40;
                var10 = var11.internalBinaryWrite;
                var9 = var5.quest;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 4;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 327:
                var8 = var5.primaryGuild;
                if(!var8) { _fun0056_ip = 329; continue _fun0056 }
case 330:
                var11 = _closure1_slot26;
                var10 = var11.internalBinaryWrite;
                var9 = var5.primaryGuild;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 5;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 329:
                var8 = var5.crossPlatformRestriction;
                if(!var8) { _fun0056_ip = 331; continue _fun0056 }
case 332:
                var11 = _closure1_slot29;
                var10 = var11.internalBinaryWrite;
                var9 = var5.crossPlatformRestriction;
                var12 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var7, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 331:
                var8 = var5.collectibles;
                if(!var8) { _fun0056_ip = 333; continue _fun0056 }
case 334:
                var11 = _closure1_slot25;
                var10 = var11.internalBinaryWrite;
                var9 = var5.collectibles;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 7;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 333:
                var8 = var5.safetyState;
                if(!var8) { _fun0056_ip = 335; continue _fun0056 }
case 336:
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var13 = 8;
                var9 = var8[var13];
                var9 = var14.bind(var4)(var9);
                var11 = var9.SafetyState;
                var10 = var11.internalBinaryWrite;
                var9 = var5.safetyState;
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var13, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 335:
                var8 = var5.premiumState;
                if(!var8) { _fun0056_ip = 337; continue _fun0056 }
case 338:
                var11 = _closure1_slot41;
                var10 = var11.internalBinaryWrite;
                var9 = var5.premiumState;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 9;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 337:
                var8 = var5.displayNameStyles;
                if(!var8) { _fun0056_ip = 339; continue _fun0056 }
case 340:
                var11 = _closure1_slot24;
                var10 = var11.internalBinaryWrite;
                var9 = var5.displayNameStyles;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 10;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 339:
                var8 = var5.storeCountry;
                if(!var8) { _fun0056_ip = 341; continue _fun0056 }
case 342:
                var11 = _closure1_slot42;
                var10 = var11.internalBinaryWrite;
                var9 = var5.storeCountry;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 11;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 341:
                var8 = var5.restrictedSchedule;
                if(!var8) { _fun0056_ip = 343; continue _fun0056 }
case 344:
                var11 = _closure1_slot28;
                var10 = var11.internalBinaryWrite;
                var9 = var5.restrictedSchedule;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 12;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 343:
                var8 = var5.ageAssuranceData;
                if(!var8) { _fun0056_ip = 345; continue _fun0056 }
case 346:
                var11 = _closure1_slot35;
                var10 = var11.internalBinaryWrite;
                var9 = var5.ageAssuranceData;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 13;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 345:
                var8 = var5.perks;
                if(!var8) { _fun0056_ip = 347; continue _fun0056 }
case 348:
                var11 = _closure1_slot46;
                var10 = var11.internalBinaryWrite;
                var9 = var5.perks;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 14;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 347:
                var8 = var5.badges;
                if(!var8) { _fun0056_ip = 349; continue _fun0056 }
case 350:
                var11 = _closure1_slot33;
                var10 = var11.internalBinaryWrite;
                var9 = var5.badges;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 15;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 349:
                var8 = var5.countryData;
                if(!var8) { _fun0056_ip = 351; continue _fun0056 }
case 352:
                var11 = _closure1_slot47;
                var10 = var11.internalBinaryWrite;
                var9 = var5.countryData;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 16;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 351:
                var9 = var5.isPendingRequiredAction;
                var8 = false;
                if(!(var8 !== var9)) { _fun0056_ip = 353; continue _fun0056 }
case 354:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var7];
                var9 = var10.bind(var4)(var9);
                var9 = var9.WireType;
                var10 = var9.Varint;
                var9 = 17;
                var11 = var11.bind(var1)(var9, var10);
                var10 = var11.bool;
                var9 = var5.isPendingRequiredAction;
                var9 = var10.bind(var11)(var9);
case 353:
                var9 = var5.anonymizationInfo;
                if(!var9) { _fun0056_ip = 355; continue _fun0056 }
case 356:
                var12 = _closure1_slot34;
                var11 = var12.internalBinaryWrite;
                var10 = var5.anonymizationInfo;
                var14 = var1.tag;
                var13 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var7];
                var9 = var13.bind(var4)(var9);
                var9 = var9.WireType;
                var13 = var9.LengthDelimited;
                var9 = 18;
                var13 = var14.bind(var1)(var9, var13);
                var9 = var13.fork;
                var9 = var9.bind(var13)();
                var10 = var11.bind(var12)(var10, var9, var3);
                var9 = var10.join;
                var9 = var9.bind(var10)();
case 355:
                var3 = var3.writeUnknownFields;
                if(!(var8 !== var3)) { _fun0056_ip = 357; continue _fun0056 }
case 358:
                if(!(var6 == var3)) { _fun0056_ip = 359; continue _fun0056 }
case 360:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 359:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 357:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var17 = var4 instanceof Object ? var4 : var5;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function AgeAssuranceData$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'estimated_date_of_birth', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(7);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'method', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot12;
                var1 = ['discord_protos.users.v1.AgeAssuranceMethod'];
                var1[1] = var2;
                var2 = 'AGE_ASSURANCE_METHOD_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'method_version', 'kind': 'scalar', 'T': 5};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'vendor', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot13;
                var1 = ['discord_protos.users.v1.AgeAssuranceVendor'];
                var1[1] = var2;
                var2 = 'AGE_ASSURANCE_VENDOR_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'verified_at', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'estimated_age_group', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot14;
                var1 = ['discord_protos.users.v1.AgeAssuranceGroup'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'is_regional_adult', 'kind': 'scalar', 'T': 8};
            var6[6] = var1;
            var1 = ['discord_protos.users.v1.AgeAssuranceData'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'method': 0, 'methodVersion': 0, 'vendor': 0, 'estimatedAgeGroup': 0, 'isRegionalAdult': false};
                var11 = false;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0057_ip = 11; continue _fun0057 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                var22 = arg1;
                var21 = arg3;
                var1 = arg4;
                var20 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0058_ip = 12; continue _fun0058 }
case 13:
                var2 = var20.create;
                var1 = var2.bind(var20)();
case 12:
                var3 = var22.pos;
                var2 = arg2;
                var19 = var3 + var2;
                var2 = var22.pos;
                var2 = var2 < var19;
                var18 = undefined;
                var16 = 9;
                var15 = 6;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 7;
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0058_ip = 361; continue _fun0058 }
case 88:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0058_ip = 362; continue _fun0058 }
case 89:
                if(!(var7 !== var31)) { _fun0058_ip = 363; continue _fun0058 }
case 91:
                if(!(var8 !== var31)) { _fun0058_ip = 69; continue _fun0058 }
case 93:
                if(!(var9 !== var31)) { _fun0058_ip = 177; continue _fun0058 }
case 95:
                if(!(var10 !== var31)) { _fun0058_ip = 364; continue _fun0058 }
case 97:
                if(!(var15 !== var31)) { _fun0058_ip = 365; continue _fun0058 }
case 99:
                if(!(var11 !== var31)) { _fun0058_ip = 65; continue _fun0058 }
case 100:
                var25 = var21.readUnknownField;
                if(!(var12 !== var25)) { _fun0058_ip = 265; continue _fun0058 }
case 200:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var13 !== var25)) { _fun0058_ip = 366; continue _fun0058 }
case 367:
                var27 = var25;
                if(!(var14 === var25)) { _fun0058_ip = 368; continue _fun0058 }
case 106:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var15];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 368:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0058_ip = 366; continue _fun0058;
case 265:
                var2 = global;
                var25 = var2.globalThis;
                var26 = var25.Error;
                var32 = var20.typeName;
                var2 = var2.HermesInternal;
                var28 = var2.concat;
                var37 = 'Unknown field ';
                var35 = ' (wire type ';
                var33 = ') for ';
                var36 = var31;
                var34 = var30;
                var36 = var37[var28](var36, var35, var34, var33, var32, var31);
                var25 = var26.prototype;
                var25 = Object.create(var25, {constructor: {value: var26}});
                var37 = var25;
                var2 = new var37[var26](var36, var35);
                var2 = var2 instanceof Object ? var2 : var25;
                throw var2;
case 65:
                var2 = var22.bool;
                var2 = var2.bind(var22)();
                var1['isRegionalAdult'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0058_ip = 366; continue _fun0058;
case 365:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['estimatedAgeGroup'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0058_ip = 366; continue _fun0058;
case 364:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.Timestamp;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.verifiedAt;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['verifiedAt'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0058_ip = 366; continue _fun0058;
case 177:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['vendor'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0058_ip = 366; continue _fun0058;
case 69:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['methodVersion'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0058_ip = 366; continue _fun0058;
case 363:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['method'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0058_ip = 366; continue _fun0058;
case 362:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.Timestamp;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.estimatedDateOfBirth;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['estimatedDateOfBirth'] = var2;
                var24 = var4;
                var23 = var3;
case 366:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0058_ip = 88; continue _fun0058 }
case 361:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.estimatedDateOfBirth;
                if(!var2) { _fun0059_ip = 216; continue _fun0059 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.estimatedDateOfBirth;
                var9 = var1.tag;
                var2 = 6;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 1;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 216:
                var2 = var5.method;
                var4 = 0;
                if(!(var4 !== var2)) { _fun0059_ip = 281; continue _fun0059 }
case 272:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 6;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var6);
                var2 = var2.WireType;
                var6 = var2.Varint;
                var2 = 2;
                var7 = var7.bind(var1)(var2, var6);
                var6 = var7.int32;
                var2 = var5.method;
                var2 = var6.bind(var7)(var2);
case 281:
                var2 = var5.methodVersion;
                if(!(var4 !== var2)) { _fun0059_ip = 282; continue _fun0059 }
case 293:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 6;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var6);
                var2 = var2.WireType;
                var6 = var2.Varint;
                var2 = 3;
                var7 = var7.bind(var1)(var2, var6);
                var6 = var7.int32;
                var2 = var5.methodVersion;
                var2 = var6.bind(var7)(var2);
case 282:
                var2 = var5.vendor;
                if(!(var4 !== var2)) { _fun0059_ip = 369; continue _fun0059 }
case 370:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 6;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var6);
                var2 = var2.WireType;
                var6 = var2.Varint;
                var2 = 4;
                var7 = var7.bind(var1)(var2, var6);
                var6 = var7.int32;
                var2 = var5.vendor;
                var2 = var6.bind(var7)(var2);
case 369:
                var2 = var5.verifiedAt;
                if(!var2) { _fun0059_ip = 371; continue _fun0059 }
case 101:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 9;
                var2 = var12[var2];
                var9 = undefined;
                var2 = var11.bind(var9)(var2);
                var8 = var2.Timestamp;
                var7 = var8.internalBinaryWrite;
                var6 = var5.verifiedAt;
                var10 = var1.tag;
                var2 = 6;
                var2 = var12[var2];
                var2 = var11.bind(var9)(var2);
                var2 = var2.WireType;
                var9 = var2.LengthDelimited;
                var2 = 5;
                var9 = var10.bind(var1)(var2, var9);
                var2 = var9.fork;
                var2 = var2.bind(var9)();
                var6 = var7.bind(var8)(var6, var2, var3);
                var2 = var6.join;
                var2 = var2.bind(var6)();
case 371:
                var2 = var5.estimatedAgeGroup;
                if(!(var4 !== var2)) { _fun0059_ip = 372; continue _fun0059 }
case 207:
                var6 = var1.tag;
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 6;
                var7 = var2[var4];
                var2 = undefined;
                var2 = var8.bind(var2)(var7);
                var2 = var2.WireType;
                var2 = var2.Varint;
                var6 = var6.bind(var1)(var4, var2);
                var4 = var6.int32;
                var2 = var5.estimatedAgeGroup;
                var2 = var4.bind(var6)(var2);
case 372:
                var4 = var5.isRegionalAdult;
                var2 = false;
                if(!(var2 !== var4)) { _fun0059_ip = 373; continue _fun0059 }
case 374:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 6;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var6);
                var4 = var4.WireType;
                var6 = var4.Varint;
                var4 = 7;
                var7 = var7.bind(var1)(var4, var6);
                var6 = var7.bool;
                var4 = var5.isRegionalAdult;
                var4 = var6.bind(var7)(var4);
case 373:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0059_ip = 375; continue _fun0059 }
case 119:
                var2 = 1;
                if(!(var2 == var4)) { _fun0059_ip = 376; continue _fun0059 }
case 203:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 376:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 375:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var16 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot35 = var16;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function LinkedUser$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(6);
            var1 = {'no': 1, 'name': 'user_id', 'kind': 'scalar', 'T': 6};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'link_type', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot15;
                var1 = ['discord_protos.users.v1.UserLinkType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'link_status', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot16;
                var1 = ['discord_protos.users.v1.UserLinkStatus'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'requestor_id', 'kind': 'scalar', 'T': 6};
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'created_at', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'updated_at', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var7;
            var6[5] = var1;
            var1 = ['discord_protos.users.v1.LinkedUser'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'userId': '0', 'linkType': 0, 'linkStatus': 0, 'requestorId': '0'};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0060_ip = 377; continue _fun0060 }
case 15:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 377:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0061_ip = 12; continue _fun0061 }
case 13:
                var2 = var19.create;
                var1 = var2.bind(var19)();
case 12:
                var3 = var21.pos;
                var2 = arg2;
                var18 = var3 + var2;
                var2 = var21.pos;
                var2 = var2 < var18;
                var17 = undefined;
                var15 = 9;
                var14 = 6;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0061_ip = 71; continue _fun0061 }
case 378:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var7);
                var30 = var2[var5];
                var29 = var2[var6];
                if(!(var6 !== var30)) { _fun0061_ip = 379; continue _fun0061 }
case 202:
                if(!(var7 !== var30)) { _fun0061_ip = 205; continue _fun0061 }
case 272:
                if(!(var8 !== var30)) { _fun0061_ip = 380; continue _fun0061 }
case 254:
                if(!(var9 !== var30)) { _fun0061_ip = 381; continue _fun0061 }
case 382:
                if(!(var10 !== var30)) { _fun0061_ip = 289; continue _fun0061 }
case 212:
                if(!(var14 !== var30)) { _fun0061_ip = 383; continue _fun0061 }
case 149:
                var24 = var20.readUnknownField;
                if(!(var11 !== var24)) { _fun0061_ip = 384; continue _fun0061 }
case 100:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var29);
                var23 = var24;
                var22 = var2;
                if(!(var12 !== var24)) { _fun0061_ip = 385; continue _fun0061 }
case 271:
                var26 = var24;
                if(!(var13 === var24)) { _fun0061_ip = 386; continue _fun0061 }
case 264:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var14];
                var25 = var27.bind(var17)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 386:
                var35 = var19.typeName;
                var36 = undefined;
                var34 = var1;
                var33 = var30;
                var32 = var29;
                var31 = var2;
                var25 = var36[var26](var35, var34, var33, var32, var31, var30);
                var23 = var24;
                var22 = var2;
                _fun0061_ip = 385; continue _fun0061;
case 384:
                var2 = global;
                var24 = var2.globalThis;
                var25 = var24.Error;
                var31 = var19.typeName;
                var2 = var2.HermesInternal;
                var27 = var2.concat;
                var36 = 'Unknown field ';
                var34 = ' (wire type ';
                var32 = ') for ';
                var35 = var30;
                var33 = var29;
                var35 = var36[var27](var35, var34, var33, var32, var31, var30);
                var24 = var25.prototype;
                var24 = Object.create(var24, {constructor: {value: var25}});
                var36 = var24;
                var2 = new var36[var25](var35, var34);
                var2 = var2 instanceof Object ? var2 : var24;
                throw var2;
case 383:
                var24 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var24.bind(var17)(var2);
                var26 = var2.Timestamp;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.updatedAt;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['updatedAt'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0061_ip = 385; continue _fun0061;
case 289:
                var24 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var24.bind(var17)(var2);
                var26 = var2.Timestamp;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.createdAt;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['createdAt'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0061_ip = 385; continue _fun0061;
case 381:
                var2 = var21.fixed64;
                var24 = var2.bind(var21)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var1['requestorId'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0061_ip = 385; continue _fun0061;
case 380:
                var2 = var21.int32;
                var2 = var2.bind(var21)();
                var1['linkStatus'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0061_ip = 385; continue _fun0061;
case 205:
                var2 = var21.int32;
                var2 = var2.bind(var21)();
                var1['linkType'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0061_ip = 385; continue _fun0061;
case 379:
                var2 = var21.fixed64;
                var24 = var2.bind(var21)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var1['userId'] = var2;
                var23 = var4;
                var22 = var3;
case 385:
                var2 = var21.pos;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0061_ip = 378; continue _fun0061 }
case 71:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.userId;
                var4 = '0';
                if(!(var4 !== var3)) { _fun0062_ip = 59; continue _fun0062 }
case 60:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Bit64;
                var3 = 1;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.fixed64;
                var3 = var5.userId;
                var3 = var6.bind(var7)(var3);
case 59:
                var3 = var5.linkType;
                var6 = 0;
                if(!(var6 !== var3)) { _fun0062_ip = 61; continue _fun0062 }
case 224:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 6;
                var7 = var7[var3];
                var3 = undefined;
                var3 = var9.bind(var3)(var7);
                var3 = var3.WireType;
                var7 = var3.Varint;
                var3 = 2;
                var8 = var8.bind(var1)(var3, var7);
                var7 = var8.int32;
                var3 = var5.linkType;
                var3 = var7.bind(var8)(var3);
case 61:
                var3 = var5.linkStatus;
                if(!(var6 !== var3)) { _fun0062_ip = 387; continue _fun0062 }
case 64:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 6;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 3;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.int32;
                var3 = var5.linkStatus;
                var3 = var6.bind(var7)(var3);
case 387:
                var3 = var5.requestorId;
                if(!(var4 !== var3)) { _fun0062_ip = 283; continue _fun0062 }
case 294:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Bit64;
                var3 = 4;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.fixed64;
                var3 = var5.requestorId;
                var3 = var4.bind(var6)(var3);
case 283:
                var3 = var5.createdAt;
                if(!var3) { _fun0062_ip = 67; continue _fun0062 }
case 388:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.createdAt;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 5;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 67:
                var3 = var5.updatedAt;
                if(!var3) { _fun0062_ip = 389; continue _fun0062 }
case 390:
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var4 = 9;
                var4 = var3[var4];
                var10 = undefined;
                var4 = var11.bind(var10)(var4);
                var7 = var4.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.updatedAt;
                var9 = var1.tag;
                var8 = 6;
                var3 = var3[var8];
                var3 = var11.bind(var10)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var8 = var9.bind(var1)(var8, var3);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 389:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0062_ip = 213; continue _fun0062 }
case 391:
                var2 = 1;
                if(!(var2 == var4)) { _fun0062_ip = 392; continue _fun0062 }
case 180:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 392:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 213:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var15 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot36 = var15;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function RateLimitData$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'limit_expiry', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.RateLimitData'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0063_ip = 190; continue _fun0063 }
case 191:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 190:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0064_ip = 12; continue _fun0064 }
case 13:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 12:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0064_ip = 268; continue _fun0064 }
case 29:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0064_ip = 269; continue _fun0064 }
case 124:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0064_ip = 270; continue _fun0064 }
case 18:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0064_ip = 113; continue _fun0064 }
case 24:
                var23 = var21;
                if(!(var10 === var21)) { _fun0064_ip = 43; continue _fun0064 }
case 261:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 43:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0064_ip = 113; continue _fun0064;
case 270:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 269:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.Timestamp;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.limitExpiry;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['limitExpiry'] = var2;
                var20 = var4;
                var19 = var3;
case 113:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0064_ip = 29; continue _fun0064 }
case 268:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.limitExpiry;
                if(!var3) { _fun0065_ip = 216; continue _fun0065 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.limitExpiry;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 216:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0065_ip = 271; continue _fun0065 }
case 272:
                var2 = 1;
                if(!(var2 == var4)) { _fun0065_ip = 64; continue _fun0065 }
case 254:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 64:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 271:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var14 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot37 = var14;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function FeatureLimits$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'map', 'kind': 'map', 'K': 13};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot37;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.FeatureLimits'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['map'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0066_ip = 194; continue _fun0066 }
case 285:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 194:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0067_ip = 12; continue _fun0067 }
case 13:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 12:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0067_ip = 393; continue _fun0067 }
case 192:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0067_ip = 394; continue _fun0067 }
case 194:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0067_ip = 321; continue _fun0067 }
case 195:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0067_ip = 395; continue _fun0067 }
case 196:
                var22 = var20;
                if(!(var10 === var20)) { _fun0067_ip = 197; continue _fun0067 }
case 198:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 197:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0067_ip = 395; continue _fun0067;
case 321:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 394:
                var20 = var15.binaryReadMap1;
                var2 = var1.map;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 395:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0067_ip = 192; continue _fun0067 }
case 393:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var5 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var4 = 0;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var3 = undefined;
                if(!var5) { _fun0068_ip = 135; continue _fun0068 }
case 317:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0068_ip = 99; continue _fun0068 }
case 4:
                if(!(var10 !== var5)) { _fun0068_ip = 318; continue _fun0068 }
case 136:
                var5 = global;
                var5 = var5.globalThis;
                var15 = var5.Error;
                var5 = var15.prototype;
                var14 = Object.create(var5, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.users.v1.FeatureLimits.map';
                var19 = var14;
                var5 = new var19[var15](var18, var17);
                var5 = var5 instanceof Object ? var5 : var14;
                throw var5;
case 318:
                var15 = _closure1_slot37;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0068_ip = 64; continue _fun0068;
case 99:
                var5 = var13.uint32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 64:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0068_ip = 317; continue _fun0068 }
case 135:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0068_ip = 106; continue _fun0068 }
case 320:
                var4 = var6;
case 106:
                if(!(var5 == var3)) { _fun0068_ip = 260; continue _fun0068 }
case 321:
                var5 = _closure1_slot37;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 260:
                var2 = arg1;
                var2[var4] = var3;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var12 = global;
                var6 = var12.Object;
                var4 = var6.keys;
                var2 = var5.map;
                var11 = var4.bind(var6)(var2);
                var2 = var11.length;
                var10 = 0;
                var8 = var10 < var2;
                var7 = 6;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0069_ip = 280; continue _fun0069 }
case 396:
                var15 = var11[var10];
                var16 = var1.tag;
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var13 = var8[var7];
                var13 = var14.bind(var4)(var13);
                var13 = var13.WireType;
                var13 = var13.LengthDelimited;
                var16 = var16.bind(var1)(var6, var13);
                var13 = var16.fork;
                var17 = var13.bind(var16)();
                var16 = var17.tag;
                var13 = var8[var7];
                var13 = var14.bind(var4)(var13);
                var13 = var13.WireType;
                var13 = var13.Varint;
                var17 = var16.bind(var17)(var6, var13);
                var16 = var17.uint32;
                var13 = var12.parseInt;
                var13 = var13.bind(var4)(var15);
                var13 = var16.bind(var17)(var13);
                var13 = var1.tag;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var13 = var13.bind(var1)(var9, var8);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var14 = _closure1_slot37;
                var13 = var14.internalBinaryWrite;
                var8 = var5.map;
                var8 = var8[var15];
                var8 = var13.bind(var14)(var8, var1, var3);
                var8 = var1.join;
                var13 = var8.bind(var1)();
                var8 = var13.join;
                var8 = var8.bind(var13)();
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0069_ip = 396; continue _fun0069 }
case 280:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0069_ip = 21; continue _fun0069 }
case 282:
                if(!(var6 == var3)) { _fun0069_ip = 397; continue _fun0069 }
case 398:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 397:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 21:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var13 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot38 = var13;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SafetyFlag$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'flag_expiry', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.SafetyFlag'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0070_ip = 190; continue _fun0070 }
case 191:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 190:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0071_ip = 12; continue _fun0071 }
case 13:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 12:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0071_ip = 268; continue _fun0071 }
case 29:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0071_ip = 269; continue _fun0071 }
case 124:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0071_ip = 270; continue _fun0071 }
case 18:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0071_ip = 113; continue _fun0071 }
case 24:
                var23 = var21;
                if(!(var10 === var21)) { _fun0071_ip = 43; continue _fun0071 }
case 261:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 43:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0071_ip = 113; continue _fun0071;
case 270:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 269:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.Timestamp;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.flagExpiry;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['flagExpiry'] = var2;
                var20 = var4;
                var19 = var3;
case 113:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0071_ip = 29; continue _fun0071 }
case 268:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.flagExpiry;
                if(!var3) { _fun0072_ip = 216; continue _fun0072 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.flagExpiry;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 216:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0072_ip = 271; continue _fun0072 }
case 272:
                var2 = 1;
                if(!(var2 == var4)) { _fun0072_ip = 64; continue _fun0072 }
case 254:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 64:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 271:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var12 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot39 = var12;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildShardingConfig$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'shards', 'kind': 'scalar', 'repeat': 1, 'T': 5};
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.GuildShardingConfig'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['shards'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0073_ip = 124; continue _fun0073 }
case 125:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 124:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0074_ip = 12; continue _fun0074 }
case 13:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 12:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 2;
                var7 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0074_ip = 399; continue _fun0074 }
case 400:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0074_ip = 401; continue _fun0074 }
case 377:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0074_ip = 148; continue _fun0074 }
case 202:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0074_ip = 402; continue _fun0074 }
case 230:
                var25 = var23;
                if(!(var11 === var23)) { _fun0074_ip = 403; continue _fun0074 }
case 30:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 403:
                var33 = var16.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var22;
                var29 = var2;
                var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                _fun0074_ip = 402; continue _fun0074;
case 148:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var29 = var16.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var22;
                var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var34 = var23;
                var2 = new var34[var24](var33, var32);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 401:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0074_ip = 404; continue _fun0074 }
case 393:
                var23 = var1.shards;
                var22 = var23.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0074_ip = 402; continue _fun0074;
case 404:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0074_ip = 402; continue _fun0074 }
case 237:
                var24 = var1.shards;
                var23 = var24.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0074_ip = 237; continue _fun0074 }
case 402:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0074_ip = 400; continue _fun0074 }
case 399:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.shards;
                var2 = var2.length;
                if(!var2) { _fun0075_ip = 196; continue _fun0075 }
case 134:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 1;
                var3 = var4.bind(var1)(var2, var3);
                var2 = var3.fork;
                var2 = var2.bind(var3)();
                var2 = var5.shards;
                var2 = var2.length;
                var3 = 0;
                var2 = var3 < var2;
                if(!var2) { _fun0075_ip = 169; continue _fun0075 }
case 224:
                var4 = var1.int32;
                var2 = var5.shards;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.shards;
                var2 = var2.length;
                if(var3 < var2) { _fun0075_ip = 224; continue _fun0075 }
case 169:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 196:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0075_ip = 319; continue _fun0075 }
case 182:
                var2 = 1;
                if(!(var2 == var4)) { _fun0075_ip = 138; continue _fun0075 }
case 33:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 138:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 319:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var11 = var4 instanceof Object ? var4 : var5;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function QuestMetadata$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'quests_completed', 'kind': 'scalar', 'T': 13};
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.QuestMetadata'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = 0;
                var1['questsCompleted'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0076_ip = 405; continue _fun0076 }
case 406:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 405:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0077_ip = 12; continue _fun0077 }
case 13:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 12:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0077_ip = 39; continue _fun0077 }
case 192:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0077_ip = 394; continue _fun0077 }
case 194:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0077_ip = 321; continue _fun0077 }
case 195:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0077_ip = 45; continue _fun0077 }
case 196:
                var22 = var20;
                if(!(var10 === var20)) { _fun0077_ip = 197; continue _fun0077 }
case 198:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 197:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0077_ip = 45; continue _fun0077;
case 321:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 394:
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var1['questsCompleted'] = var2;
                var19 = var4;
                var18 = var3;
case 45:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0077_ip = 192; continue _fun0077 }
case 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.questsCompleted;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0078_ip = 29; continue _fun0078 }
case 13:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.uint32;
                var2 = var5.questsCompleted;
                var2 = var3.bind(var4)(var2);
case 29:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0078_ip = 30; continue _fun0078 }
case 161:
                var2 = 1;
                if(!(var2 == var4)) { _fun0078_ip = 407; continue _fun0078 }
case 408:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 407:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 30:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var10 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot40 = var10;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PremiumState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'premium_source', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot17;
                var1 = ['discord_protos.users.v1.PremiumSource'];
                var1[1] = var2;
                var2 = 'PREMIUM_SOURCE_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(3);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'premium_subscription_type', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot18;
                var1 = ['discord_protos.users.v1.PremiumSubscriptionType'];
                var1[1] = var2;
                var2 = 'PREMIUM_SUBSCRIPTION_TYPE_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'premium_subscription_group_role', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot19;
                var1 = ['discord_protos.users.v1.PremiumSubscriptionGroupRole'];
                var1[1] = var2;
                var2 = 'PREMIUM_SUBSCRIPTION_GROUP_ROLE_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.users.v1.PremiumState'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'premiumSource': 0, 'premiumSubscriptionType': 0, 'premiumSubscriptionGroupRole': 0};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0079_ip = 11; continue _fun0079 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0080_ip = 12; continue _fun0080 }
case 13:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 12:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 6;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0080_ip = 209; continue _fun0080 }
case 29:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0080_ip = 409; continue _fun0080 }
case 124:
                if(!(var7 !== var27)) { _fun0080_ip = 410; continue _fun0080 }
case 195:
                if(!(var8 !== var27)) { _fun0080_ip = 275; continue _fun0080 }
case 41:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0080_ip = 276; continue _fun0080 }
case 22:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0080_ip = 139; continue _fun0080 }
case 263:
                var23 = var21;
                if(!(var11 === var21)) { _fun0080_ip = 256; continue _fun0080 }
case 278:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 256:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0080_ip = 139; continue _fun0080;
case 276:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 275:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['premiumSubscriptionGroupRole'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0080_ip = 139; continue _fun0080;
case 410:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['premiumSubscriptionType'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0080_ip = 139; continue _fun0080;
case 409:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['premiumSource'] = var2;
                var20 = var4;
                var19 = var3;
case 139:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0080_ip = 29; continue _fun0080 }
case 209:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.premiumSource;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0081_ip = 29; continue _fun0081 }
case 13:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.premiumSource;
                var2 = var4.bind(var6)(var2);
case 29:
                var2 = var5.premiumSubscriptionType;
                if(!(var3 !== var2)) { _fun0081_ip = 30; continue _fun0081 }
case 31:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 2;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.premiumSubscriptionType;
                var2 = var4.bind(var6)(var2);
case 30:
                var2 = var5.premiumSubscriptionGroupRole;
                if(!(var3 !== var2)) { _fun0081_ip = 32; continue _fun0081 }
case 33:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 3;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.premiumSubscriptionGroupRole;
                var2 = var3.bind(var4)(var2);
case 32:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0081_ip = 34; continue _fun0081 }
case 411:
                var2 = 1;
                if(!(var2 == var4)) { _fun0081_ip = 394; continue _fun0081 }
case 241:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 394:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 34:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var9 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot41 = var9;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function StoreCountry$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(2);
            var1 = {'no': 1, 'name': 'country', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'set_at', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.users.v1.StoreCountry'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = '';
                var1['country'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0082_ip = 124; continue _fun0082 }
case 125:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 124:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0083_ip = 12; continue _fun0083 }
case 13:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 12:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0083_ip = 25; continue _fun0083 }
case 29:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0083_ip = 229; continue _fun0083 }
case 124:
                if(!(var7 !== var27)) { _fun0083_ip = 259; continue _fun0083 }
case 195:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0083_ip = 260; continue _fun0083 }
case 20:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0083_ip = 412; continue _fun0083 }
case 261:
                var23 = var21;
                if(!(var10 === var21)) { _fun0083_ip = 262; continue _fun0083 }
case 263:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 262:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0083_ip = 412; continue _fun0083;
case 260:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 259:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.Timestamp;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.setAt;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['setAt'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0083_ip = 412; continue _fun0083;
case 229:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['country'] = var2;
                var20 = var4;
                var19 = var3;
case 412:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0083_ip = 29; continue _fun0083 }
case 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var4 = var5.country;
                var3 = '';
                if(!(var3 !== var4)) { _fun0084_ip = 15; continue _fun0084 }
case 134:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.string;
                var3 = var5.country;
                var3 = var4.bind(var6)(var3);
case 15:
                var3 = var5.setAt;
                if(!var3) { _fun0084_ip = 281; continue _fun0084 }
case 88:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.setAt;
                var9 = var1.tag;
                var3 = 6;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 281:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0084_ip = 413; continue _fun0084 }
case 106:
                var2 = 1;
                if(!(var2 == var4)) { _fun0084_ip = 414; continue _fun0084 }
case 108:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 414:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 413:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var8 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot42 = var8;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PerkConfig$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var1 = {'no': 1, 'name': 'source', 'kind': 'enum', 'repeat': 1};
            var6 = function T() {
                var2 = _closure1_slot20;
                var1 = ['discord_protos.users.v1.PerkSource'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(3);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'increased_file_upload_size', 'kind': 'message', 'oneof': 'kind'};
            var8 = function T() {
                var1 = _closure1_slot44;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'increased_guild_limit', 'kind': 'message', 'oneof': 'kind'};
            var7 = function T() {
                var1 = _closure1_slot45;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.users.v1.PerkConfig'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['source'] = var2;
                var2 = {};
                var6 = undefined;
                var2['oneofKind'] = var6;
                var1['kind'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0085_ip = 18; continue _fun0085 }
case 415:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 18:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0086_ip = 12; continue _fun0086 }
case 13:
                var2 = var19.create;
                var1 = var2.bind(var19)();
case 12:
                var3 = var21.pos;
                var2 = arg2;
                var18 = var3 + var2;
                var2 = var21.pos;
                var2 = var2 < var18;
                var17 = undefined;
                var15 = 6;
                var14 = 'increasedFileUploadSize';
                var13 = 'increasedGuildLimit';
                var12 = true;
                var11 = false;
                var10 = 'throw';
                var9 = 3;
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0086_ip = 416; continue _fun0086 }
case 31:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var8);
                var31 = var2[var6];
                var25 = var2[var7];
                if(!(var7 !== var31)) { _fun0086_ip = 417; continue _fun0086 }
case 18:
                if(!(var8 !== var31)) { _fun0086_ip = 418; continue _fun0086 }
case 20:
                if(!(var9 !== var31)) { _fun0086_ip = 419; continue _fun0086 }
case 22:
                var26 = var20.readUnknownField;
                if(!(var10 !== var26)) { _fun0086_ip = 411; continue _fun0086 }
case 24:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var25);
                var24 = var5;
                var23 = var26;
                var22 = var2;
                if(!(var11 !== var26)) { _fun0086_ip = 119; continue _fun0086 }
case 102:
                var28 = var26;
                if(!(var12 === var26)) { _fun0086_ip = 214; continue _fun0086 }
case 215:
                var29 = _closure1_slot0;
                var27 = _closure1_slot1;
                var27 = var27[var15];
                var27 = var29.bind(var17)(var27);
                var27 = var27.UnknownFieldHandler;
                var28 = var27.onRead;
case 214:
                var36 = var19.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var25;
                var32 = var2;
                var27 = var37[var28](var36, var35, var34, var33, var32, var31);
                var24 = var5;
                var23 = var26;
                var22 = var2;
                _fun0086_ip = 119; continue _fun0086;
case 411:
                var2 = global;
                var26 = var2.globalThis;
                var27 = var26.Error;
                var32 = var19.typeName;
                var2 = var2.HermesInternal;
                var29 = var2.concat;
                var37 = 'Unknown field ';
                var35 = ' (wire type ';
                var33 = ') for ';
                var36 = var31;
                var34 = var25;
                var36 = var37[var29](var36, var35, var34, var33, var32, var31);
                var26 = var27.prototype;
                var26 = Object.create(var26, {constructor: {value: var27}});
                var37 = var26;
                var2 = new var37[var27](var36, var35);
                var2 = var2 instanceof Object ? var2 : var26;
                throw var2;
case 419:
                var2 = {};
                var2['oneofKind'] = var13;
                var29 = _closure1_slot45;
                var28 = var29.internalBinaryRead;
                var26 = var21.uint32;
                var35 = var26.bind(var21)();
                var26 = var1.kind;
                var33 = var26.increasedGuildLimit;
                var37 = var29;
                var36 = var21;
                var34 = var20;
                var26 = var37[var28](var36, var35, var34, var33, var32);
                var2['increasedGuildLimit'] = var26;
                var1['kind'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0086_ip = 119; continue _fun0086;
case 418:
                var2 = {};
                var2['oneofKind'] = var14;
                var29 = _closure1_slot44;
                var28 = var29.internalBinaryRead;
                var26 = var21.uint32;
                var35 = var26.bind(var21)();
                var26 = var1.kind;
                var33 = var26.increasedFileUploadSize;
                var37 = var29;
                var36 = var21;
                var34 = var20;
                var26 = var37[var28](var36, var35, var34, var33, var32);
                var2['increasedFileUploadSize'] = var26;
                var1['kind'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0086_ip = 119; continue _fun0086;
case 417:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var26.bind(var17)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var25 !== var2)) { _fun0086_ip = 420; continue _fun0086 }
case 421:
                var26 = var1.source;
                var25 = var26.push;
                var2 = var21.int32;
                var2 = var2.bind(var21)();
                var2 = var25.bind(var26)(var2);
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0086_ip = 119; continue _fun0086;
case 420:
                var2 = var21.int32;
                var25 = var2.bind(var21)();
                var2 = var21.pos;
                var25 = var25 + var2;
                var2 = var21.pos;
                var23 = var4;
                var22 = var3;
                var24 = var25;
                if(!(var2 < var24)) { _fun0086_ip = 119; continue _fun0086 }
case 422:
                var27 = var1.source;
                var26 = var27.push;
                var2 = var21.int32;
                var2 = var2.bind(var21)();
                var2 = var26.bind(var27)(var2);
                var2 = var21.pos;
                var24 = var25;
                var23 = var4;
                var22 = var3;
                if(var2 < var25) { _fun0086_ip = 422; continue _fun0086 }
case 119:
                var2 = var21.pos;
                var5 = var24;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0086_ip = 31; continue _fun0086 }
case 416:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.source;
                var3 = var3.length;
                if(!var3) { _fun0087_ip = 382; continue _fun0087 }
case 423:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 1;
                var4 = var6.bind(var1)(var3, var4);
                var3 = var4.fork;
                var3 = var3.bind(var4)();
                var3 = var5.source;
                var3 = var3.length;
                var4 = 0;
                var3 = var4 < var3;
                if(!var3) { _fun0087_ip = 424; continue _fun0087 }
case 425:
                var6 = var1.int32;
                var3 = var5.source;
                var3 = var3[var4];
                var3 = var6.bind(var1)(var3);
                var4 = var4 + 1;
                var3 = var5.source;
                var3 = var3.length;
                if(var4 < var3) { _fun0087_ip = 425; continue _fun0087 }
case 424:
                var3 = var1.join;
                var3 = var3.bind(var1)();
case 382:
                var3 = var5.kind;
                var4 = var3.oneofKind;
                var3 = 'increasedFileUploadSize';
                if(!(var3 === var4)) { _fun0087_ip = 44; continue _fun0087 }
case 426:
                var7 = _closure1_slot44;
                var6 = var7.internalBinaryWrite;
                var4 = var5.kind;
                var4 = var4.increasedFileUploadSize;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 44:
                var3 = var5.kind;
                var4 = var3.oneofKind;
                var3 = 'increasedGuildLimit';
                if(!(var3 === var4)) { _fun0087_ip = 427; continue _fun0087 }
case 398:
                var7 = _closure1_slot45;
                var6 = var7.internalBinaryWrite;
                var4 = var5.kind;
                var4 = var4.increasedGuildLimit;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 427:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0087_ip = 428; continue _fun0087 }
case 429:
                var2 = 1;
                if(!(var2 == var4)) { _fun0087_ip = 430; continue _fun0087 }
case 156:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 430:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 428:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var7 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot43 = var7;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PerkConfigIncreasedFileUploadSize$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'max_size', 'kind': 'scalar', 'T': 4};
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.PerkConfigIncreasedFileUploadSize'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = '0';
                var1['maxSize'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0088_ip = 201; continue _fun0088 }
case 204:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 201:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0089_ip = 12; continue _fun0089 }
case 13:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 12:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0089_ip = 431; continue _fun0089 }
case 192:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0089_ip = 394; continue _fun0089 }
case 194:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0089_ip = 321; continue _fun0089 }
case 195:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0089_ip = 432; continue _fun0089 }
case 196:
                var22 = var20;
                if(!(var10 === var20)) { _fun0089_ip = 197; continue _fun0089 }
case 198:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 197:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0089_ip = 432; continue _fun0089;
case 321:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 394:
                var2 = var17.uint64;
                var20 = var2.bind(var17)();
                var2 = var20.toString;
                var2 = var2.bind(var20)();
                var1['maxSize'] = var2;
                var19 = var4;
                var18 = var3;
case 432:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0089_ip = 192; continue _fun0089 }
case 431:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.maxSize;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0090_ip = 125; continue _fun0090 }
case 433:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.uint64;
                var2 = var5.maxSize;
                var2 = var3.bind(var4)(var2);
case 125:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0090_ip = 99; continue _fun0090 }
case 62:
                var2 = 1;
                if(!(var2 == var4)) { _fun0090_ip = 171; continue _fun0090 }
case 434:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 171:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 99:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var6 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot44 = var6;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PerkConfigIncreasedGuildLimit$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'max_guilds', 'kind': 'scalar', 'T': 13};
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.PerkConfigIncreasedGuildLimit'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = 0;
                var1['maxGuilds'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0091_ip = 405; continue _fun0091 }
case 406:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 405:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0092_ip = 12; continue _fun0092 }
case 13:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 12:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 6;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0092_ip = 39; continue _fun0092 }
case 192:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0092_ip = 394; continue _fun0092 }
case 194:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0092_ip = 321; continue _fun0092 }
case 195:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0092_ip = 45; continue _fun0092 }
case 196:
                var22 = var20;
                if(!(var10 === var20)) { _fun0092_ip = 197; continue _fun0092 }
case 198:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 197:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0092_ip = 45; continue _fun0092;
case 321:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 394:
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var1['maxGuilds'] = var2;
                var19 = var4;
                var18 = var3;
case 45:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0092_ip = 192; continue _fun0092 }
case 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.maxGuilds;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0093_ip = 29; continue _fun0093 }
case 13:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.uint32;
                var2 = var5.maxGuilds;
                var2 = var3.bind(var4)(var2);
case 29:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0093_ip = 30; continue _fun0093 }
case 161:
                var2 = 1;
                if(!(var2 == var4)) { _fun0093_ip = 407; continue _fun0093 }
case 408:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 407:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 30:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var61 = var5;
    var4 = new var61[var4](var60);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot45 = var5;
    var4 = var55[var2];
    var4 = var54.bind(var1)(var4);
    var57 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Perks$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(4);
            var1 = {'no': 1, 'name': 'active_perks_bitmask', 'kind': 'scalar', 'repeat': 1, 'T': 4};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'config_by_perk', 'kind': 'map', 'K': 13};
            var8 = {};
            var9 = 'message';
            var8['kind'] = var9;
            var9 = function T() {
                var1 = _closure1_slot43;
                return var1;
            };
            var8['T'] = var9;
            var1['V'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'rules_version', 'kind': 'scalar', 'T': 13};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'updated_at', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var7;
            var6[3] = var1;
            var1 = ['discord_protos.users.v1.Perks'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['activePerksBitmask'] = var2;
                var2 = {};
                var1['configByPerk'] = var2;
                var2 = 0;
                var1['rulesVersion'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0094_ip = 41; continue _fun0094 }
case 425:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 41:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
case 0:
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0095_ip = 12; continue _fun0095 }
case 13:
                var2 = var19.create;
                var1 = var2.bind(var19)();
case 12:
                var3 = var21.pos;
                var2 = arg2;
                var18 = var3 + var2;
                var2 = var21.pos;
                var2 = var2 < var18;
                var17 = undefined;
                var15 = 6;
                var14 = 9;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 4;
                var9 = 3;
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0095_ip = 435; continue _fun0095 }
case 163:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var8);
                var31 = var2[var6];
                var25 = var2[var7];
                if(!(var7 !== var31)) { _fun0095_ip = 207; continue _fun0095 }
case 165:
                if(!(var8 !== var31)) { _fun0095_ip = 70; continue _fun0095 }
case 167:
                if(!(var9 !== var31)) { _fun0095_ip = 168; continue _fun0095 }
case 169:
                if(!(var10 !== var31)) { _fun0095_ip = 170; continue _fun0095 }
case 171:
                var26 = var20.readUnknownField;
                if(!(var11 !== var26)) { _fun0095_ip = 172; continue _fun0095 }
case 173:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var25);
                var24 = var5;
                var23 = var26;
                var22 = var2;
                if(!(var12 !== var26)) { _fun0095_ip = 361; continue _fun0095 }
case 175:
                var28 = var26;
                if(!(var13 === var26)) { _fun0095_ip = 108; continue _fun0095 }
case 176:
                var29 = _closure1_slot0;
                var27 = _closure1_slot1;
                var27 = var27[var15];
                var27 = var29.bind(var17)(var27);
                var27 = var27.UnknownFieldHandler;
                var28 = var27.onRead;
case 108:
                var36 = var19.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var25;
                var32 = var2;
                var27 = var37[var28](var36, var35, var34, var33, var32, var31);
                var24 = var5;
                var23 = var26;
                var22 = var2;
                _fun0095_ip = 361; continue _fun0095;
case 172:
                var2 = global;
                var26 = var2.globalThis;
                var27 = var26.Error;
                var32 = var19.typeName;
                var2 = var2.HermesInternal;
                var29 = var2.concat;
                var37 = 'Unknown field ';
                var35 = ' (wire type ';
                var33 = ') for ';
                var36 = var31;
                var34 = var25;
                var36 = var37[var29](var36, var35, var34, var33, var32, var31);
                var26 = var27.prototype;
                var26 = Object.create(var26, {constructor: {value: var27}});
                var37 = var26;
                var2 = new var37[var27](var36, var35);
                var2 = var2 instanceof Object ? var2 : var26;
                throw var2;
case 170:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var14];
                var2 = var26.bind(var17)(var2);
                var28 = var2.Timestamp;
                var27 = var28.internalBinaryRead;
                var2 = var21.uint32;
                var35 = var2.bind(var21)();
                var33 = var1.updatedAt;
                var37 = var28;
                var36 = var21;
                var34 = var20;
                var2 = var37[var27](var36, var35, var34, var33, var32);
                var1['updatedAt'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0095_ip = 361; continue _fun0095;
case 168:
                var2 = var21.uint32;
                var2 = var2.bind(var21)();
                var1['rulesVersion'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0095_ip = 361; continue _fun0095;
case 70:
                var26 = var19.binaryReadMap2;
                var2 = var1.configByPerk;
                var2 = var26.bind(var19)(var2, var21, var20);
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0095_ip = 361; continue _fun0095;
case 207:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var26.bind(var17)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var25 !== var2)) { _fun0095_ip = 146; continue _fun0095 }
case 69:
                var26 = var1.activePerksBitmask;
                var25 = var26.push;
                var2 = var21.uint64;
                var27 = var2.bind(var21)();
                var2 = var27.toString;
                var2 = var2.bind(var27)();
                var2 = var25.bind(var26)(var2);
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0095_ip = 361; continue _fun0095;
case 146:
                var2 = var21.int32;
                var25 = var2.bind(var21)();
                var2 = var21.pos;
                var25 = var25 + var2;
                var2 = var21.pos;
                var23 = var4;
                var22 = var3;
                var24 = var25;
                if(!(var2 < var24)) { _fun0095_ip = 361; continue _fun0095 }
case 436:
                var27 = var1.activePerksBitmask;
                var26 = var27.push;
                var2 = var21.uint64;
                var28 = var2.bind(var21)();
                var2 = var28.toString;
                var2 = var2.bind(var28)();
                var2 = var26.bind(var27)(var2);
                var2 = var21.pos;
                var24 = var25;
                var23 = var4;
                var22 = var3;
                if(var2 < var25) { _fun0095_ip = 436; continue _fun0095 }
case 361:
                var2 = var21.pos;
                var5 = var24;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0095_ip = 163; continue _fun0095 }
case 435:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap2';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var5 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var4 = 0;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var3 = undefined;
                if(!var5) { _fun0096_ip = 135; continue _fun0096 }
case 317:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0096_ip = 99; continue _fun0096 }
case 4:
                if(!(var10 !== var5)) { _fun0096_ip = 318; continue _fun0096 }
case 136:
                var5 = global;
                var5 = var5.globalThis;
                var15 = var5.Error;
                var5 = var15.prototype;
                var14 = Object.create(var5, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.users.v1.Perks.config_by_perk';
                var19 = var14;
                var5 = new var19[var15](var18, var17);
                var5 = var5 instanceof Object ? var5 : var14;
                throw var5;
case 318:
                var15 = _closure1_slot43;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0096_ip = 64; continue _fun0096;
case 99:
                var5 = var13.uint32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 64:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0096_ip = 317; continue _fun0096 }
case 135:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0096_ip = 106; continue _fun0096 }
case 320:
                var4 = var6;
case 106:
                if(!(var5 == var3)) { _fun0096_ip = 260; continue _fun0096 }
case 321:
                var5 = _closure1_slot43;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 260:
                var2 = arg1;
                var2[var4] = var3;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0097: for(var _fun0097_ip = 0; ; ) switch(_fun0097_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.activePerksBitmask;
                var2 = var2.length;
                if(!var2) { _fun0097_ip = 24; continue _fun0097 }
case 437:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 1;
                var4 = var6.bind(var1)(var2, var4);
                var2 = var4.fork;
                var2 = var2.bind(var4)();
                var2 = var5.activePerksBitmask;
                var2 = var2.length;
                var4 = 0;
                var2 = var4 < var2;
                if(!var2) { _fun0097_ip = 407; continue _fun0097 }
case 438:
                var6 = var1.uint64;
                var2 = var5.activePerksBitmask;
                var2 = var2[var4];
                var2 = var6.bind(var1)(var2);
                var4 = var4 + 1;
                var2 = var5.activePerksBitmask;
                var2 = var2.length;
                if(var4 < var2) { _fun0097_ip = 438; continue _fun0097 }
case 407:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 24:
                var13 = global;
                var6 = var13.Object;
                var4 = var6.keys;
                var2 = var5.configByPerk;
                var12 = var4.bind(var6)(var2);
                var2 = var12.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 6;
                var4 = undefined;
                var11 = 2;
                var6 = 1;
                var10 = 0;
                if(!var8) { _fun0097_ip = 439; continue _fun0097 }
case 440:
                var16 = var12[var10];
                var17 = var1.tag;
                var15 = _closure1_slot0;
                var8 = _closure1_slot1;
                var14 = var8[var7];
                var14 = var15.bind(var4)(var14);
                var14 = var14.WireType;
                var14 = var14.LengthDelimited;
                var17 = var17.bind(var1)(var11, var14);
                var14 = var17.fork;
                var18 = var14.bind(var17)();
                var17 = var18.tag;
                var14 = var8[var7];
                var14 = var15.bind(var4)(var14);
                var14 = var14.WireType;
                var14 = var14.Varint;
                var18 = var17.bind(var18)(var6, var14);
                var17 = var18.uint32;
                var14 = var13.parseInt;
                var14 = var14.bind(var4)(var16);
                var14 = var17.bind(var18)(var14);
                var14 = var1.tag;
                var8 = var8[var7];
                var8 = var15.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var14 = var14.bind(var1)(var11, var8);
                var8 = var14.fork;
                var8 = var8.bind(var14)();
                var15 = _closure1_slot43;
                var14 = var15.internalBinaryWrite;
                var8 = var5.configByPerk;
                var8 = var8[var16];
                var8 = var14.bind(var15)(var8, var1, var3);
                var8 = var1.join;
                var14 = var8.bind(var1)();
                var8 = var14.join;
                var8 = var8.bind(var14)();
                var10 = var10 + 1;
                var8 = var12.length;
                if(var10 < var8) { _fun0097_ip = 440; continue _fun0097 }
case 439:
                var8 = var5.rulesVersion;
                if(!(var9 !== var8)) { _fun0097_ip = 441; continue _fun0097 }
case 442:
                var10 = var1.tag;
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var9.bind(var4)(var8);
                var8 = var8.WireType;
                var9 = var8.Varint;
                var8 = 3;
                var10 = var10.bind(var1)(var8, var9);
                var9 = var10.uint32;
                var8 = var5.rulesVersion;
                var8 = var9.bind(var10)(var8);
case 441:
                var8 = var5.updatedAt;
                if(!var8) { _fun0097_ip = 422; continue _fun0097 }
case 186:
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var9 = 9;
                var9 = var8[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.Timestamp;
                var10 = var11.internalBinaryWrite;
                var9 = var5.updatedAt;
                var13 = var1.tag;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 4;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 422:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0097_ip = 250; continue _fun0097 }
case 443:
                if(!(var6 == var3)) { _fun0097_ip = 444; continue _fun0097 }
case 445:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 444:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 250:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var57);
    var57 = var4.prototype;
    var57 = Object.create(var57, {constructor: {value: var4}});
    var61 = var57;
    var4 = new var61[var4](var60);
    var4 = var4 instanceof Object ? var4 : var57;
    var _closure1_slot46 = var4;
    var2 = var55[var2];
    var2 = var54.bind(var1)(var2);
    var57 = var2.MessageType;
    var2 = function(arg1) {
        var4 = function UserCountryData$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot48;
            var6 = new Array(5);
            var1 = {'no': 1, 'name': 'calculated_country', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'last_calculated_at', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'country_override', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'override_set_at', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var7;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'country_scores', 'kind': 'map', 'K': 9};
            var7 = {'kind': 'scalar', 'T': 2};
            var1['V'] = var7;
            var6[4] = var1;
            var1 = ['discord_protos.users.v1.UserCountryData'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0098: for(var _fun0098_ip = 0; ; ) switch(_fun0098_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = '';
                var1['calculatedCountry'] = var2;
                var2 = {};
                var1['countryScores'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 6;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0098_ip = 195; continue _fun0098 }
case 136:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 195:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
case 0:
                var22 = arg1;
                var21 = arg3;
                var1 = arg4;
                var20 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0099_ip = 12; continue _fun0099 }
case 13:
                var2 = var20.create;
                var1 = var2.bind(var20)();
case 12:
                var3 = var22.pos;
                var2 = arg2;
                var19 = var3 + var2;
                var2 = var22.pos;
                var2 = var2 < var19;
                var18 = undefined;
                var16 = 9;
                var15 = 7;
                var14 = 6;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0099_ip = 74; continue _fun0099 }
case 88:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0099_ip = 446; continue _fun0099 }
case 89:
                if(!(var7 !== var31)) { _fun0099_ip = 447; continue _fun0099 }
case 91:
                if(!(var8 !== var31)) { _fun0099_ip = 448; continue _fun0099 }
case 93:
                if(!(var9 !== var31)) { _fun0099_ip = 17; continue _fun0099 }
case 95:
                if(!(var10 !== var31)) { _fun0099_ip = 145; continue _fun0099 }
case 97:
                var25 = var21.readUnknownField;
                if(!(var11 !== var25)) { _fun0099_ip = 44; continue _fun0099 }
case 61:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var12 !== var25)) { _fun0099_ip = 449; continue _fun0099 }
case 147:
                var27 = var25;
                if(!(var13 === var25)) { _fun0099_ip = 148; continue _fun0099 }
case 135:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var14];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 148:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0099_ip = 449; continue _fun0099;
case 44:
                var2 = global;
                var25 = var2.globalThis;
                var26 = var25.Error;
                var32 = var20.typeName;
                var2 = var2.HermesInternal;
                var28 = var2.concat;
                var37 = 'Unknown field ';
                var35 = ' (wire type ';
                var33 = ') for ';
                var36 = var31;
                var34 = var30;
                var36 = var37[var28](var36, var35, var34, var33, var32, var31);
                var25 = var26.prototype;
                var25 = Object.create(var25, {constructor: {value: var26}});
                var37 = var25;
                var2 = new var37[var26](var36, var35);
                var2 = var2 instanceof Object ? var2 : var25;
                throw var2;
case 145:
                var25 = var20.binaryReadMap5;
                var2 = var1.countryScores;
                var2 = var25.bind(var20)(var2, var22, var21);
                var24 = var4;
                var23 = var3;
                _fun0099_ip = 449; continue _fun0099;
case 17:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.Timestamp;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.overrideSetAt;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['overrideSetAt'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0099_ip = 449; continue _fun0099;
case 448:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var25.bind(var18)(var2);
                var27 = var2.StringValue;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.countryOverride;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['countryOverride'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0099_ip = 449; continue _fun0099;
case 447:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.Timestamp;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.lastCalculatedAt;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['lastCalculatedAt'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0099_ip = 449; continue _fun0099;
case 446:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['calculatedCountry'] = var2;
                var24 = var4;
                var23 = var3;
case 449:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0099_ip = 88; continue _fun0099 }
case 74:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap5';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0100: for(var _fun0100_ip = 0; ; ) switch(_fun0100_ip) {
case 0:
                var12 = arg2;
                var1 = var12.uint32;
                var2 = var1.bind(var12)();
                var1 = var12.pos;
                var11 = var1 + var2;
                var1 = var12.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var4 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var2 = undefined;
                if(!var3) { _fun0100_ip = 100; continue _fun0100 }
case 450:
                var3 = var12.tag;
                var13 = var3.bind(var12)();
                var3 = _closure1_slot2;
                var13 = var3.bind(var1)(var13, var10);
                var3 = var13[var4];
                var13 = var13[var9];
                if(!(var9 !== var3)) { _fun0100_ip = 22; continue _fun0100 }
case 285:
                if(!(var10 !== var3)) { _fun0100_ip = 89; continue _fun0100 }
case 59:
                var3 = global;
                var3 = var3.globalThis;
                var14 = var3.Error;
                var3 = var14.prototype;
                var13 = Object.create(var3, {constructor: {value: var14}});
                var16 = 'unknown map entry field for field discord_protos.users.v1.UserCountryData.country_scores';
                var17 = var13;
                var3 = new var17[var14](var16, var15);
                var3 = var3 instanceof Object ? var3 : var13;
                throw var3;
case 89:
                var3 = var12.float;
                var13 = var3.bind(var12)();
                _fun0100_ip = 230; continue _fun0100;
case 22:
                var3 = var12.string;
                var7 = var3.bind(var12)();
                var13 = var5;
case 230:
                var3 = var12.pos;
                var5 = var13;
                var6 = var7;
                var2 = var5;
                if(var3 < var11) { _fun0100_ip = 450; continue _fun0100 }
case 100:
                var5 = null;
                var7 = var5 != var6;
                var3 = '';
                if(!var7) { _fun0100_ip = 43; continue _fun0100 }
case 197:
                var3 = var6;
case 43:
                var5 = var5 != var2;
                var4 = 0;
                if(!var5) { _fun0100_ip = 451; continue _fun0100 }
case 452:
                var4 = var2;
case 451:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0101: for(var _fun0101_ip = 0; ; ) switch(_fun0101_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var4 = var5.calculatedCountry;
                var2 = '';
                if(!(var2 !== var4)) { _fun0101_ip = 15; continue _fun0101 }
case 134:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.string;
                var2 = var5.calculatedCountry;
                var2 = var4.bind(var6)(var2);
case 15:
                var2 = var5.lastCalculatedAt;
                if(!var2) { _fun0101_ip = 281; continue _fun0101 }
case 88:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.lastCalculatedAt;
                var9 = var1.tag;
                var2 = 6;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 2;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 281:
                var2 = var5.countryOverride;
                if(!var2) { _fun0101_ip = 34; continue _fun0101 }
case 320:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 7;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.countryOverride;
                var9 = var1.tag;
                var2 = 6;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 3;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 34:
                var2 = var5.overrideSetAt;
                if(!var2) { _fun0101_ip = 453; continue _fun0101 }
case 300:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.overrideSetAt;
                var9 = var1.tag;
                var2 = 6;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 4;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 453:
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = var5.countryScores;
                var12 = var4.bind(var6)(var2);
                var2 = var12.length;
                var11 = 0;
                var8 = var11 < var2;
                var7 = 6;
                var4 = undefined;
                var10 = 5;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0101_ip = 454; continue _fun0101 }
case 455:
                var15 = var12[var11];
                var14 = var1.tag;
                var16 = _closure1_slot0;
                var8 = _closure1_slot1;
                var13 = var8[var7];
                var13 = var16.bind(var4)(var13);
                var13 = var13.WireType;
                var13 = var13.LengthDelimited;
                var14 = var14.bind(var1)(var10, var13);
                var13 = var14.fork;
                var17 = var13.bind(var14)();
                var14 = var17.tag;
                var13 = var8[var7];
                var13 = var16.bind(var4)(var13);
                var13 = var13.WireType;
                var13 = var13.LengthDelimited;
                var14 = var14.bind(var17)(var6, var13);
                var13 = var14.string;
                var14 = var13.bind(var14)(var15);
                var13 = var14.tag;
                var8 = var8[var7];
                var8 = var16.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.Bit32;
                var14 = var13.bind(var14)(var9, var8);
                var13 = var14.float;
                var8 = var5.countryScores;
                var8 = var8[var15];
                var13 = var13.bind(var14)(var8);
                var8 = var13.join;
                var8 = var8.bind(var13)();
                var11 = var11 + 1;
                var8 = var12.length;
                if(var11 < var8) { _fun0101_ip = 455; continue _fun0101 }
case 454:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0101_ip = 456; continue _fun0101 }
case 435:
                if(!(var6 == var3)) { _fun0101_ip = 457; continue _fun0101 }
case 458:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 457:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 456:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var57);
    var57 = var2.prototype;
    var57 = Object.create(var57, {constructor: {value: var2}});
    var61 = var57;
    var2 = new var61[var2](var60);
    var2 = var2 instanceof Object ? var2 : var57;
    var _closure1_slot47 = var2;
    var53 = var55[var53];
    var55 = var54.bind(var1)(var53);
    var54 = var55.fileFinishedImporting;
    var53 = '../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx';
    var53 = var54.bind(var55)(var53);
    var3['DayOfWeek'] = var52;
    var3['DisplayNameFont'] = var51;
    var3['DisplayNameEffect'] = var50;
    var3['BadgeType'] = var49;
    var3['AnonymizationStatus'] = var48;
    var3['AgeAssuranceTier'] = var47;
    var3['AgeAssuranceMethod'] = var46;
    var3['AgeAssuranceVendor'] = var45;
    var3['AgeAssuranceGroup'] = var44;
    var3['UserLinkType'] = var43;
    var3['UserLinkStatus'] = var42;
    var3['RateLimitTier'] = var41;
    var3['FeatureLimitName'] = var40;
    var3['SafetyFlagType'] = var39;
    var3['PremiumSource'] = var38;
    var3['PremiumSubscriptionType'] = var37;
    var3['PremiumSubscriptionGroupRole'] = var36;
    var3['Perk'] = var35;
    var3['PerkSource'] = var34;
    var3['TimeOfDay'] = var33;
    var3['User'] = var32;
    var3['MediumUser'] = var31;
    var3['UserAvatarDecoration'] = var30;
    var3['UserNameplate'] = var29;
    var3['DisplayNameStyles'] = var28;
    var3['UserCollectibles'] = var27;
    var3['UserPrimaryGuild'] = var26;
    var3['ScheduleRule'] = var25;
    var3['RestrictedSchedule'] = var24;
    var3['CrossPlatformRestriction'] = var23;
    var3['BadgeCommon'] = var22;
    var3['AprilFools2026Badge'] = var21;
    var3['Badge'] = var20;
    var3['UserBadges'] = var19;
    var3['AnonymizationInfo'] = var18;
    var3['UserData'] = var17;
    var3['AgeAssuranceData'] = var16;
    var3['LinkedUser'] = var15;
    var3['RateLimitData'] = var14;
    var3['FeatureLimits'] = var13;
    var3['SafetyFlag'] = var12;
    var3['GuildShardingConfig'] = var11;
    var3['QuestMetadata'] = var10;
    var3['PremiumState'] = var9;
    var3['StoreCountry'] = var8;
    var3['PerkConfig'] = var7;
    var3['PerkConfigIncreasedFileUploadSize'] = var6;
    var3['PerkConfigIncreasedGuildLimit'] = var5;
    var3['Perks'] = var4;
    var3['UserCountryData'] = var2;
    return var1;
})();
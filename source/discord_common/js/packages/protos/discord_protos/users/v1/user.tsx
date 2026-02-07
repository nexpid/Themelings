// discord_common/js/packages/protos/discord_protos/users/v1/user.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var35 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var36 = dependencyMap;
    var _closure1_slot0 = var35;
    var _closure1_slot1 = var36;
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
            var1 = _closure1_slot33;
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
    var _closure1_slot32 = var1;
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
            _closure1_slot33 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var7 = 0;
    var2 = var36[var7];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var6 = 1;
    var2 = var36[var6];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var5 = 2;
    var2 = var36[var5];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var11 = 3;
    var2 = var36[var11];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var9 = 4;
    var2 = var36[var9];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var17 = 5;
    var2 = var36[var17];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var33 = {};
    var33['DAY_OF_WEEK_UNSPECIFIED'] = var7;
    var2 = 'DAY_OF_WEEK_UNSPECIFIED';
    var33[var7] = var2;
    var33['MONDAY'] = var6;
    var2 = 'MONDAY';
    var33[var6] = var2;
    var33['TUESDAY'] = var5;
    var2 = 'TUESDAY';
    var33[var5] = var2;
    var33['WEDNESDAY'] = var11;
    var2 = 'WEDNESDAY';
    var33[var11] = var2;
    var33['THURSDAY'] = var9;
    var2 = 'THURSDAY';
    var33[var9] = var2;
    var33['FRIDAY'] = var17;
    var2 = 'FRIDAY';
    var33[var17] = var2;
    var2 = 6;
    var33['SATURDAY'] = var2;
    var4 = 'SATURDAY';
    var33[var2] = var4;
    var16 = 7;
    var33['SUNDAY'] = var16;
    var4 = 'SUNDAY';
    var33[var16] = var4;
    var _closure1_slot8 = var33;
    var32 = {};
    var32['UNSPECIFIED'] = var7;
    var4 = 'UNSPECIFIED';
    var32[var7] = var4;
    var13 = 11;
    var32['DEFAULT'] = var13;
    var8 = 'DEFAULT';
    var32[var13] = var8;
    var32['BANGERS'] = var6;
    var8 = 'BANGERS';
    var32[var6] = var8;
    var32['BIO_RHYME'] = var5;
    var8 = 'BIO_RHYME';
    var32[var5] = var8;
    var32['CHERRY_BOMB'] = var11;
    var8 = 'CHERRY_BOMB';
    var32[var11] = var8;
    var32['CHICLE'] = var9;
    var8 = 'CHICLE';
    var32[var9] = var8;
    var32['COMPAGNON'] = var17;
    var8 = 'COMPAGNON';
    var32[var17] = var8;
    var32['MUSEO_MODERNO'] = var2;
    var8 = 'MUSEO_MODERNO';
    var32[var2] = var8;
    var32['NEO_CASTEL'] = var16;
    var8 = 'NEO_CASTEL';
    var32[var16] = var8;
    var15 = 8;
    var32['PIXELIFY'] = var15;
    var8 = 'PIXELIFY';
    var32[var15] = var8;
    var14 = 9;
    var32['RIBES'] = var14;
    var8 = 'RIBES';
    var32[var14] = var8;
    var34 = 10;
    var32['SINISTRE'] = var34;
    var8 = 'SINISTRE';
    var32[var34] = var8;
    var12 = 12;
    var32['ZILLA_SLAB'] = var12;
    var8 = 'ZILLA_SLAB';
    var32[var12] = var8;
    var _closure1_slot9 = var32;
    var31 = {};
    var31['UNSPECIFIED'] = var7;
    var31[var7] = var4;
    var31['SOLID'] = var6;
    var8 = 'SOLID';
    var31[var6] = var8;
    var31['GRADIENT'] = var5;
    var8 = 'GRADIENT';
    var31[var5] = var8;
    var31['NEON'] = var11;
    var8 = 'NEON';
    var31[var11] = var8;
    var31['TOON'] = var9;
    var8 = 'TOON';
    var31[var9] = var8;
    var31['POP'] = var17;
    var8 = 'POP';
    var31[var17] = var8;
    var31['GLOW'] = var2;
    var8 = 'GLOW';
    var31[var2] = var8;
    var _closure1_slot10 = var31;
    var30 = {};
    var30['USER_LINK_TYPE_UNSPECIFIED'] = var7;
    var8 = 'USER_LINK_TYPE_UNSPECIFIED';
    var30[var7] = var8;
    var30['PARENT'] = var6;
    var8 = 'PARENT';
    var30[var6] = var8;
    var30['CHILD'] = var5;
    var8 = 'CHILD';
    var30[var5] = var8;
    var _closure1_slot11 = var30;
    var29 = {};
    var29['USER_LINK_STATUS_UNSPECIFIED'] = var7;
    var8 = 'USER_LINK_STATUS_UNSPECIFIED';
    var29[var7] = var8;
    var29['PENDING'] = var6;
    var8 = 'PENDING';
    var29[var6] = var8;
    var29['ACTIVE'] = var5;
    var8 = 'ACTIVE';
    var29[var5] = var8;
    var29['INACTIVE'] = var11;
    var8 = 'INACTIVE';
    var29[var11] = var8;
    var29['DECLINED'] = var9;
    var8 = 'DECLINED';
    var29[var9] = var8;
    var _closure1_slot12 = var29;
    var28 = {};
    var28['RATE_LIMIT_TIER_UNSPECIFIED'] = var7;
    var8 = 'RATE_LIMIT_TIER_UNSPECIFIED';
    var28[var7] = var8;
    var28['UNLIMITED'] = var6;
    var8 = 'UNLIMITED';
    var28[var6] = var8;
    var28['TIER_2'] = var5;
    var8 = 'TIER_2';
    var28[var5] = var8;
    var28['TIER_3'] = var11;
    var10 = 'TIER_3';
    var28[var11] = var10;
    var28['TIER_4'] = var9;
    var10 = 'TIER_4';
    var28[var9] = var10;
    var28['DISABLED'] = var17;
    var10 = 'DISABLED';
    var28[var17] = var10;
    var27 = {};
    var27['FEATURE_LIMIT_NAME_UNSPECIFIED'] = var7;
    var10 = 'FEATURE_LIMIT_NAME_UNSPECIFIED';
    var27[var7] = var10;
    var27['GUILD_MESSAGE_SEND'] = var6;
    var10 = 'GUILD_MESSAGE_SEND';
    var27[var6] = var10;
    var27['DM_SEND'] = var5;
    var10 = 'DM_SEND';
    var27[var5] = var10;
    var27['FRIEND_REQUEST'] = var11;
    var10 = 'FRIEND_REQUEST';
    var27[var11] = var10;
    var27['GUILD_CREATE'] = var9;
    var10 = 'GUILD_CREATE';
    var27[var9] = var10;
    var27['GUILD_JOIN'] = var17;
    var10 = 'GUILD_JOIN';
    var27[var17] = var10;
    var27['GUILD_TEXT_CHANNEL_CREATE'] = var2;
    var10 = 'GUILD_TEXT_CHANNEL_CREATE';
    var27[var2] = var10;
    var27['GUILD_UPLOAD_ATTACHMENT'] = var16;
    var10 = 'GUILD_UPLOAD_ATTACHMENT';
    var27[var16] = var10;
    var27['DM_UPLOAD_ATTACHMENT'] = var15;
    var10 = 'DM_UPLOAD_ATTACHMENT';
    var27[var15] = var10;
    var27['GDM_UPLOAD_ATTACHMENT'] = var14;
    var10 = 'GDM_UPLOAD_ATTACHMENT';
    var27[var14] = var10;
    var27['GDM_SEND'] = var34;
    var10 = 'GDM_SEND';
    var27[var34] = var10;
    var27['GUILD_VOICE_CHANNEL_CREATE'] = var13;
    var10 = 'GUILD_VOICE_CHANNEL_CREATE';
    var27[var13] = var10;
    var27['USER_PROFILE_EDIT'] = var12;
    var10 = 'USER_PROFILE_EDIT';
    var27[var12] = var10;
    var26 = {};
    var26['SAFETY_FLAG_TYPE_UNSPECIFIED'] = var7;
    var10 = 'SAFETY_FLAG_TYPE_UNSPECIFIED';
    var26[var7] = var10;
    var26['STRANGER_DANGER'] = var6;
    var10 = 'STRANGER_DANGER';
    var26[var6] = var10;
    var26['LIKELY_ATO'] = var5;
    var10 = 'LIKELY_ATO';
    var26[var5] = var10;
    var26['PARENTAL_CONSENT_REVOKED_IOS'] = var11;
    var10 = 'PARENTAL_CONSENT_REVOKED_IOS';
    var26[var11] = var10;
    var26['PARENTAL_CONSENT_REVOKED_ANDROID'] = var9;
    var10 = 'PARENTAL_CONSENT_REVOKED_ANDROID';
    var26[var9] = var10;
    var25 = {};
    var25['NONE_UNSPECIFIED'] = var7;
    var10 = 'NONE_UNSPECIFIED';
    var25[var7] = var10;
    var25['SUBSCRIPTION'] = var6;
    var12 = 'SUBSCRIPTION';
    var25[var6] = var12;
    var25['FRACTIONAL_NITRO'] = var5;
    var12 = 'FRACTIONAL_NITRO';
    var25[var5] = var12;
    var25['REVERSE_TRIAL'] = var11;
    var12 = 'REVERSE_TRIAL';
    var25[var11] = var12;
    var25['SUBSCRIPTION_GROUP'] = var9;
    var12 = 'SUBSCRIPTION_GROUP';
    var25[var9] = var12;
    var _closure1_slot13 = var25;
    var24 = {};
    var24['NONE_UNSPECIFIED'] = var7;
    var24[var7] = var10;
    var24['BOOST_ONLY'] = var6;
    var10 = 'BOOST_ONLY';
    var24[var6] = var10;
    var24['TIER_0'] = var5;
    var10 = 'TIER_0';
    var24[var5] = var10;
    var24['TIER_1'] = var11;
    var10 = 'TIER_1';
    var24[var11] = var10;
    var24['TIER_2'] = var9;
    var24[var9] = var8;
    var _closure1_slot14 = var24;
    var23 = {};
    var23['UNSPECIFIED'] = var7;
    var23[var7] = var4;
    var23['PRIMARY'] = var6;
    var4 = 'PRIMARY';
    var23[var6] = var4;
    var23['MEMBER'] = var5;
    var4 = 'MEMBER';
    var23[var5] = var4;
    var _closure1_slot15 = var23;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function TimeOfDay$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var22 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot16 = var22;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function User$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
                var1 = _closure1_slot17;
                return var1;
            };
            var1['T'] = var8;
            var6[7] = var1;
            var1 = {'no': 10, 'name': 'primary_guild', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot21;
                return var1;
            };
            var1['T'] = var8;
            var6[8] = var1;
            var1 = {'no': 11, 'name': 'collectibles', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot20;
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
                var1 = _closure1_slot19;
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
                var24 = _closure1_slot19;
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
                var26 = _closure1_slot20;
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
                var26 = _closure1_slot21;
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
                var26 = _closure1_slot17;
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
                var8 = _closure1_slot17;
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
                var8 = _closure1_slot21;
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
                var8 = _closure1_slot20;
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
                var8 = _closure1_slot19;
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var21 = var4 instanceof Object ? var4 : var5;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function MediumUser$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
                if(!(var13 !== var25)) { _fun0010_ip = 73; continue _fun0010 }
case 105:
                var27 = var25;
                if(!(var14 === var25)) { _fun0010_ip = 106; continue _fun0010 }
case 107:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var15];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 106:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0010_ip = 73; continue _fun0010;
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
                _fun0010_ip = 73; continue _fun0010;
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
                _fun0010_ip = 73; continue _fun0010;
case 98:
                var2 = var22.uint64;
                var25 = var2.bind(var22)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var1['flags'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 73; continue _fun0010;
case 96:
                var2 = var22.bool;
                var2 = var2.bind(var22)();
                var1['bot'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 73; continue _fun0010;
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
                _fun0010_ip = 73; continue _fun0010;
case 92:
                var2 = var22.uint32;
                var2 = var2.bind(var22)();
                var1['discriminator'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 73; continue _fun0010;
case 90:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['username'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 73; continue _fun0010;
case 52:
                var2 = var22.fixed64;
                var25 = var2.bind(var22)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var1['id'] = var2;
                var24 = var4;
                var23 = var3;
case 73:
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
                if(!(var2 !== var4)) { _fun0011_ip = 108; continue _fun0011 }
case 102:
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
case 108:
                var2 = var5.avatarHash;
                if(!var2) { _fun0011_ip = 109; continue _fun0011 }
case 110:
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
case 109:
                var4 = var5.bot;
                var2 = false;
                if(!(var2 !== var4)) { _fun0011_ip = 111; continue _fun0011 }
case 112:
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
case 111:
                var4 = var5.flags;
                if(!(var6 !== var4)) { _fun0011_ip = 113; continue _fun0011 }
case 114:
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
case 113:
                var4 = var5.email;
                if(!var4) { _fun0011_ip = 115; continue _fun0011 }
case 116:
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
case 115:
                var4 = var5.phone;
                if(!var4) { _fun0011_ip = 55; continue _fun0011 }
case 117:
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
case 55:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0011_ip = 118; continue _fun0011 }
case 119:
                var2 = 1;
                if(!(var2 == var4)) { _fun0011_ip = 120; continue _fun0011 }
case 121:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 120:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 118:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var20 = var4 instanceof Object ? var4 : var5;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserAvatarDecoration$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
                if(!(var6 !== var5)) { _fun0012_ip = 122; continue _fun0012 }
case 123:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 122:
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
                if(!var2) { _fun0013_ip = 124; continue _fun0013 }
case 15:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0013_ip = 125; continue _fun0013 }
case 11:
                if(!(var7 !== var28)) { _fun0013_ip = 36; continue _fun0013 }
case 18:
                if(!(var8 !== var28)) { _fun0013_ip = 126; continue _fun0013 }
case 20:
                var22 = var18.readUnknownField;
                if(!(var9 !== var22)) { _fun0013_ip = 127; continue _fun0013 }
case 128:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var10 !== var22)) { _fun0013_ip = 129; continue _fun0013 }
case 130:
                var24 = var22;
                if(!(var11 === var22)) { _fun0013_ip = 131; continue _fun0013 }
case 26:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var12];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 131:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0013_ip = 129; continue _fun0013;
case 127:
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
case 126:
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
                _fun0013_ip = 129; continue _fun0013;
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
                _fun0013_ip = 129; continue _fun0013;
case 125:
                var2 = var19.string;
                var2 = var2.bind(var19)();
                var1['asset'] = var2;
                var21 = var4;
                var20 = var3;
case 129:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0013_ip = 15; continue _fun0013 }
case 124:
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
                if(!(var3 !== var4)) { _fun0014_ip = 123; continue _fun0014 }
case 132:
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
case 123:
                var3 = var5.skuId;
                if(!var3) { _fun0014_ip = 133; continue _fun0014 }
case 134:
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
case 133:
                var3 = var5.expiresAt;
                if(!var3) { _fun0014_ip = 135; continue _fun0014 }
case 27:
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
case 135:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0014_ip = 36; continue _fun0014 }
case 37:
                var2 = 1;
                if(!(var2 == var4)) { _fun0014_ip = 38; continue _fun0014 }
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var19 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot17 = var19;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserNameplate$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
                if(!var2) { _fun0016_ip = 136; continue _fun0016 }
case 88:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0016_ip = 137; continue _fun0016 }
case 89:
                if(!(var7 !== var31)) { _fun0016_ip = 138; continue _fun0016 }
case 91:
                if(!(var8 !== var31)) { _fun0016_ip = 139; continue _fun0016 }
case 93:
                if(!(var9 !== var31)) { _fun0016_ip = 140; continue _fun0016 }
case 95:
                if(!(var10 !== var31)) { _fun0016_ip = 141; continue _fun0016 }
case 97:
                var25 = var21.readUnknownField;
                if(!(var11 !== var25)) { _fun0016_ip = 44; continue _fun0016 }
case 142:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var12 !== var25)) { _fun0016_ip = 143; continue _fun0016 }
case 144:
                var27 = var25;
                if(!(var13 === var25)) { _fun0016_ip = 145; continue _fun0016 }
case 146:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var14];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 145:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0016_ip = 143; continue _fun0016;
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
case 141:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['label'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0016_ip = 143; continue _fun0016;
case 140:
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
                _fun0016_ip = 143; continue _fun0016;
case 139:
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
                _fun0016_ip = 143; continue _fun0016;
case 138:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['palette'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0016_ip = 143; continue _fun0016;
case 137:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['asset'] = var2;
                var24 = var4;
                var23 = var3;
case 143:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0016_ip = 88; continue _fun0016 }
case 136:
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
                if(!(var4 !== var3)) { _fun0017_ip = 123; continue _fun0017 }
case 132:
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
case 123:
                var3 = var5.palette;
                if(!(var4 !== var3)) { _fun0017_ip = 147; continue _fun0017 }
case 148:
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
case 147:
                var3 = var5.skuId;
                if(!var3) { _fun0017_ip = 149; continue _fun0017 }
case 150:
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
case 149:
                var3 = var5.expiresAt;
                if(!var3) { _fun0017_ip = 151; continue _fun0017 }
case 152:
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
case 151:
                var3 = var5.label;
                if(!(var4 !== var3)) { _fun0017_ip = 153; continue _fun0017 }
case 154:
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
case 153:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0017_ip = 48; continue _fun0017 }
case 155:
                var2 = 1;
                if(!(var2 == var4)) { _fun0017_ip = 156; continue _fun0017 }
case 157:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 156:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 48:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var18 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot18 = var18;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function DisplayNameStyles$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
            var6 = new Array(3);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'effect_id', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot10;
                var1 = ['discord_protos.users.v1.DisplayNameEffect'];
                var1[1] = var2;
                var2 = 'DISPLAY_NAME_EFFECT_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'colors', 'kind': 'scalar', 'repeat': 1, 'T': 13};
            var6[2] = var1;
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
                if(!(var6 !== var5)) { _fun0018_ip = 158; continue _fun0018 }
case 159:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 158:
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
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0019_ip = 12; continue _fun0019 }
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
                var9 = 3;
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0019_ip = 160; continue _fun0019 }
case 161:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var8);
                var29 = var2[var6];
                var23 = var2[var7];
                if(!(var7 !== var29)) { _fun0019_ip = 162; continue _fun0019 }
case 163:
                if(!(var8 !== var29)) { _fun0019_ip = 164; continue _fun0019 }
case 165:
                if(!(var9 !== var29)) { _fun0019_ip = 166; continue _fun0019 }
case 167:
                var24 = var18.readUnknownField;
                if(!(var10 !== var24)) { _fun0019_ip = 168; continue _fun0019 }
case 93:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var23);
                var22 = var5;
                var21 = var24;
                var20 = var2;
                if(!(var11 !== var24)) { _fun0019_ip = 169; continue _fun0019 }
case 33:
                var26 = var24;
                if(!(var12 === var24)) { _fun0019_ip = 170; continue _fun0019 }
case 171:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var13];
                var25 = var27.bind(var15)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 170:
                var34 = var17.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var29;
                var31 = var23;
                var30 = var2;
                var25 = var35[var26](var34, var33, var32, var31, var30, var29);
                var22 = var5;
                var21 = var24;
                var20 = var2;
                _fun0019_ip = 169; continue _fun0019;
case 168:
                var2 = global;
                var24 = var2.globalThis;
                var25 = var24.Error;
                var30 = var17.typeName;
                var2 = var2.HermesInternal;
                var27 = var2.concat;
                var35 = 'Unknown field ';
                var33 = ' (wire type ';
                var31 = ') for ';
                var34 = var29;
                var32 = var23;
                var34 = var35[var27](var34, var33, var32, var31, var30, var29);
                var24 = var25.prototype;
                var24 = Object.create(var24, {constructor: {value: var25}});
                var35 = var24;
                var2 = new var35[var25](var34, var33);
                var2 = var2 instanceof Object ? var2 : var24;
                throw var2;
case 166:
                var24 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var24.bind(var15)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var23 !== var2)) { _fun0019_ip = 172; continue _fun0019 }
case 173:
                var24 = var1.colors;
                var23 = var24.push;
                var2 = var19.uint32;
                var2 = var2.bind(var19)();
                var2 = var23.bind(var24)(var2);
                var22 = var5;
                var21 = var4;
                var20 = var3;
                _fun0019_ip = 169; continue _fun0019;
case 172:
                var2 = var19.int32;
                var23 = var2.bind(var19)();
                var2 = var19.pos;
                var23 = var23 + var2;
                var2 = var19.pos;
                var21 = var4;
                var20 = var3;
                var22 = var23;
                if(!(var2 < var22)) { _fun0019_ip = 169; continue _fun0019 }
case 174:
                var25 = var1.colors;
                var24 = var25.push;
                var2 = var19.uint32;
                var2 = var2.bind(var19)();
                var2 = var24.bind(var25)(var2);
                var2 = var19.pos;
                var22 = var23;
                var21 = var4;
                var20 = var3;
                if(var2 < var23) { _fun0019_ip = 174; continue _fun0019 }
case 175:
                _fun0019_ip = 169; continue _fun0019;
case 164:
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var1['effectId'] = var2;
                var22 = var5;
                var21 = var4;
                var20 = var3;
                _fun0019_ip = 169; continue _fun0019;
case 162:
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var1['fontId'] = var2;
                var22 = var5;
                var21 = var4;
                var20 = var3;
case 169:
                var2 = var19.pos;
                var5 = var22;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0019_ip = 161; continue _fun0019 }
case 160:
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
                var2 = var5.fontId;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0020_ip = 29; continue _fun0020 }
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
                var2 = var5.fontId;
                var2 = var4.bind(var6)(var2);
case 29:
                var2 = var5.effectId;
                if(!(var3 !== var2)) { _fun0020_ip = 30; continue _fun0020 }
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
                var2 = var5.effectId;
                var2 = var4.bind(var6)(var2);
case 30:
                var2 = var5.colors;
                var2 = var2.length;
                if(!var2) { _fun0020_ip = 176; continue _fun0020 }
case 64:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 6;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 3;
                var4 = var6.bind(var1)(var2, var4);
                var2 = var4.fork;
                var2 = var2.bind(var4)();
                var2 = var5.colors;
                var2 = var2.length;
                var2 = var3 < var2;
                var3 = 0;
                if(!var2) { _fun0020_ip = 177; continue _fun0020 }
case 178:
                var4 = var1.uint32;
                var2 = var5.colors;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.colors;
                var2 = var2.length;
                if(var3 < var2) { _fun0020_ip = 178; continue _fun0020 }
case 177:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 176:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0020_ip = 179; continue _fun0020 }
case 180:
                var2 = 1;
                if(!(var2 == var4)) { _fun0020_ip = 109; continue _fun0020 }
case 181:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 109:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 179:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var17 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot19 = var17;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserCollectibles$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
            var1 = {'no': 1, 'name': 'nameplate', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot18;
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
                if(!(var6 !== var5)) { _fun0021_ip = 182; continue _fun0021 }
case 183:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 182:
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
                if(!var2) { _fun0022_ip = 140; continue _fun0022 }
case 184:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0022_ip = 185; continue _fun0022 }
case 186:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0022_ip = 107; continue _fun0022 }
case 187:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0022_ip = 19; continue _fun0022 }
case 188:
                var22 = var20;
                if(!(var10 === var20)) { _fun0022_ip = 189; continue _fun0022 }
case 190:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 189:
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
case 107:
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
case 185:
                var22 = _closure1_slot18;
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
                if(var2 < var14) { _fun0022_ip = 184; continue _fun0022 }
case 140:
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
                if(!var3) { _fun0023_ip = 182; continue _fun0023 }
case 13:
                var7 = _closure1_slot18;
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
case 182:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0023_ip = 28; continue _fun0023 }
case 11:
                var2 = 1;
                if(!(var2 == var4)) { _fun0023_ip = 99; continue _fun0023 }
case 18:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 99:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 28:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var16 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot20 = var16;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserPrimaryGuild$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
                if(!(var6 !== var5)) { _fun0024_ip = 182; continue _fun0024 }
case 183:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 182:
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
                if(!var2) { _fun0025_ip = 191; continue _fun0025 }
case 192:
                var2 = var20.tag;
                var21 = var2.bind(var20)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var16)(var21, var7);
                var29 = var2[var5];
                var28 = var2[var6];
                if(!(var6 !== var29)) { _fun0025_ip = 160; continue _fun0025 }
case 193:
                if(!(var7 !== var29)) { _fun0025_ip = 194; continue _fun0025 }
case 195:
                if(!(var8 !== var29)) { _fun0025_ip = 196; continue _fun0025 }
case 197:
                if(!(var9 !== var29)) { _fun0025_ip = 37; continue _fun0025 }
case 128:
                var23 = var19.readUnknownField;
                if(!(var10 !== var23)) { _fun0025_ip = 198; continue _fun0025 }
case 199:
                var2 = var20.skip;
                var2 = var2.bind(var20)(var28);
                var22 = var23;
                var21 = var2;
                if(!(var11 !== var23)) { _fun0025_ip = 200; continue _fun0025 }
case 102:
                var25 = var23;
                if(!(var12 === var23)) { _fun0025_ip = 201; continue _fun0025 }
case 202:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var13];
                var24 = var26.bind(var16)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 201:
                var34 = var18.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var29;
                var31 = var28;
                var30 = var2;
                var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                var22 = var23;
                var21 = var2;
                _fun0025_ip = 200; continue _fun0025;
case 198:
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
                _fun0025_ip = 200; continue _fun0025;
case 196:
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
                _fun0025_ip = 200; continue _fun0025;
case 194:
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
                _fun0025_ip = 200; continue _fun0025;
case 160:
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
case 200:
                var2 = var20.pos;
                var4 = var22;
                var3 = var21;
                if(var2 < var17) { _fun0025_ip = 192; continue _fun0025 }
case 191:
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
                if(!var3) { _fun0026_ip = 203; continue _fun0026 }
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
case 203:
                var3 = var5.identityEnabled;
                if(!var3) { _fun0026_ip = 32; continue _fun0026 }
case 41:
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
case 32:
                var3 = var5.tag;
                if(!var3) { _fun0026_ip = 19; continue _fun0026 }
case 108:
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
case 19:
                var3 = var5.badge;
                if(!var3) { _fun0026_ip = 204; continue _fun0026 }
case 205:
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
case 204:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0026_ip = 206; continue _fun0026 }
case 164:
                var2 = 1;
                if(!(var2 == var4)) { _fun0026_ip = 207; continue _fun0026 }
case 129:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 207:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 206:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var15 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot21 = var15;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ScheduleRule$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
            var6 = new Array(5);
            var1 = {'no': 1, 'name': 'rule_id', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'label', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'start_time', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot16;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'end_time', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot16;
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
                var1 = {'ruleId': '', 'label': ''};
                var2 = new Array(0);
                var1['days'] = var2;
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
                if(!(var6 !== var5)) { _fun0027_ip = 89; continue _fun0027 }
case 208:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 89:
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
                if(!var2) { _fun0028_ip = 209; continue _fun0028 }
case 210:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var8);
                var31 = var2[var6];
                var25 = var2[var7];
                if(!(var7 !== var31)) { _fun0028_ip = 50; continue _fun0028 }
case 211:
                if(!(var8 !== var31)) { _fun0028_ip = 212; continue _fun0028 }
case 213:
                if(!(var9 !== var31)) { _fun0028_ip = 214; continue _fun0028 }
case 215:
                if(!(var10 !== var31)) { _fun0028_ip = 47; continue _fun0028 }
case 216:
                if(!(var11 !== var31)) { _fun0028_ip = 217; continue _fun0028 }
case 218:
                var26 = var20.readUnknownField;
                if(!(var12 !== var26)) { _fun0028_ip = 219; continue _fun0028 }
case 147:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var25);
                var24 = var5;
                var23 = var26;
                var22 = var2;
                if(!(var13 !== var26)) { _fun0028_ip = 220; continue _fun0028 }
case 221:
                var28 = var26;
                if(!(var14 === var26)) { _fun0028_ip = 222; continue _fun0028 }
case 223:
                var29 = _closure1_slot0;
                var27 = _closure1_slot1;
                var27 = var27[var15];
                var27 = var29.bind(var17)(var27);
                var27 = var27.UnknownFieldHandler;
                var28 = var27.onRead;
case 222:
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
                _fun0028_ip = 220; continue _fun0028;
case 219:
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
case 217:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var26.bind(var17)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var25 !== var2)) { _fun0028_ip = 224; continue _fun0028 }
case 225:
                var26 = var1.days;
                var25 = var26.push;
                var2 = var21.int32;
                var2 = var2.bind(var21)();
                var2 = var25.bind(var26)(var2);
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0028_ip = 220; continue _fun0028;
case 224:
                var2 = var21.int32;
                var25 = var2.bind(var21)();
                var2 = var21.pos;
                var25 = var25 + var2;
                var2 = var21.pos;
                var23 = var4;
                var22 = var3;
                var24 = var25;
                if(!(var2 < var24)) { _fun0028_ip = 220; continue _fun0028 }
case 226:
                var27 = var1.days;
                var26 = var27.push;
                var2 = var21.int32;
                var2 = var2.bind(var21)();
                var2 = var26.bind(var27)(var2);
                var2 = var21.pos;
                var24 = var25;
                var23 = var4;
                var22 = var3;
                if(var2 < var25) { _fun0028_ip = 226; continue _fun0028 }
case 227:
                _fun0028_ip = 220; continue _fun0028;
case 47:
                var27 = _closure1_slot16;
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
                _fun0028_ip = 220; continue _fun0028;
case 214:
                var27 = _closure1_slot16;
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
                _fun0028_ip = 220; continue _fun0028;
case 212:
                var2 = var21.string;
                var2 = var2.bind(var21)();
                var1['label'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0028_ip = 220; continue _fun0028;
case 50:
                var2 = var21.string;
                var2 = var2.bind(var21)();
                var1['ruleId'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
case 220:
                var2 = var21.pos;
                var5 = var24;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0028_ip = 210; continue _fun0028 }
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
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.ruleId;
                var4 = '';
                if(!(var4 !== var3)) { _fun0029_ip = 123; continue _fun0029 }
case 132:
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
                var3 = var5.ruleId;
                var3 = var6.bind(var7)(var3);
case 123:
                var3 = var5.label;
                if(!(var4 !== var3)) { _fun0029_ip = 228; continue _fun0029 }
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
                var3 = 2;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.string;
                var3 = var5.label;
                var3 = var4.bind(var6)(var3);
case 228:
                var3 = var5.startTime;
                if(!var3) { _fun0029_ip = 44; continue _fun0029 }
case 33:
                var7 = _closure1_slot16;
                var6 = var7.internalBinaryWrite;
                var4 = var5.startTime;
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
case 44:
                var3 = var5.endTime;
                if(!var3) { _fun0029_ip = 101; continue _fun0029 }
case 229:
                var7 = _closure1_slot16;
                var6 = var7.internalBinaryWrite;
                var4 = var5.endTime;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 4;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 101:
                var3 = var5.days;
                var3 = var3.length;
                if(!var3) { _fun0029_ip = 230; continue _fun0029 }
case 231:
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
                var4 = var6.bind(var1)(var3, var4);
                var3 = var4.fork;
                var3 = var3.bind(var4)();
                var3 = var5.days;
                var3 = var3.length;
                var4 = 0;
                var3 = var4 < var3;
                if(!var3) { _fun0029_ip = 232; continue _fun0029 }
case 233:
                var6 = var1.int32;
                var3 = var5.days;
                var3 = var3[var4];
                var3 = var6.bind(var1)(var3);
                var4 = var4 + 1;
                var3 = var5.days;
                var3 = var3.length;
                if(var4 < var3) { _fun0029_ip = 233; continue _fun0029 }
case 232:
                var3 = var1.join;
                var3 = var3.bind(var1)();
case 230:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0029_ip = 234; continue _fun0029 }
case 116:
                var2 = 1;
                if(!(var2 == var4)) { _fun0029_ip = 235; continue _fun0029 }
case 236:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 235:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 234:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var14 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot22 = var14;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function RestrictedSchedule$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
            var1 = {'no': 1, 'name': 'rules', 'kind': 'message', 'repeat': 1};
            var6 = function T() {
                var1 = _closure1_slot22;
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
                if(!(var6 !== var5)) { _fun0030_ip = 122; continue _fun0030 }
case 123:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 122:
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
                if(!var2) { _fun0031_ip = 237; continue _fun0031 }
case 184:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0031_ip = 185; continue _fun0031 }
case 186:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0031_ip = 107; continue _fun0031 }
case 187:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0031_ip = 238; continue _fun0031 }
case 188:
                var22 = var20;
                if(!(var10 === var20)) { _fun0031_ip = 189; continue _fun0031 }
case 190:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 189:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0031_ip = 238; continue _fun0031;
case 107:
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
case 185:
                var21 = var1.rules;
                var20 = var21.push;
                var23 = _closure1_slot22;
                var22 = var23.internalBinaryRead;
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var2 = var22.bind(var23)(var17, var2, var16);
                var2 = var20.bind(var21)(var2);
                var19 = var4;
                var18 = var3;
case 238:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0031_ip = 184; continue _fun0031 }
case 237:
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
                if(!var8) { _fun0032_ip = 22; continue _fun0032 }
case 239:
                var12 = _closure1_slot22;
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
                if(var9 < var8) { _fun0032_ip = 239; continue _fun0032 }
case 22:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0032_ip = 133; continue _fun0032 }
case 218:
                if(!(var6 == var3)) { _fun0032_ip = 240; continue _fun0032 }
case 97:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 240:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 133:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var13 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot23 = var13;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function CrossPlatformRestriction$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
                if(!(var6 !== var5)) { _fun0033_ip = 241; continue _fun0033 }
case 59:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 241:
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
                if(!(var6 !== var27)) { _fun0034_ip = 141; continue _fun0034 }
case 122:
                if(!(var7 !== var27)) { _fun0034_ip = 242; continue _fun0034 }
case 187:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0034_ip = 243; continue _fun0034 }
case 20:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0034_ip = 244; continue _fun0034 }
case 245:
                var23 = var21;
                if(!(var10 === var21)) { _fun0034_ip = 246; continue _fun0034 }
case 247:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 246:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0034_ip = 244; continue _fun0034;
case 243:
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
case 242:
                var2 = var18.fixed64;
                var21 = var2.bind(var18)();
                var2 = var21.toString;
                var2 = var2.bind(var21)();
                var1['applicationId'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0034_ip = 244; continue _fun0034;
case 141:
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
case 244:
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
                if(!var3) { _fun0035_ip = 203; continue _fun0035 }
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
case 203:
                var4 = var5.applicationId;
                var3 = '0';
                if(!(var3 !== var4)) { _fun0035_ip = 248; continue _fun0035 }
case 197:
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
case 248:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0035_ip = 249; continue _fun0035 }
case 250:
                var2 = 1;
                if(!(var2 == var4)) { _fun0035_ip = 251; continue _fun0035 }
case 252:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 251:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 249:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var12 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot24 = var12;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserData$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
            var1 = {'no': 1, 'name': 'linked_users', 'kind': 'map', 'K': 6};
            var6 = {};
            var9 = 'message';
            var6['kind'] = var9;
            var8 = function T() {
                var1 = _closure1_slot25;
                return var1;
            };
            var6['T'] = var8;
            var1['V'] = var6;
            var6 = new Array(12);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'safety_feature_limits', 'kind': 'map', 'K': 13};
            var8 = {};
            var8['kind'] = var9;
            var10 = function T() {
                var1 = _closure1_slot27;
                return var1;
            };
            var8['T'] = var10;
            var1['V'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'safety_flags', 'kind': 'map', 'K': 13};
            var8 = {};
            var8['kind'] = var9;
            var9 = function T() {
                var1 = _closure1_slot28;
                return var1;
            };
            var8['T'] = var9;
            var1['V'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'quest', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot29;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'primary_guild', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot21;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'cross_platform_restriction', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot24;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'collectibles', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot20;
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
                var1 = _closure1_slot30;
                return var1;
            };
            var1['T'] = var8;
            var6[8] = var1;
            var1 = {'no': 10, 'name': 'display_name_styles', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot19;
                return var1;
            };
            var1['T'] = var8;
            var6[9] = var1;
            var1 = {'no': 11, 'name': 'store_country', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot31;
                return var1;
            };
            var1['T'] = var8;
            var6[10] = var1;
            var1 = {'no': 12, 'name': 'restricted_schedule', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot23;
                return var1;
            };
            var1['T'] = var7;
            var6[11] = var1;
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
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
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
                if(!(var6 !== var5)) { _fun0036_ip = 89; continue _fun0036 }
case 208:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 89:
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
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0037_ip = 12; continue _fun0037 }
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
                if(!var3) { _fun0037_ip = 253; continue _fun0037 }
case 29:
                var3 = var20.tag;
                var7 = var3.bind(var20)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var17)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=937, default_jump_address=740, unsigned_min_value=1, unsigned_max_value=12) // Switch table: [713, 683, 653, 597, 541, 485, 429, 354, 298, 242, 186, 130];
case 158:
                var23 = _closure1_slot23;
                var22 = var23.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.restrictedSchedule;
                var32 = var23;
                var31 = var20;
                var29 = var19;
                var3 = var32[var22](var31, var30, var29, var28, var27);
                var1['restrictedSchedule'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0037_ip = 254; continue _fun0037;
case 189:
                var25 = _closure1_slot31;
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
                _fun0037_ip = 254; continue _fun0037;
case 255:
                var25 = _closure1_slot19;
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
                _fun0037_ip = 254; continue _fun0037;
case 256:
                var25 = _closure1_slot30;
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
                _fun0037_ip = 254; continue _fun0037;
case 257:
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
                _fun0037_ip = 254; continue _fun0037;
case 258:
                var25 = _closure1_slot20;
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
                _fun0037_ip = 254; continue _fun0037;
case 259:
                var25 = _closure1_slot24;
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
                _fun0037_ip = 254; continue _fun0037;
case 206:
                var25 = _closure1_slot21;
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
                _fun0037_ip = 254; continue _fun0037;
case 260:
                var25 = _closure1_slot29;
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
                _fun0037_ip = 254; continue _fun0037;
case 261:
                var23 = var2.binaryReadMap3;
                var3 = var1.safetyFlags;
                var3 = var23.bind(var2)(var3, var20, var19);
                var22 = var5;
                var21 = var4;
                _fun0037_ip = 254; continue _fun0037;
case 262:
                var23 = var2.binaryReadMap2;
                var3 = var1.safetyFeatureLimits;
                var3 = var23.bind(var2)(var3, var20, var19);
                var22 = var5;
                var21 = var4;
                _fun0037_ip = 254; continue _fun0037;
case 263:
                var23 = var2.binaryReadMap1;
                var3 = var1.linkedUsers;
                var3 = var23.bind(var2)(var3, var20, var19);
                var22 = var5;
                var21 = var4;
                _fun0037_ip = 254; continue _fun0037;
case 55:
                var23 = var19.readUnknownField;
                if(!(var12 !== var23)) { _fun0037_ip = 264; continue _fun0037 }
case 119:
                var3 = var20.skip;
                var3 = var3.bind(var20)(var7);
                var22 = var23;
                var21 = var3;
                if(!(var13 !== var23)) { _fun0037_ip = 254; continue _fun0037 }
case 265:
                var25 = var23;
                if(!(var14 === var23)) { _fun0037_ip = 266; continue _fun0037 }
case 267:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var15];
                var24 = var26.bind(var17)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 266:
                var31 = var2.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var8;
                var28 = var7;
                var27 = var3;
                var24 = var32[var25](var31, var30, var29, var28, var27, var26);
                var22 = var23;
                var21 = var3;
case 254:
                var3 = var20.pos;
                var5 = var22;
                var4 = var21;
                if(var3 < var18) { _fun0037_ip = 29; continue _fun0037 }
case 253:
                return var1;
case 264:
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
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
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
                if(!var3) { _fun0038_ip = 268; continue _fun0038 }
case 269:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0038_ip = 99; continue _fun0038 }
case 4:
                if(!(var10 !== var3)) { _fun0038_ip = 270; continue _fun0038 }
case 271:
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
case 270:
                var15 = _closure1_slot25;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0038_ip = 240; continue _fun0038;
case 99:
                var3 = var13.fixed64;
                var15 = var3.bind(var13)();
                var3 = var15.toString;
                var7 = var3.bind(var15)();
                var14 = var5;
case 240:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0038_ip = 269; continue _fun0038 }
case 268:
                var5 = null;
                var7 = var5 != var6;
                var3 = '0';
                if(!var7) { _fun0038_ip = 272; continue _fun0038 }
case 252:
                var3 = var6;
case 272:
                if(!(var5 == var4)) { _fun0038_ip = 63; continue _fun0038 }
case 243:
                var5 = _closure1_slot25;
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
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
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
                if(!var5) { _fun0039_ip = 146; continue _fun0039 }
case 269:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0039_ip = 99; continue _fun0039 }
case 4:
                if(!(var10 !== var5)) { _fun0039_ip = 270; continue _fun0039 }
case 271:
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
case 270:
                var15 = _closure1_slot27;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0039_ip = 171; continue _fun0039;
case 99:
                var5 = var13.uint32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 171:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0039_ip = 269; continue _fun0039 }
case 146:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0039_ip = 105; continue _fun0039 }
case 273:
                var4 = var6;
case 105:
                if(!(var5 == var3)) { _fun0039_ip = 243; continue _fun0039 }
case 274:
                var5 = _closure1_slot27;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 243:
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
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
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
                if(!var5) { _fun0040_ip = 146; continue _fun0040 }
case 269:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0040_ip = 99; continue _fun0040 }
case 4:
                if(!(var10 !== var5)) { _fun0040_ip = 270; continue _fun0040 }
case 271:
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
case 270:
                var15 = _closure1_slot28;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0040_ip = 171; continue _fun0040;
case 99:
                var5 = var13.uint32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 171:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0040_ip = 269; continue _fun0040 }
case 146:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0040_ip = 105; continue _fun0040 }
case 273:
                var4 = var6;
case 105:
                if(!(var5 == var3)) { _fun0040_ip = 243; continue _fun0040 }
case 274:
                var5 = _closure1_slot28;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 243:
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
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
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
                if(!var8) { _fun0041_ip = 275; continue _fun0041 }
case 276:
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
                var15 = _closure1_slot25;
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
                if(var9 < var8) { _fun0041_ip = 276; continue _fun0041 }
case 275:
                var10 = var13.Object;
                var9 = var10.keys;
                var8 = var5.safetyFeatureLimits;
                var10 = var9.bind(var10)(var8);
                var8 = var10.length;
                var8 = var12 < var8;
                var9 = 0;
                if(!var8) { _fun0041_ip = 277; continue _fun0041 }
case 185:
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
                var15 = _closure1_slot27;
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
                if(var9 < var8) { _fun0041_ip = 185; continue _fun0041 }
case 277:
                var10 = var13.Object;
                var9 = var10.keys;
                var8 = var5.safetyFlags;
                var10 = var9.bind(var10)(var8);
                var8 = var10.length;
                var8 = var12 < var8;
                var9 = 3;
                var12 = 0;
                if(!var8) { _fun0041_ip = 121; continue _fun0041 }
case 278:
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
                var15 = _closure1_slot28;
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
                if(var12 < var8) { _fun0041_ip = 278; continue _fun0041 }
case 121:
                var8 = var5.quest;
                if(!var8) { _fun0041_ip = 279; continue _fun0041 }
case 280:
                var11 = _closure1_slot29;
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
case 279:
                var8 = var5.primaryGuild;
                if(!var8) { _fun0041_ip = 281; continue _fun0041 }
case 282:
                var11 = _closure1_slot21;
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
case 281:
                var8 = var5.crossPlatformRestriction;
                if(!var8) { _fun0041_ip = 283; continue _fun0041 }
case 284:
                var11 = _closure1_slot24;
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
case 283:
                var8 = var5.collectibles;
                if(!var8) { _fun0041_ip = 285; continue _fun0041 }
case 286:
                var11 = _closure1_slot20;
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
case 285:
                var8 = var5.safetyState;
                if(!var8) { _fun0041_ip = 287; continue _fun0041 }
case 288:
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
case 287:
                var8 = var5.premiumState;
                if(!var8) { _fun0041_ip = 289; continue _fun0041 }
case 290:
                var11 = _closure1_slot30;
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
case 289:
                var8 = var5.displayNameStyles;
                if(!var8) { _fun0041_ip = 291; continue _fun0041 }
case 292:
                var11 = _closure1_slot19;
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
case 291:
                var8 = var5.storeCountry;
                if(!var8) { _fun0041_ip = 293; continue _fun0041 }
case 294:
                var11 = _closure1_slot31;
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
case 293:
                var8 = var5.restrictedSchedule;
                if(!var8) { _fun0041_ip = 295; continue _fun0041 }
case 296:
                var11 = _closure1_slot23;
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
case 295:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0041_ip = 297; continue _fun0041 }
case 298:
                if(!(var6 == var3)) { _fun0041_ip = 299; continue _fun0041 }
case 300:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 299:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 297:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var11 = var4 instanceof Object ? var4 : var5;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function LinkedUser$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
            var6 = new Array(6);
            var1 = {'no': 1, 'name': 'user_id', 'kind': 'scalar', 'T': 6};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'link_type', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot11;
                var1 = ['discord_protos.users.v1.UserLinkType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'link_status', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot12;
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
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
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
                if(!(var6 !== var5)) { _fun0042_ip = 301; continue _fun0042 }
case 15:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 301:
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
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0043_ip = 12; continue _fun0043 }
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
                if(!var2) { _fun0043_ip = 115; continue _fun0043 }
case 302:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var7);
                var30 = var2[var5];
                var29 = var2[var6];
                if(!(var6 !== var30)) { _fun0043_ip = 136; continue _fun0043 }
case 165:
                if(!(var7 !== var30)) { _fun0043_ip = 160; continue _fun0043 }
case 167:
                if(!(var8 !== var30)) { _fun0043_ip = 303; continue _fun0043 }
case 304:
                if(!(var9 !== var30)) { _fun0043_ip = 305; continue _fun0043 }
case 306:
                if(!(var10 !== var30)) { _fun0043_ip = 307; continue _fun0043 }
case 199:
                if(!(var14 !== var30)) { _fun0043_ip = 308; continue _fun0043 }
case 228:
                var24 = var20.readUnknownField;
                if(!(var11 !== var24)) { _fun0043_ip = 309; continue _fun0043 }
case 100:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var29);
                var23 = var24;
                var22 = var2;
                if(!(var12 !== var24)) { _fun0043_ip = 310; continue _fun0043 }
case 311:
                var26 = var24;
                if(!(var13 === var24)) { _fun0043_ip = 312; continue _fun0043 }
case 133:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var14];
                var25 = var27.bind(var17)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 312:
                var35 = var19.typeName;
                var36 = undefined;
                var34 = var1;
                var33 = var30;
                var32 = var29;
                var31 = var2;
                var25 = var36[var26](var35, var34, var33, var32, var31, var30);
                var23 = var24;
                var22 = var2;
                _fun0043_ip = 310; continue _fun0043;
case 309:
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
case 308:
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
                _fun0043_ip = 310; continue _fun0043;
case 307:
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
                _fun0043_ip = 310; continue _fun0043;
case 305:
                var2 = var21.fixed64;
                var24 = var2.bind(var21)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var1['requestorId'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0043_ip = 310; continue _fun0043;
case 303:
                var2 = var21.int32;
                var2 = var2.bind(var21)();
                var1['linkStatus'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0043_ip = 310; continue _fun0043;
case 160:
                var2 = var21.int32;
                var2 = var2.bind(var21)();
                var1['linkType'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0043_ip = 310; continue _fun0043;
case 136:
                var2 = var21.fixed64;
                var24 = var2.bind(var21)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var1['userId'] = var2;
                var23 = var4;
                var22 = var3;
case 310:
                var2 = var21.pos;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0043_ip = 302; continue _fun0043 }
case 115:
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
                var3 = var5.userId;
                var4 = '0';
                if(!(var4 !== var3)) { _fun0044_ip = 59; continue _fun0044 }
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
                if(!(var6 !== var3)) { _fun0044_ip = 142; continue _fun0044 }
case 313:
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
case 142:
                var3 = var5.linkStatus;
                if(!(var6 !== var3)) { _fun0044_ip = 168; continue _fun0044 }
case 171:
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
case 168:
                var3 = var5.requestorId;
                if(!(var4 !== var3)) { _fun0044_ip = 314; continue _fun0044 }
case 110:
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
case 314:
                var3 = var5.createdAt;
                if(!var3) { _fun0044_ip = 67; continue _fun0044 }
case 315:
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
                if(!var3) { _fun0044_ip = 278; continue _fun0044 }
case 316:
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
case 278:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0044_ip = 317; continue _fun0044 }
case 318:
                var2 = 1;
                if(!(var2 == var4)) { _fun0044_ip = 319; continue _fun0044 }
case 320:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 319:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 317:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var10 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot25 = var10;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function RateLimitData$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
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
                if(!(var6 !== var5)) { _fun0045_ip = 182; continue _fun0045 }
case 183:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 182:
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
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0046_ip = 12; continue _fun0046 }
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
                if(!var2) { _fun0046_ip = 321; continue _fun0046 }
case 29:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0046_ip = 322; continue _fun0046 }
case 122:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0046_ip = 252; continue _fun0046 }
case 18:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0046_ip = 112; continue _fun0046 }
case 24:
                var23 = var21;
                if(!(var10 === var21)) { _fun0046_ip = 43; continue _fun0046 }
case 245:
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
                _fun0046_ip = 112; continue _fun0046;
case 252:
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
case 322:
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
case 112:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0046_ip = 29; continue _fun0046 }
case 321:
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
                var2 = arg3;
                var3 = var5.limitExpiry;
                if(!var3) { _fun0047_ip = 203; continue _fun0047 }
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
case 203:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0047_ip = 323; continue _fun0047 }
case 20:
                var2 = 1;
                if(!(var2 == var4)) { _fun0047_ip = 102; continue _fun0047 }
case 22:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 102:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 323:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var9 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot26 = var9;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function FeatureLimits$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
            var1 = {'no': 1, 'name': 'map', 'kind': 'map', 'K': 13};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot26;
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
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
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
                if(!(var6 !== var5)) { _fun0048_ip = 186; continue _fun0048 }
case 324:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 186:
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
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0049_ip = 12; continue _fun0049 }
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
                if(!var2) { _fun0049_ip = 325; continue _fun0049 }
case 184:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0049_ip = 256; continue _fun0049 }
case 186:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0049_ip = 274; continue _fun0049 }
case 187:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0049_ip = 326; continue _fun0049 }
case 188:
                var22 = var20;
                if(!(var10 === var20)) { _fun0049_ip = 189; continue _fun0049 }
case 190:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 189:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0049_ip = 326; continue _fun0049;
case 274:
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
case 256:
                var20 = var15.binaryReadMap1;
                var2 = var1.map;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 326:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0049_ip = 184; continue _fun0049 }
case 325:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
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
                if(!var5) { _fun0050_ip = 146; continue _fun0050 }
case 269:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0050_ip = 99; continue _fun0050 }
case 4:
                if(!(var10 !== var5)) { _fun0050_ip = 270; continue _fun0050 }
case 271:
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
case 270:
                var15 = _closure1_slot26;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0050_ip = 171; continue _fun0050;
case 99:
                var5 = var13.uint32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 171:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0050_ip = 269; continue _fun0050 }
case 146:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0050_ip = 105; continue _fun0050 }
case 273:
                var4 = var6;
case 105:
                if(!(var5 == var3)) { _fun0050_ip = 243; continue _fun0050 }
case 274:
                var5 = _closure1_slot26;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 243:
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
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
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
                if(!var8) { _fun0051_ip = 327; continue _fun0051 }
case 328:
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
                var14 = _closure1_slot26;
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
                if(var10 < var8) { _fun0051_ip = 328; continue _fun0051 }
case 327:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0051_ip = 329; continue _fun0051 }
case 330:
                if(!(var6 == var3)) { _fun0051_ip = 331; continue _fun0051 }
case 103:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 331:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 329:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var8 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot27 = var8;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SafetyFlag$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
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
                if(!(var6 !== var5)) { _fun0052_ip = 182; continue _fun0052 }
case 183:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 182:
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
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0053_ip = 12; continue _fun0053 }
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
                if(!var2) { _fun0053_ip = 321; continue _fun0053 }
case 29:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0053_ip = 322; continue _fun0053 }
case 122:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0053_ip = 252; continue _fun0053 }
case 18:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0053_ip = 112; continue _fun0053 }
case 24:
                var23 = var21;
                if(!(var10 === var21)) { _fun0053_ip = 43; continue _fun0053 }
case 245:
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
                _fun0053_ip = 112; continue _fun0053;
case 252:
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
case 322:
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
case 112:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0053_ip = 29; continue _fun0053 }
case 321:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.flagExpiry;
                if(!var3) { _fun0054_ip = 203; continue _fun0054 }
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
case 203:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0054_ip = 323; continue _fun0054 }
case 20:
                var2 = 1;
                if(!(var2 == var4)) { _fun0054_ip = 102; continue _fun0054 }
case 22:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 102:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 323:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var7 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot28 = var7;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildShardingConfig$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
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
                if(!(var6 !== var5)) { _fun0055_ip = 122; continue _fun0055 }
case 123:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 122:
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
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0056_ip = 12; continue _fun0056 }
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
                if(!var2) { _fun0056_ip = 194; continue _fun0056 }
case 332:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0056_ip = 333; continue _fun0056 }
case 301:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0056_ip = 145; continue _fun0056 }
case 165:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0056_ip = 334; continue _fun0056 }
case 218:
                var25 = var23;
                if(!(var11 === var23)) { _fun0056_ip = 335; continue _fun0056 }
case 30:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 335:
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
                _fun0056_ip = 334; continue _fun0056;
case 145:
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
case 333:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0056_ip = 225; continue _fun0056 }
case 336:
                var23 = var1.shards;
                var22 = var23.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0056_ip = 334; continue _fun0056;
case 225:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0056_ip = 334; continue _fun0056 }
case 337:
                var24 = var1.shards;
                var23 = var24.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0056_ip = 337; continue _fun0056 }
case 334:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0056_ip = 332; continue _fun0056 }
case 194:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.shards;
                var2 = var2.length;
                if(!var2) { _fun0057_ip = 338; continue _fun0057 }
case 132:
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
                if(!var2) { _fun0057_ip = 304; continue _fun0057 }
case 62:
                var4 = var1.int32;
                var2 = var5.shards;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.shards;
                var2 = var2.length;
                if(var3 < var2) { _fun0057_ip = 62; continue _fun0057 }
case 304:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 338:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0057_ip = 222; continue _fun0057 }
case 99:
                var2 = 1;
                if(!(var2 == var4)) { _fun0057_ip = 339; continue _fun0057 }
case 100:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 339:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 222:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var6 = var4 instanceof Object ? var4 : var5;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function QuestMetadata$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
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
                if(!(var6 !== var5)) { _fun0058_ip = 340; continue _fun0058 }
case 161:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 340:
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
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0059_ip = 12; continue _fun0059 }
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
                if(!var2) { _fun0059_ip = 39; continue _fun0059 }
case 184:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0059_ip = 256; continue _fun0059 }
case 186:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0059_ip = 274; continue _fun0059 }
case 187:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0059_ip = 45; continue _fun0059 }
case 188:
                var22 = var20;
                if(!(var10 === var20)) { _fun0059_ip = 189; continue _fun0059 }
case 190:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 189:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0059_ip = 45; continue _fun0059;
case 274:
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
case 256:
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var1['questsCompleted'] = var2;
                var19 = var4;
                var18 = var3;
case 45:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0059_ip = 184; continue _fun0059 }
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
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.questsCompleted;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0060_ip = 29; continue _fun0060 }
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
                if(!(var2 !== var4)) { _fun0060_ip = 30; continue _fun0060 }
case 159:
                var2 = 1;
                if(!(var2 == var4)) { _fun0060_ip = 341; continue _fun0060 }
case 342:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 341:
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
    var42 = var5;
    var4 = new var42[var4](var41);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot29 = var5;
    var4 = var36[var2];
    var4 = var35.bind(var1)(var4);
    var38 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PremiumState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
            var1 = {'no': 1, 'name': 'premium_source', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot13;
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
                var2 = _closure1_slot14;
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
                var2 = _closure1_slot15;
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
            _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
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
                if(!(var6 !== var5)) { _fun0061_ip = 11; continue _fun0061 }
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
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0062_ip = 12; continue _fun0062 }
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
                if(!var2) { _fun0062_ip = 196; continue _fun0062 }
case 29:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0062_ip = 343; continue _fun0062 }
case 122:
                if(!(var7 !== var27)) { _fun0062_ip = 344; continue _fun0062 }
case 187:
                if(!(var8 !== var27)) { _fun0062_ip = 180; continue _fun0062 }
case 41:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0062_ip = 345; continue _fun0062 }
case 22:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0062_ip = 346; continue _fun0062 }
case 247:
                var23 = var21;
                if(!(var11 === var21)) { _fun0062_ip = 347; continue _fun0062 }
case 150:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 347:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0062_ip = 346; continue _fun0062;
case 345:
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
case 180:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['premiumSubscriptionGroupRole'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0062_ip = 346; continue _fun0062;
case 344:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['premiumSubscriptionType'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0062_ip = 346; continue _fun0062;
case 343:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['premiumSource'] = var2;
                var20 = var4;
                var19 = var3;
case 346:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0062_ip = 29; continue _fun0062 }
case 196:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.premiumSource;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0063_ip = 29; continue _fun0063 }
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
                if(!(var3 !== var2)) { _fun0063_ip = 30; continue _fun0063 }
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
                if(!(var3 !== var2)) { _fun0063_ip = 32; continue _fun0063 }
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
                if(!(var2 !== var4)) { _fun0063_ip = 34; continue _fun0063 }
case 348:
                var2 = 1;
                if(!(var2 == var4)) { _fun0063_ip = 256; continue _fun0063 }
case 251:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 256:
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
    var4 = var4.bind(var1)(var38);
    var38 = var4.prototype;
    var38 = Object.create(var38, {constructor: {value: var4}});
    var42 = var38;
    var4 = new var42[var4](var41);
    var4 = var4 instanceof Object ? var4 : var38;
    var _closure1_slot30 = var4;
    var2 = var36[var2];
    var2 = var35.bind(var1)(var2);
    var38 = var2.MessageType;
    var2 = function(arg1) {
        var4 = function StoreCountry$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot32;
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
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
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
                if(!(var6 !== var5)) { _fun0064_ip = 122; continue _fun0064 }
case 123:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 122:
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
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0065_ip = 12; continue _fun0065 }
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
                if(!var2) { _fun0065_ip = 25; continue _fun0065 }
case 29:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0065_ip = 349; continue _fun0065 }
case 122:
                if(!(var7 !== var27)) { _fun0065_ip = 242; continue _fun0065 }
case 187:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0065_ip = 243; continue _fun0065 }
case 20:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0065_ip = 154; continue _fun0065 }
case 245:
                var23 = var21;
                if(!(var10 === var21)) { _fun0065_ip = 246; continue _fun0065 }
case 247:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 246:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0065_ip = 154; continue _fun0065;
case 243:
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
case 242:
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
                _fun0065_ip = 154; continue _fun0065;
case 349:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['country'] = var2;
                var20 = var4;
                var19 = var3;
case 154:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0065_ip = 29; continue _fun0065 }
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
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var4 = var5.country;
                var3 = '';
                if(!(var3 !== var4)) { _fun0066_ip = 123; continue _fun0066 }
case 132:
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
case 123:
                var3 = var5.setAt;
                if(!var3) { _fun0066_ip = 133; continue _fun0066 }
case 134:
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
case 133:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0066_ip = 350; continue _fun0066 }
case 201:
                var2 = 1;
                if(!(var2 == var4)) { _fun0066_ip = 351; continue _fun0066 }
case 352:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 351:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 350:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var38);
    var38 = var2.prototype;
    var38 = Object.create(var38, {constructor: {value: var2}});
    var42 = var38;
    var2 = new var42[var2](var41);
    var2 = var2 instanceof Object ? var2 : var38;
    var _closure1_slot31 = var2;
    var34 = var36[var34];
    var36 = var35.bind(var1)(var34);
    var35 = var36.fileFinishedImporting;
    var34 = '../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx';
    var34 = var35.bind(var36)(var34);
    var3['DayOfWeek'] = var33;
    var3['DisplayNameFont'] = var32;
    var3['DisplayNameEffect'] = var31;
    var3['UserLinkType'] = var30;
    var3['UserLinkStatus'] = var29;
    var3['RateLimitTier'] = var28;
    var3['FeatureLimitName'] = var27;
    var3['SafetyFlagType'] = var26;
    var3['PremiumSource'] = var25;
    var3['PremiumSubscriptionType'] = var24;
    var3['PremiumSubscriptionGroupRole'] = var23;
    var3['TimeOfDay'] = var22;
    var3['User'] = var21;
    var3['MediumUser'] = var20;
    var3['UserAvatarDecoration'] = var19;
    var3['UserNameplate'] = var18;
    var3['DisplayNameStyles'] = var17;
    var3['UserCollectibles'] = var16;
    var3['UserPrimaryGuild'] = var15;
    var3['ScheduleRule'] = var14;
    var3['RestrictedSchedule'] = var13;
    var3['CrossPlatformRestriction'] = var12;
    var3['UserData'] = var11;
    var3['LinkedUser'] = var10;
    var3['RateLimitData'] = var9;
    var3['FeatureLimits'] = var8;
    var3['SafetyFlag'] = var7;
    var3['GuildShardingConfig'] = var6;
    var3['QuestMetadata'] = var5;
    var3['PremiumState'] = var4;
    var3['StoreCountry'] = var2;
    return var1;
})();
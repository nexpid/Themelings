// discord_common/js/packages/protos/discord_protos/users/v1/user.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var39 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var40 = dependencyMap;
    var _closure1_slot0 = var39;
    var _closure1_slot1 = var40;
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
            var1 = _closure1_slot37;
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
    var _closure1_slot36 = var1;
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
            _closure1_slot37 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var7 = 0;
    var2 = var40[var7];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var6 = 1;
    var2 = var40[var6];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var5 = 2;
    var2 = var40[var5];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var11 = 3;
    var2 = var40[var11];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var9 = 4;
    var2 = var40[var9];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var13 = 5;
    var2 = var40[var13];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var37 = {};
    var37['UNSPECIFIED'] = var7;
    var4 = 'UNSPECIFIED';
    var37[var7] = var4;
    var15 = 11;
    var37['DEFAULT'] = var15;
    var2 = 'DEFAULT';
    var37[var15] = var2;
    var37['BANGERS'] = var6;
    var2 = 'BANGERS';
    var37[var6] = var2;
    var37['BIO_RHYME'] = var5;
    var2 = 'BIO_RHYME';
    var37[var5] = var2;
    var37['CHERRY_BOMB'] = var11;
    var2 = 'CHERRY_BOMB';
    var37[var11] = var2;
    var37['CHICLE'] = var9;
    var2 = 'CHICLE';
    var37[var9] = var2;
    var37['COMPAGNON'] = var13;
    var2 = 'COMPAGNON';
    var37[var13] = var2;
    var12 = 6;
    var37['MUSEO_MODERNO'] = var12;
    var2 = 'MUSEO_MODERNO';
    var37[var12] = var2;
    var2 = 7;
    var37['NEO_CASTEL'] = var2;
    var8 = 'NEO_CASTEL';
    var37[var2] = var8;
    var17 = 8;
    var37['PIXELIFY'] = var17;
    var8 = 'PIXELIFY';
    var37[var17] = var8;
    var38 = 9;
    var37['RIBES'] = var38;
    var8 = 'RIBES';
    var37[var38] = var8;
    var16 = 10;
    var37['SINISTRE'] = var16;
    var8 = 'SINISTRE';
    var37[var16] = var8;
    var14 = 12;
    var37['ZILLA_SLAB'] = var14;
    var8 = 'ZILLA_SLAB';
    var37[var14] = var8;
    var _closure1_slot8 = var37;
    var36 = {};
    var36['UNSPECIFIED'] = var7;
    var36[var7] = var4;
    var36['SOLID'] = var6;
    var8 = 'SOLID';
    var36[var6] = var8;
    var36['GRADIENT'] = var5;
    var8 = 'GRADIENT';
    var36[var5] = var8;
    var36['NEON'] = var11;
    var8 = 'NEON';
    var36[var11] = var8;
    var36['TOON'] = var9;
    var8 = 'TOON';
    var36[var9] = var8;
    var36['POP'] = var13;
    var8 = 'POP';
    var36[var13] = var8;
    var36['GLOW'] = var12;
    var8 = 'GLOW';
    var36[var12] = var8;
    var _closure1_slot9 = var36;
    var35 = {};
    var35['USER_LINK_TYPE_UNSPECIFIED'] = var7;
    var8 = 'USER_LINK_TYPE_UNSPECIFIED';
    var35[var7] = var8;
    var35['PARENT'] = var6;
    var8 = 'PARENT';
    var35[var6] = var8;
    var35['CHILD'] = var5;
    var8 = 'CHILD';
    var35[var5] = var8;
    var _closure1_slot10 = var35;
    var34 = {};
    var34['USER_LINK_STATUS_UNSPECIFIED'] = var7;
    var8 = 'USER_LINK_STATUS_UNSPECIFIED';
    var34[var7] = var8;
    var34['PENDING'] = var6;
    var8 = 'PENDING';
    var34[var6] = var8;
    var34['ACTIVE'] = var5;
    var8 = 'ACTIVE';
    var34[var5] = var8;
    var34['INACTIVE'] = var11;
    var8 = 'INACTIVE';
    var34[var11] = var8;
    var34['DECLINED'] = var9;
    var8 = 'DECLINED';
    var34[var9] = var8;
    var _closure1_slot11 = var34;
    var33 = {};
    var33['RATE_LIMIT_TIER_UNSPECIFIED'] = var7;
    var8 = 'RATE_LIMIT_TIER_UNSPECIFIED';
    var33[var7] = var8;
    var33['UNLIMITED'] = var6;
    var8 = 'UNLIMITED';
    var33[var6] = var8;
    var33['TIER_2'] = var5;
    var8 = 'TIER_2';
    var33[var5] = var8;
    var33['TIER_3'] = var11;
    var10 = 'TIER_3';
    var33[var11] = var10;
    var33['TIER_4'] = var9;
    var10 = 'TIER_4';
    var33[var9] = var10;
    var33['DISABLED'] = var13;
    var10 = 'DISABLED';
    var33[var13] = var10;
    var32 = {};
    var32['FEATURE_LIMIT_NAME_UNSPECIFIED'] = var7;
    var10 = 'FEATURE_LIMIT_NAME_UNSPECIFIED';
    var32[var7] = var10;
    var32['GUILD_MESSAGE_SEND'] = var6;
    var10 = 'GUILD_MESSAGE_SEND';
    var32[var6] = var10;
    var32['DM_SEND'] = var5;
    var10 = 'DM_SEND';
    var32[var5] = var10;
    var32['FRIEND_REQUEST'] = var11;
    var10 = 'FRIEND_REQUEST';
    var32[var11] = var10;
    var32['GUILD_CREATE'] = var9;
    var10 = 'GUILD_CREATE';
    var32[var9] = var10;
    var32['GUILD_JOIN'] = var13;
    var10 = 'GUILD_JOIN';
    var32[var13] = var10;
    var32['GUILD_TEXT_CHANNEL_CREATE'] = var12;
    var10 = 'GUILD_TEXT_CHANNEL_CREATE';
    var32[var12] = var10;
    var32['GUILD_UPLOAD_ATTACHMENT'] = var2;
    var10 = 'GUILD_UPLOAD_ATTACHMENT';
    var32[var2] = var10;
    var32['DM_UPLOAD_ATTACHMENT'] = var17;
    var10 = 'DM_UPLOAD_ATTACHMENT';
    var32[var17] = var10;
    var32['GDM_UPLOAD_ATTACHMENT'] = var38;
    var10 = 'GDM_UPLOAD_ATTACHMENT';
    var32[var38] = var10;
    var32['GDM_SEND'] = var16;
    var10 = 'GDM_SEND';
    var32[var16] = var10;
    var32['GUILD_VOICE_CHANNEL_CREATE'] = var15;
    var10 = 'GUILD_VOICE_CHANNEL_CREATE';
    var32[var15] = var10;
    var32['USER_PROFILE_EDIT'] = var14;
    var10 = 'USER_PROFILE_EDIT';
    var32[var14] = var10;
    var31 = {};
    var31['SAFETY_FLAG_TYPE_UNSPECIFIED'] = var7;
    var10 = 'SAFETY_FLAG_TYPE_UNSPECIFIED';
    var31[var7] = var10;
    var31['STRANGER_DANGER'] = var6;
    var10 = 'STRANGER_DANGER';
    var31[var6] = var10;
    var31['LIKELY_ATO'] = var5;
    var10 = 'LIKELY_ATO';
    var31[var5] = var10;
    var30 = {};
    var30['REASON_UNSPECIFIED'] = var7;
    var10 = 'REASON_UNSPECIFIED';
    var30[var7] = var10;
    var30['DISABLED_SUSPICIOUS_ACTIVITY'] = var6;
    var10 = 'DISABLED_SUSPICIOUS_ACTIVITY';
    var30[var6] = var10;
    var30['SMITE_REMOVE_EMAIL_VERIFICATION'] = var5;
    var10 = 'SMITE_REMOVE_EMAIL_VERIFICATION';
    var30[var5] = var10;
    var30['USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT'] = var11;
    var10 = 'USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT';
    var30[var11] = var10;
    var30['ACTIVE_ASSIGNMENT_COMPLETED'] = var9;
    var10 = 'ACTIVE_ASSIGNMENT_COMPLETED';
    var30[var9] = var10;
    var30['ACTIVE_ASSIGNMENT_CREATED'] = var13;
    var10 = 'ACTIVE_ASSIGNMENT_CREATED';
    var30[var13] = var10;
    var30['DEFERRED_ASSIGNMENT_CREATED'] = var12;
    var10 = 'DEFERRED_ASSIGNMENT_CREATED';
    var30[var12] = var10;
    var30['DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE'] = var2;
    var10 = 'DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE';
    var30[var2] = var10;
    var30['DEFERRED_ASSIGNMENT_CANCELLED'] = var17;
    var10 = 'DEFERRED_ASSIGNMENT_CANCELLED';
    var30[var17] = var10;
    var30['ASSIGNMENT_STATE_REPAIRED'] = var38;
    var10 = 'ASSIGNMENT_STATE_REPAIRED';
    var30[var38] = var10;
    var30['MANUAL_PERMANENT_BAN'] = var16;
    var10 = 'MANUAL_PERMANENT_BAN';
    var30[var16] = var10;
    var30['SAFETY_SYSTEM_UNBAN'] = var15;
    var10 = 'SAFETY_SYSTEM_UNBAN';
    var30[var15] = var10;
    var30['GENERIC_AUTOMATED_SAFETY_ACTION'] = var14;
    var10 = 'GENERIC_AUTOMATED_SAFETY_ACTION';
    var30[var14] = var10;
    var14 = 13;
    var30['GENERIC_MANUAL_SAFETY_ACTION'] = var14;
    var10 = 'GENERIC_MANUAL_SAFETY_ACTION';
    var30[var14] = var10;
    var _closure1_slot12 = var30;
    var29 = {};
    var29['ANNOTATION_UNSPECIFIED'] = var7;
    var10 = 'ANNOTATION_UNSPECIFIED';
    var29[var7] = var10;
    var29['SPAMMER'] = var6;
    var10 = 'SPAMMER';
    var29[var6] = var10;
    var29['SELF_DELETED'] = var5;
    var10 = 'SELF_DELETED';
    var29[var5] = var10;
    var29['SELF_DISABLED'] = var11;
    var10 = 'SELF_DISABLED';
    var29[var11] = var10;
    var29['UNDERAGE_DELETED'] = var9;
    var10 = 'UNDERAGE_DELETED';
    var29[var9] = var10;
    var29['SAFETY_POLICY_VIOLATION'] = var13;
    var10 = 'SAFETY_POLICY_VIOLATION';
    var29[var13] = var10;
    var29['INACTIVITY_DELETED'] = var12;
    var10 = 'INACTIVITY_DELETED';
    var29[var12] = var10;
    var29['GENERIC_DELETED'] = var2;
    var10 = 'GENERIC_DELETED';
    var29[var2] = var10;
    var _closure1_slot13 = var29;
    var28 = {};
    var28['NONE_UNSPECIFIED'] = var7;
    var10 = 'NONE_UNSPECIFIED';
    var28[var7] = var10;
    var28['SUBSCRIPTION'] = var6;
    var12 = 'SUBSCRIPTION';
    var28[var6] = var12;
    var28['FRACTIONAL_NITRO'] = var5;
    var12 = 'FRACTIONAL_NITRO';
    var28[var5] = var12;
    var28['REVERSE_TRIAL'] = var11;
    var12 = 'REVERSE_TRIAL';
    var28[var11] = var12;
    var28['SUBSCRIPTION_GROUP'] = var9;
    var12 = 'SUBSCRIPTION_GROUP';
    var28[var9] = var12;
    var _closure1_slot14 = var28;
    var27 = {};
    var27['NONE_UNSPECIFIED'] = var7;
    var27[var7] = var10;
    var27['BOOST_ONLY'] = var6;
    var10 = 'BOOST_ONLY';
    var27[var6] = var10;
    var27['TIER_0'] = var5;
    var10 = 'TIER_0';
    var27[var5] = var10;
    var27['TIER_1'] = var11;
    var10 = 'TIER_1';
    var27[var11] = var10;
    var27['TIER_2'] = var9;
    var27[var9] = var8;
    var _closure1_slot15 = var27;
    var26 = {};
    var26['UNSPECIFIED'] = var7;
    var26[var7] = var4;
    var26['PRIMARY'] = var6;
    var4 = 'PRIMARY';
    var26[var6] = var4;
    var26['MEMBER'] = var5;
    var4 = 'MEMBER';
    var26[var5] = var4;
    var _closure1_slot16 = var26;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function User$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
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
                var1 = 6;
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
                var1 = 6;
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
                var1 = _closure1_slot33;
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
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
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
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 12; continue _fun0004 }
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
                var15 = 7;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 6;
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = var20.tag;
                var7 = var3.bind(var20)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var17)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=905, default_jump_address=708, unsigned_min_value=1, unsigned_max_value=13) // Switch table: [675, 649, 623, 548, 521, 485, 708, 410, 354, 298, 242, 186, 130];
case 16:
                var23 = _closure1_slot19;
                var22 = var23.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.displayNameStyles;
                var32 = var23;
                var31 = var20;
                var29 = var19;
                var3 = var32[var22](var31, var30, var29, var28, var27);
                var1['displayNameStyles'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 17; continue _fun0004;
case 18:
                var25 = _closure1_slot33;
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
                _fun0004_ip = 17; continue _fun0004;
case 19:
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
                _fun0004_ip = 17; continue _fun0004;
case 20:
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
                _fun0004_ip = 17; continue _fun0004;
case 21:
                var25 = _closure1_slot17;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.avatarDecorationData;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['avatarDecorationData'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 17; continue _fun0004;
case 22:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.StringValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.globalName;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['globalName'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 17; continue _fun0004;
case 23:
                var3 = var20.uint64;
                var23 = var3.bind(var20)();
                var3 = var23.toString;
                var3 = var3.bind(var23)();
                var1['publicFlags'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 17; continue _fun0004;
case 24:
                var3 = var20.bool;
                var3 = var3.bind(var20)();
                var1['bot'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 17; continue _fun0004;
case 25:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.StringValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.avatar;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['avatar'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 17; continue _fun0004;
case 26:
                var3 = var20.string;
                var3 = var3.bind(var20)();
                var1['discriminator'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 17; continue _fun0004;
case 27:
                var3 = var20.string;
                var3 = var3.bind(var20)();
                var1['username'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 17; continue _fun0004;
case 28:
                var3 = var20.uint64;
                var23 = var3.bind(var20)();
                var3 = var23.toString;
                var3 = var3.bind(var23)();
                var1['id'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 17; continue _fun0004;
case 29:
                var23 = var19.readUnknownField;
                if(!(var12 !== var23)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var3 = var20.skip;
                var3 = var3.bind(var20)(var7);
                var22 = var23;
                var21 = var3;
                if(!(var13 !== var23)) { _fun0004_ip = 17; continue _fun0004 }
case 32:
                var25 = var23;
                if(!(var14 === var23)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var15];
                var24 = var26.bind(var17)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 33:
                var31 = var2.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var8;
                var28 = var7;
                var27 = var3;
                var24 = var32[var25](var31, var30, var29, var28, var27, var26);
                var22 = var23;
                var21 = var3;
case 17:
                var3 = var20.pos;
                var5 = var22;
                var4 = var21;
                if(var3 < var18) { _fun0004_ip = 15; continue _fun0004 }
case 14:
                return var1;
case 30:
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
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.id;
                var6 = '0';
                if(!(var6 !== var2)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
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
case 35:
                var2 = var5.username;
                var4 = '';
                if(!(var4 !== var2)) { _fun0005_ip = 37; continue _fun0005 }
case 38:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 7;
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
case 37:
                var2 = var5.discriminator;
                if(!(var4 !== var2)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
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
case 39:
                var2 = var5.avatar;
                if(!var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 6;
                var2 = var12[var2];
                var9 = undefined;
                var2 = var11.bind(var9)(var2);
                var8 = var2.StringValue;
                var7 = var8.internalBinaryWrite;
                var4 = var5.avatar;
                var10 = var1.tag;
                var2 = 7;
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
case 41:
                var4 = var5.bot;
                var2 = false;
                if(!(var2 !== var4)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
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
case 43:
                var4 = var5.publicFlags;
                if(!(var6 !== var4)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 7;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var6);
                var4 = var4.WireType;
                var6 = var4.Varint;
                var4 = 6;
                var7 = var7.bind(var1)(var4, var6);
                var6 = var7.uint64;
                var4 = var5.publicFlags;
                var4 = var6.bind(var7)(var4);
case 45:
                var4 = var5.globalName;
                if(!var4) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 6;
                var4 = var12[var4];
                var9 = undefined;
                var4 = var11.bind(var9)(var4);
                var8 = var4.StringValue;
                var7 = var8.internalBinaryWrite;
                var6 = var5.globalName;
                var10 = var1.tag;
                var4 = 7;
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
case 47:
                var4 = var5.avatarDecorationData;
                if(!var4) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var8 = _closure1_slot17;
                var7 = var8.internalBinaryWrite;
                var6 = var5.avatarDecorationData;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 7;
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
case 49:
                var4 = var5.primaryGuild;
                if(!var4) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var8 = _closure1_slot21;
                var7 = var8.internalBinaryWrite;
                var6 = var5.primaryGuild;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 7;
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
case 51:
                var4 = var5.collectibles;
                if(!var4) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                var8 = _closure1_slot20;
                var7 = var8.internalBinaryWrite;
                var6 = var5.collectibles;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 7;
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
case 53:
                var4 = var5.safetyState;
                if(!var4) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                var8 = _closure1_slot33;
                var7 = var8.internalBinaryWrite;
                var6 = var5.safetyState;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 7;
                var9 = var9[var4];
                var4 = undefined;
                var4 = var11.bind(var4)(var9);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 12;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 55:
                var4 = var5.displayNameStyles;
                if(!var4) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                var8 = _closure1_slot19;
                var7 = var8.internalBinaryWrite;
                var6 = var5.displayNameStyles;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 7;
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
case 57:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                var2 = 1;
                if(!(var2 == var4)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 61:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 59:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var25 = var4 instanceof Object ? var4 : var5;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function MediumUser$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
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
                var1 = 6;
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
                var1 = 6;
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
                var1 = 6;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
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
                var7 = 7;
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
                var22 = arg1;
                var21 = arg3;
                var1 = arg4;
                var20 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 12; continue _fun0007 }
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
                var16 = 6;
                var15 = 7;
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
                if(!var2) { _fun0007_ip = 34; continue _fun0007 }
case 63:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
                if(!(var7 !== var31)) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                if(!(var8 !== var31)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
                if(!(var9 !== var31)) { _fun0007_ip = 70; continue _fun0007 }
case 71:
                if(!(var10 !== var31)) { _fun0007_ip = 72; continue _fun0007 }
case 73:
                if(!(var16 !== var31)) { _fun0007_ip = 45; continue _fun0007 }
case 74:
                if(!(var15 !== var31)) { _fun0007_ip = 75; continue _fun0007 }
case 76:
                if(!(var11 !== var31)) { _fun0007_ip = 77; continue _fun0007 }
case 78:
                var25 = var21.readUnknownField;
                if(!(var12 !== var25)) { _fun0007_ip = 79; continue _fun0007 }
case 80:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var13 !== var25)) { _fun0007_ip = 81; continue _fun0007 }
case 82:
                var27 = var25;
                if(!(var14 === var25)) { _fun0007_ip = 83; continue _fun0007 }
case 84:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var15];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 83:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0007_ip = 81; continue _fun0007;
case 79:
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
case 77:
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
                _fun0007_ip = 81; continue _fun0007;
case 75:
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
                _fun0007_ip = 81; continue _fun0007;
case 45:
                var2 = var22.uint64;
                var25 = var2.bind(var22)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var1['flags'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 81; continue _fun0007;
case 72:
                var2 = var22.bool;
                var2 = var2.bind(var22)();
                var1['bot'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 81; continue _fun0007;
case 70:
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
                _fun0007_ip = 81; continue _fun0007;
case 68:
                var2 = var22.uint32;
                var2 = var2.bind(var22)();
                var1['discriminator'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 81; continue _fun0007;
case 66:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['username'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 81; continue _fun0007;
case 64:
                var2 = var22.fixed64;
                var25 = var2.bind(var22)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var1['id'] = var2;
                var24 = var4;
                var23 = var3;
case 81:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0007_ip = 63; continue _fun0007 }
case 34:
                return var1;
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
                if(!(var6 !== var2)) { _fun0008_ip = 35; continue _fun0008 }
case 36:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
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
case 35:
                var4 = var5.username;
                var2 = '';
                if(!(var2 !== var4)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
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
case 37:
                var4 = var5.discriminator;
                var2 = 0;
                if(!(var2 !== var4)) { _fun0008_ip = 85; continue _fun0008 }
case 78:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
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
case 85:
                var2 = var5.avatarHash;
                if(!var2) { _fun0008_ip = 86; continue _fun0008 }
case 87:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 6;
                var2 = var12[var2];
                var9 = undefined;
                var2 = var11.bind(var9)(var2);
                var8 = var2.StringValue;
                var7 = var8.internalBinaryWrite;
                var4 = var5.avatarHash;
                var10 = var1.tag;
                var2 = 7;
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
case 86:
                var4 = var5.bot;
                var2 = false;
                if(!(var2 !== var4)) { _fun0008_ip = 88; continue _fun0008 }
case 89:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
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
case 88:
                var4 = var5.flags;
                if(!(var6 !== var4)) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 7;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var6);
                var4 = var4.WireType;
                var6 = var4.Varint;
                var4 = 6;
                var7 = var7.bind(var1)(var4, var6);
                var6 = var7.uint64;
                var4 = var5.flags;
                var4 = var6.bind(var7)(var4);
case 90:
                var4 = var5.email;
                if(!var4) { _fun0008_ip = 92; continue _fun0008 }
case 93:
                var12 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = 6;
                var6 = var4[var6];
                var11 = undefined;
                var6 = var12.bind(var11)(var6);
                var8 = var6.StringValue;
                var7 = var8.internalBinaryWrite;
                var6 = var5.email;
                var10 = var1.tag;
                var9 = 7;
                var4 = var4[var9];
                var4 = var12.bind(var11)(var4);
                var4 = var4.WireType;
                var4 = var4.LengthDelimited;
                var9 = var10.bind(var1)(var9, var4);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 92:
                var4 = var5.phone;
                if(!var4) { _fun0008_ip = 94; continue _fun0008 }
case 95:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 6;
                var4 = var12[var4];
                var9 = undefined;
                var4 = var11.bind(var9)(var4);
                var8 = var4.StringValue;
                var7 = var8.internalBinaryWrite;
                var6 = var5.phone;
                var10 = var1.tag;
                var4 = 7;
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
case 94:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0008_ip = 96; continue _fun0008 }
case 97:
                var2 = 1;
                if(!(var2 == var4)) { _fun0008_ip = 98; continue _fun0008 }
case 99:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 98:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 96:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var24 = var4 instanceof Object ? var4 : var5;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserAvatarDecoration$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var6 = new Array(3);
            var1 = {'no': 1, 'name': 'asset', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'sku_id', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
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
                var1 = 6;
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0009_ip = 100; continue _fun0009 }
case 101:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
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
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0010_ip = 12; continue _fun0010 }
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
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0010_ip = 102; continue _fun0010 }
case 103:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0010_ip = 104; continue _fun0010 }
case 11:
                if(!(var7 !== var28)) { _fun0010_ip = 105; continue _fun0010 }
case 106:
                if(!(var8 !== var28)) { _fun0010_ip = 107; continue _fun0010 }
case 108:
                var22 = var18.readUnknownField;
                if(!(var9 !== var22)) { _fun0010_ip = 109; continue _fun0010 }
case 110:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var10 !== var22)) { _fun0010_ip = 111; continue _fun0010 }
case 112:
                var24 = var22;
                if(!(var11 === var22)) { _fun0010_ip = 113; continue _fun0010 }
case 114:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var12];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 113:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0010_ip = 111; continue _fun0010;
case 109:
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
case 107:
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
                _fun0010_ip = 111; continue _fun0010;
case 105:
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
                _fun0010_ip = 111; continue _fun0010;
case 104:
                var2 = var19.string;
                var2 = var2.bind(var19)();
                var1['asset'] = var2;
                var21 = var4;
                var20 = var3;
case 111:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0010_ip = 103; continue _fun0010 }
case 102:
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
                var2 = arg3;
                var4 = var5.asset;
                var3 = '';
                if(!(var3 !== var4)) { _fun0011_ip = 101; continue _fun0011 }
case 115:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
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
case 101:
                var3 = var5.skuId;
                if(!var3) { _fun0011_ip = 116; continue _fun0011 }
case 117:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 6;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.skuId;
                var9 = var1.tag;
                var3 = 7;
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
case 116:
                var3 = var5.expiresAt;
                if(!var3) { _fun0011_ip = 118; continue _fun0011 }
case 119:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 6;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt32Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.expiresAt;
                var9 = var1.tag;
                var3 = 7;
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
case 118:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0011_ip = 105; continue _fun0011 }
case 120:
                var2 = 1;
                if(!(var2 == var4)) { _fun0011_ip = 121; continue _fun0011 }
case 122:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 121:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 105:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var23 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot17 = var23;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserNameplate$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var6 = new Array(5);
            var1 = {'no': 1, 'name': 'asset', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'palette', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'sku_id', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
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
                var1 = 8;
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0012_ip = 11; continue _fun0012 }
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
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var22 = arg1;
                var21 = arg3;
                var1 = arg4;
                var20 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0013_ip = 12; continue _fun0013 }
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
                var16 = 6;
                var15 = 8;
                var14 = 7;
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
                if(!var2) { _fun0013_ip = 123; continue _fun0013 }
case 63:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0013_ip = 124; continue _fun0013 }
case 65:
                if(!(var7 !== var31)) { _fun0013_ip = 125; continue _fun0013 }
case 67:
                if(!(var8 !== var31)) { _fun0013_ip = 126; continue _fun0013 }
case 69:
                if(!(var9 !== var31)) { _fun0013_ip = 127; continue _fun0013 }
case 71:
                if(!(var10 !== var31)) { _fun0013_ip = 128; continue _fun0013 }
case 73:
                var25 = var21.readUnknownField;
                if(!(var11 !== var25)) { _fun0013_ip = 129; continue _fun0013 }
case 130:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var12 !== var25)) { _fun0013_ip = 131; continue _fun0013 }
case 132:
                var27 = var25;
                if(!(var13 === var25)) { _fun0013_ip = 133; continue _fun0013 }
case 134:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var14];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 133:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0013_ip = 131; continue _fun0013;
case 129:
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
case 128:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['label'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0013_ip = 131; continue _fun0013;
case 127:
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
                _fun0013_ip = 131; continue _fun0013;
case 126:
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
                _fun0013_ip = 131; continue _fun0013;
case 125:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['palette'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0013_ip = 131; continue _fun0013;
case 124:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['asset'] = var2;
                var24 = var4;
                var23 = var3;
case 131:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0013_ip = 63; continue _fun0013 }
case 123:
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
                var3 = var5.asset;
                var4 = '';
                if(!(var4 !== var3)) { _fun0014_ip = 101; continue _fun0014 }
case 115:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
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
case 101:
                var3 = var5.palette;
                if(!(var4 !== var3)) { _fun0014_ip = 135; continue _fun0014 }
case 136:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
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
case 135:
                var3 = var5.skuId;
                if(!var3) { _fun0014_ip = 137; continue _fun0014 }
case 138:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var3 = 6;
                var3 = var12[var3];
                var9 = undefined;
                var3 = var11.bind(var9)(var3);
                var8 = var3.UInt64Value;
                var7 = var8.internalBinaryWrite;
                var6 = var5.skuId;
                var10 = var1.tag;
                var3 = 7;
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
case 137:
                var3 = var5.expiresAt;
                if(!var3) { _fun0014_ip = 139; continue _fun0014 }
case 140:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var3 = 8;
                var3 = var12[var3];
                var9 = undefined;
                var3 = var11.bind(var9)(var3);
                var8 = var3.Timestamp;
                var7 = var8.internalBinaryWrite;
                var6 = var5.expiresAt;
                var10 = var1.tag;
                var3 = 7;
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
case 139:
                var3 = var5.label;
                if(!(var4 !== var3)) { _fun0014_ip = 141; continue _fun0014 }
case 142:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
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
case 141:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0014_ip = 143; continue _fun0014 }
case 144:
                var2 = 1;
                if(!(var2 == var4)) { _fun0014_ip = 93; continue _fun0014 }
case 145:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 93:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var22 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot18 = var22;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function DisplayNameStyles$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = {'no': 1, 'name': 'font_id', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot8;
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
                var2 = _closure1_slot9;
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0015_ip = 146; continue _fun0015 }
case 147:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 146:
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
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0016_ip = 12; continue _fun0016 }
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
                if(!var2) { _fun0016_ip = 148; continue _fun0016 }
case 149:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var8);
                var29 = var2[var6];
                var23 = var2[var7];
                if(!(var7 !== var29)) { _fun0016_ip = 150; continue _fun0016 }
case 151:
                if(!(var8 !== var29)) { _fun0016_ip = 152; continue _fun0016 }
case 153:
                if(!(var9 !== var29)) { _fun0016_ip = 154; continue _fun0016 }
case 155:
                var24 = var18.readUnknownField;
                if(!(var10 !== var24)) { _fun0016_ip = 156; continue _fun0016 }
case 69:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var23);
                var22 = var5;
                var21 = var24;
                var20 = var2;
                if(!(var11 !== var24)) { _fun0016_ip = 157; continue _fun0016 }
case 158:
                var26 = var24;
                if(!(var12 === var24)) { _fun0016_ip = 159; continue _fun0016 }
case 160:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var13];
                var25 = var27.bind(var15)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 159:
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
                _fun0016_ip = 157; continue _fun0016;
case 156:
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
case 154:
                var24 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var24.bind(var15)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var23 !== var2)) { _fun0016_ip = 161; continue _fun0016 }
case 162:
                var24 = var1.colors;
                var23 = var24.push;
                var2 = var19.uint32;
                var2 = var2.bind(var19)();
                var2 = var23.bind(var24)(var2);
                var22 = var5;
                var21 = var4;
                var20 = var3;
                _fun0016_ip = 157; continue _fun0016;
case 161:
                var2 = var19.int32;
                var23 = var2.bind(var19)();
                var2 = var19.pos;
                var23 = var23 + var2;
                var2 = var19.pos;
                var21 = var4;
                var20 = var3;
                var22 = var23;
                if(!(var2 < var22)) { _fun0016_ip = 157; continue _fun0016 }
case 163:
                var25 = var1.colors;
                var24 = var25.push;
                var2 = var19.uint32;
                var2 = var2.bind(var19)();
                var2 = var24.bind(var25)(var2);
                var2 = var19.pos;
                var22 = var23;
                var21 = var4;
                var20 = var3;
                if(var2 < var23) { _fun0016_ip = 163; continue _fun0016 }
case 164:
                _fun0016_ip = 157; continue _fun0016;
case 152:
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var1['effectId'] = var2;
                var22 = var5;
                var21 = var4;
                var20 = var3;
                _fun0016_ip = 157; continue _fun0016;
case 150:
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var1['fontId'] = var2;
                var22 = var5;
                var21 = var4;
                var20 = var3;
case 157:
                var2 = var19.pos;
                var5 = var22;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0016_ip = 149; continue _fun0016 }
case 148:
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
                var2 = var5.fontId;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0017_ip = 15; continue _fun0017 }
case 13:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
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
case 15:
                var2 = var5.effectId;
                if(!(var3 !== var2)) { _fun0017_ip = 165; continue _fun0017 }
case 166:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
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
case 165:
                var2 = var5.colors;
                var2 = var2.length;
                if(!var2) { _fun0017_ip = 167; continue _fun0017 }
case 40:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
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
                if(!var2) { _fun0017_ip = 168; continue _fun0017 }
case 169:
                var4 = var1.uint32;
                var2 = var5.colors;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.colors;
                var2 = var2.length;
                if(var3 < var2) { _fun0017_ip = 169; continue _fun0017 }
case 168:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 167:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0017_ip = 170; continue _fun0017 }
case 171:
                var2 = 1;
                if(!(var2 == var4)) { _fun0017_ip = 86; continue _fun0017 }
case 172:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 86:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 170:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var21 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot19 = var21;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserCollectibles$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
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
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0018_ip = 173; continue _fun0018 }
case 174:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 173:
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
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0019_ip = 12; continue _fun0019 }
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
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0019_ip = 127; continue _fun0019 }
case 175:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0019_ip = 176; continue _fun0019 }
case 177:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0019_ip = 84; continue _fun0019 }
case 146:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0019_ip = 178; continue _fun0019 }
case 179:
                var22 = var20;
                if(!(var10 === var20)) { _fun0019_ip = 18; continue _fun0019 }
case 180:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 18:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0019_ip = 178; continue _fun0019;
case 84:
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
case 176:
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
case 178:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0019_ip = 175; continue _fun0019 }
case 127:
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
                var3 = var5.nameplate;
                if(!var3) { _fun0020_ip = 173; continue _fun0020 }
case 13:
                var7 = _closure1_slot18;
                var6 = var7.internalBinaryWrite;
                var4 = var5.nameplate;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
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
case 173:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0020_ip = 181; continue _fun0020 }
case 11:
                var2 = 1;
                if(!(var2 == var4)) { _fun0020_ip = 74; continue _fun0020 }
case 106:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 74:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 181:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var20 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot20 = var20;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserPrimaryGuild$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = {'no': 1, 'name': 'identity_guild_id', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
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
                var1 = 6;
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
                var1 = 6;
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
                var1 = 6;
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0021_ip = 173; continue _fun0021 }
case 174:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 173:
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
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var18 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0022_ip = 12; continue _fun0022 }
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
                var14 = 6;
                var13 = 7;
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
                if(!var2) { _fun0022_ip = 182; continue _fun0022 }
case 183:
                var2 = var20.tag;
                var21 = var2.bind(var20)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var16)(var21, var7);
                var29 = var2[var5];
                var28 = var2[var6];
                if(!(var6 !== var29)) { _fun0022_ip = 148; continue _fun0022 }
case 184:
                if(!(var7 !== var29)) { _fun0022_ip = 185; continue _fun0022 }
case 186:
                if(!(var8 !== var29)) { _fun0022_ip = 187; continue _fun0022 }
case 188:
                if(!(var9 !== var29)) { _fun0022_ip = 120; continue _fun0022 }
case 110:
                var23 = var19.readUnknownField;
                if(!(var10 !== var23)) { _fun0022_ip = 189; continue _fun0022 }
case 190:
                var2 = var20.skip;
                var2 = var2.bind(var20)(var28);
                var22 = var23;
                var21 = var2;
                if(!(var11 !== var23)) { _fun0022_ip = 191; continue _fun0022 }
case 78:
                var25 = var23;
                if(!(var12 === var23)) { _fun0022_ip = 192; continue _fun0022 }
case 193:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var13];
                var24 = var26.bind(var16)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 192:
                var34 = var18.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var29;
                var31 = var28;
                var30 = var2;
                var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                var22 = var23;
                var21 = var2;
                _fun0022_ip = 191; continue _fun0022;
case 189:
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
case 120:
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
                _fun0022_ip = 191; continue _fun0022;
case 187:
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
                _fun0022_ip = 191; continue _fun0022;
case 185:
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
                _fun0022_ip = 191; continue _fun0022;
case 148:
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
case 191:
                var2 = var20.pos;
                var4 = var22;
                var3 = var21;
                if(var2 < var17) { _fun0022_ip = 183; continue _fun0022 }
case 182:
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
                var3 = var5.identityGuildId;
                if(!var3) { _fun0023_ip = 194; continue _fun0023 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 6;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.identityGuildId;
                var9 = var1.tag;
                var3 = 7;
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
case 194:
                var3 = var5.identityEnabled;
                if(!var3) { _fun0023_ip = 195; continue _fun0023 }
case 196:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 6;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.identityEnabled;
                var9 = var1.tag;
                var3 = 7;
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
case 195:
                var3 = var5.tag;
                if(!var3) { _fun0023_ip = 178; continue _fun0023 }
case 85:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 6;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.tag;
                var9 = var1.tag;
                var3 = 7;
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
case 178:
                var3 = var5.badge;
                if(!var3) { _fun0023_ip = 197; continue _fun0023 }
case 198:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 6;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.badge;
                var9 = var1.tag;
                var3 = 7;
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
case 197:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0023_ip = 199; continue _fun0023 }
case 152:
                var2 = 1;
                if(!(var2 == var4)) { _fun0023_ip = 200; continue _fun0023 }
case 111:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 200:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 199:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var19 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot21 = var19;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function CrossPlatformRestriction$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = {'no': 1, 'name': 'restriction_expiry', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
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
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0024_ip = 201; continue _fun0024 }
case 35:
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
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0025_ip = 12; continue _fun0025 }
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
                var12 = 8;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0025_ip = 202; continue _fun0025 }
case 15:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0025_ip = 128; continue _fun0025 }
case 100:
                if(!(var7 !== var27)) { _fun0025_ip = 203; continue _fun0025 }
case 146:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0025_ip = 204; continue _fun0025 }
case 108:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0025_ip = 205; continue _fun0025 }
case 206:
                var23 = var21;
                if(!(var10 === var21)) { _fun0025_ip = 207; continue _fun0025 }
case 208:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 207:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0025_ip = 205; continue _fun0025;
case 204:
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
case 203:
                var2 = var18.fixed64;
                var21 = var2.bind(var18)();
                var2 = var21.toString;
                var2 = var2.bind(var21)();
                var1['applicationId'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0025_ip = 205; continue _fun0025;
case 128:
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
case 205:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0025_ip = 15; continue _fun0025 }
case 202:
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
                var3 = var5.restrictionExpiry;
                if(!var3) { _fun0026_ip = 194; continue _fun0026 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.restrictionExpiry;
                var9 = var1.tag;
                var3 = 7;
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
case 194:
                var4 = var5.applicationId;
                var3 = '0';
                if(!(var3 !== var4)) { _fun0026_ip = 209; continue _fun0026 }
case 188:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
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
case 209:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0026_ip = 210; continue _fun0026 }
case 211:
                var2 = 1;
                if(!(var2 == var4)) { _fun0026_ip = 212; continue _fun0026 }
case 213:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 212:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 210:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var18 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot22 = var18;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserData$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = {'no': 1, 'name': 'linked_users', 'kind': 'map', 'K': 6};
            var6 = {};
            var9 = 'message';
            var6['kind'] = var9;
            var8 = function T() {
                var1 = _closure1_slot23;
                return var1;
            };
            var6['T'] = var8;
            var1['V'] = var6;
            var6 = new Array(11);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'safety_feature_limits', 'kind': 'map', 'K': 13};
            var8 = {};
            var8['kind'] = var9;
            var10 = function T() {
                var1 = _closure1_slot25;
                return var1;
            };
            var8['T'] = var10;
            var1['V'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'safety_flags', 'kind': 'map', 'K': 13};
            var8 = {};
            var8['kind'] = var9;
            var9 = function T() {
                var1 = _closure1_slot26;
                return var1;
            };
            var8['T'] = var9;
            var1['V'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'quest', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot27;
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
                var1 = _closure1_slot22;
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
                var1 = _closure1_slot33;
                return var1;
            };
            var1['T'] = var8;
            var6[7] = var1;
            var1 = {'no': 9, 'name': 'premium_state', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot34;
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
            var7 = function T() {
                var1 = _closure1_slot35;
                return var1;
            };
            var1['T'] = var7;
            var6[10] = var1;
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
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0027_ip = 65; continue _fun0027 }
case 214:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 65:
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
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0028_ip = 12; continue _fun0028 }
case 13:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 12:
                var4 = var19.pos;
                var3 = arg2;
                var17 = var4 + var3;
                var3 = var19.pos;
                var3 = var3 < var17;
                var16 = undefined;
                var14 = 7;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0028_ip = 215; continue _fun0028 }
case 175:
                var3 = var19.tag;
                var7 = var3.bind(var19)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var16)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=859, default_jump_address=662, unsigned_min_value=1, unsigned_max_value=11) // Switch table: [635, 605, 575, 519, 463, 407, 351, 295, 239, 183, 127];
case 216:
                var22 = _closure1_slot35;
                var21 = var22.internalBinaryRead;
                var3 = var19.uint32;
                var29 = var3.bind(var19)();
                var27 = var1.storeCountry;
                var31 = var22;
                var30 = var19;
                var28 = var18;
                var3 = var31[var21](var30, var29, var28, var27, var26);
                var1['storeCountry'] = var3;
                var21 = var5;
                var20 = var4;
                _fun0028_ip = 217; continue _fun0028;
case 218:
                var24 = _closure1_slot19;
                var23 = var24.internalBinaryRead;
                var3 = var19.uint32;
                var29 = var3.bind(var19)();
                var27 = var1.displayNameStyles;
                var31 = var24;
                var30 = var19;
                var28 = var18;
                var3 = var31[var23](var30, var29, var28, var27, var26);
                var1['displayNameStyles'] = var3;
                var21 = var5;
                var20 = var4;
                _fun0028_ip = 217; continue _fun0028;
case 195:
                var24 = _closure1_slot34;
                var23 = var24.internalBinaryRead;
                var3 = var19.uint32;
                var29 = var3.bind(var19)();
                var27 = var1.premiumState;
                var31 = var24;
                var30 = var19;
                var28 = var18;
                var3 = var31[var23](var30, var29, var28, var27, var26);
                var1['premiumState'] = var3;
                var21 = var5;
                var20 = var4;
                _fun0028_ip = 217; continue _fun0028;
case 219:
                var24 = _closure1_slot33;
                var23 = var24.internalBinaryRead;
                var3 = var19.uint32;
                var29 = var3.bind(var19)();
                var27 = var1.safetyState;
                var31 = var24;
                var30 = var19;
                var28 = var18;
                var3 = var31[var23](var30, var29, var28, var27, var26);
                var1['safetyState'] = var3;
                var21 = var5;
                var20 = var4;
                _fun0028_ip = 217; continue _fun0028;
case 220:
                var24 = _closure1_slot20;
                var23 = var24.internalBinaryRead;
                var3 = var19.uint32;
                var29 = var3.bind(var19)();
                var27 = var1.collectibles;
                var31 = var24;
                var30 = var19;
                var28 = var18;
                var3 = var31[var23](var30, var29, var28, var27, var26);
                var1['collectibles'] = var3;
                var21 = var5;
                var20 = var4;
                _fun0028_ip = 217; continue _fun0028;
case 221:
                var24 = _closure1_slot22;
                var23 = var24.internalBinaryRead;
                var3 = var19.uint32;
                var29 = var3.bind(var19)();
                var27 = var1.crossPlatformRestriction;
                var31 = var24;
                var30 = var19;
                var28 = var18;
                var3 = var31[var23](var30, var29, var28, var27, var26);
                var1['crossPlatformRestriction'] = var3;
                var21 = var5;
                var20 = var4;
                _fun0028_ip = 217; continue _fun0028;
case 222:
                var24 = _closure1_slot21;
                var23 = var24.internalBinaryRead;
                var3 = var19.uint32;
                var29 = var3.bind(var19)();
                var27 = var1.primaryGuild;
                var31 = var24;
                var30 = var19;
                var28 = var18;
                var3 = var31[var23](var30, var29, var28, var27, var26);
                var1['primaryGuild'] = var3;
                var21 = var5;
                var20 = var4;
                _fun0028_ip = 217; continue _fun0028;
case 223:
                var24 = _closure1_slot27;
                var23 = var24.internalBinaryRead;
                var3 = var19.uint32;
                var29 = var3.bind(var19)();
                var27 = var1.quest;
                var31 = var24;
                var30 = var19;
                var28 = var18;
                var3 = var31[var23](var30, var29, var28, var27, var26);
                var1['quest'] = var3;
                var21 = var5;
                var20 = var4;
                _fun0028_ip = 217; continue _fun0028;
case 224:
                var22 = var2.binaryReadMap3;
                var3 = var1.safetyFlags;
                var3 = var22.bind(var2)(var3, var19, var18);
                var21 = var5;
                var20 = var4;
                _fun0028_ip = 217; continue _fun0028;
case 225:
                var22 = var2.binaryReadMap2;
                var3 = var1.safetyFeatureLimits;
                var3 = var22.bind(var2)(var3, var19, var18);
                var21 = var5;
                var20 = var4;
                _fun0028_ip = 217; continue _fun0028;
case 226:
                var22 = var2.binaryReadMap1;
                var3 = var1.linkedUsers;
                var3 = var22.bind(var2)(var3, var19, var18);
                var21 = var5;
                var20 = var4;
                _fun0028_ip = 217; continue _fun0028;
case 227:
                var22 = var18.readUnknownField;
                if(!(var11 !== var22)) { _fun0028_ip = 228; continue _fun0028 }
case 229:
                var3 = var19.skip;
                var3 = var3.bind(var19)(var7);
                var21 = var22;
                var20 = var3;
                if(!(var12 !== var22)) { _fun0028_ip = 217; continue _fun0028 }
case 230:
                var24 = var22;
                if(!(var13 === var22)) { _fun0028_ip = 231; continue _fun0028 }
case 232:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var14];
                var23 = var25.bind(var16)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 231:
                var30 = var2.typeName;
                var31 = undefined;
                var29 = var1;
                var28 = var8;
                var27 = var7;
                var26 = var3;
                var23 = var31[var24](var30, var29, var28, var27, var26, var25);
                var21 = var22;
                var20 = var3;
case 217:
                var3 = var19.pos;
                var5 = var21;
                var4 = var20;
                if(var3 < var17) { _fun0028_ip = 175; continue _fun0028 }
case 215:
                return var1;
case 228:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var26 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var31 = 'Unknown field ';
                var29 = ' (wire type ';
                var27 = ') for ';
                var30 = var8;
                var28 = var7;
                var30 = var31[var5](var30, var29, var28, var27, var26, var25);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var31 = var2;
                var1 = new var31[var3](var30, var29);
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
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
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
                if(!var3) { _fun0029_ip = 233; continue _fun0029 }
case 234:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0029_ip = 74; continue _fun0029 }
case 4:
                if(!(var10 !== var3)) { _fun0029_ip = 235; continue _fun0029 }
case 147:
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
case 235:
                var15 = _closure1_slot23;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0029_ip = 236; continue _fun0029;
case 74:
                var3 = var13.fixed64;
                var15 = var3.bind(var13)();
                var3 = var15.toString;
                var7 = var3.bind(var15)();
                var14 = var5;
case 236:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0029_ip = 234; continue _fun0029 }
case 233:
                var5 = null;
                var7 = var5 != var6;
                var3 = '0';
                if(!var7) { _fun0029_ip = 237; continue _fun0029 }
case 213:
                var3 = var6;
case 237:
                if(!(var5 == var4)) { _fun0029_ip = 39; continue _fun0029 }
case 204:
                var5 = _closure1_slot23;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 39:
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
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
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
                if(!var5) { _fun0030_ip = 134; continue _fun0030 }
case 234:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0030_ip = 74; continue _fun0030 }
case 4:
                if(!(var10 !== var5)) { _fun0030_ip = 235; continue _fun0030 }
case 147:
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
case 235:
                var15 = _closure1_slot25;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0030_ip = 160; continue _fun0030;
case 74:
                var5 = var13.uint32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 160:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0030_ip = 234; continue _fun0030 }
case 134:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0030_ip = 82; continue _fun0030 }
case 238:
                var4 = var6;
case 82:
                if(!(var5 == var3)) { _fun0030_ip = 204; continue _fun0030 }
case 239:
                var5 = _closure1_slot25;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 204:
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
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
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
                if(!var5) { _fun0031_ip = 134; continue _fun0031 }
case 234:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0031_ip = 74; continue _fun0031 }
case 4:
                if(!(var10 !== var5)) { _fun0031_ip = 235; continue _fun0031 }
case 147:
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
case 235:
                var15 = _closure1_slot26;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0031_ip = 160; continue _fun0031;
case 74:
                var5 = var13.uint32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 160:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0031_ip = 234; continue _fun0031 }
case 134:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0031_ip = 82; continue _fun0031 }
case 238:
                var4 = var6;
case 82:
                if(!(var5 == var3)) { _fun0031_ip = 204; continue _fun0031 }
case 239:
                var5 = _closure1_slot26;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 204:
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
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
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
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var11 = 2;
                var9 = 0;
                if(!var8) { _fun0032_ip = 240; continue _fun0032 }
case 241:
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
                var15 = _closure1_slot23;
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
                if(var9 < var8) { _fun0032_ip = 241; continue _fun0032 }
case 240:
                var10 = var13.Object;
                var9 = var10.keys;
                var8 = var5.safetyFeatureLimits;
                var10 = var9.bind(var10)(var8);
                var8 = var10.length;
                var8 = var12 < var8;
                var9 = 0;
                if(!var8) { _fun0032_ip = 242; continue _fun0032 }
case 176:
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
                var15 = _closure1_slot25;
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
                if(var9 < var8) { _fun0032_ip = 176; continue _fun0032 }
case 242:
                var10 = var13.Object;
                var9 = var10.keys;
                var8 = var5.safetyFlags;
                var10 = var9.bind(var10)(var8);
                var8 = var10.length;
                var8 = var12 < var8;
                var9 = 3;
                var12 = 0;
                if(!var8) { _fun0032_ip = 243; continue _fun0032 }
case 244:
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
                var15 = _closure1_slot26;
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
                if(var12 < var8) { _fun0032_ip = 244; continue _fun0032 }
case 243:
                var8 = var5.quest;
                if(!var8) { _fun0032_ip = 245; continue _fun0032 }
case 246:
                var11 = _closure1_slot27;
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
case 245:
                var8 = var5.primaryGuild;
                if(!var8) { _fun0032_ip = 247; continue _fun0032 }
case 248:
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
case 247:
                var8 = var5.crossPlatformRestriction;
                if(!var8) { _fun0032_ip = 249; continue _fun0032 }
case 250:
                var11 = _closure1_slot22;
                var10 = var11.internalBinaryWrite;
                var9 = var5.crossPlatformRestriction;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 6;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 249:
                var8 = var5.collectibles;
                if(!var8) { _fun0032_ip = 251; continue _fun0032 }
case 252:
                var11 = _closure1_slot20;
                var10 = var11.internalBinaryWrite;
                var9 = var5.collectibles;
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
case 251:
                var8 = var5.safetyState;
                if(!var8) { _fun0032_ip = 253; continue _fun0032 }
case 57:
                var11 = _closure1_slot33;
                var10 = var11.internalBinaryWrite;
                var9 = var5.safetyState;
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.LengthDelimited;
                var8 = 8;
                var12 = var13.bind(var1)(var8, var12);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 253:
                var8 = var5.premiumState;
                if(!var8) { _fun0032_ip = 254; continue _fun0032 }
case 255:
                var11 = _closure1_slot34;
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
case 254:
                var8 = var5.displayNameStyles;
                if(!var8) { _fun0032_ip = 256; continue _fun0032 }
case 257:
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
case 256:
                var8 = var5.storeCountry;
                if(!var8) { _fun0032_ip = 258; continue _fun0032 }
case 259:
                var11 = _closure1_slot35;
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
case 258:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0032_ip = 260; continue _fun0032 }
case 261:
                if(!(var6 == var3)) { _fun0032_ip = 262; continue _fun0032 }
case 263:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 262:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 260:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var17 = var4 instanceof Object ? var4 : var5;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function LinkedUser$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var6 = new Array(6);
            var1 = {'no': 1, 'name': 'user_id', 'kind': 'scalar', 'T': 6};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'link_type', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot10;
                var1 = ['discord_protos.users.v1.UserLinkType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'link_status', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot11;
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
                var1 = 8;
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
                var1 = 8;
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
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0033_ip = 11; continue _fun0033 }
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
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var22 = arg1;
                var21 = arg3;
                var1 = arg4;
                var20 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0034_ip = 12; continue _fun0034 }
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
                var16 = 8;
                var15 = 7;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 6;
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0034_ip = 92; continue _fun0034 }
case 63:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0034_ip = 264; continue _fun0034 }
case 65:
                if(!(var7 !== var31)) { _fun0034_ip = 265; continue _fun0034 }
case 67:
                if(!(var8 !== var31)) { _fun0034_ip = 157; continue _fun0034 }
case 69:
                if(!(var9 !== var31)) { _fun0034_ip = 266; continue _fun0034 }
case 71:
                if(!(var10 !== var31)) { _fun0034_ip = 267; continue _fun0034 }
case 73:
                if(!(var11 !== var31)) { _fun0034_ip = 220; continue _fun0034 }
case 74:
                var25 = var21.readUnknownField;
                if(!(var12 !== var25)) { _fun0034_ip = 268; continue _fun0034 }
case 269:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var13 !== var25)) { _fun0034_ip = 270; continue _fun0034 }
case 134:
                var27 = var25;
                if(!(var14 === var25)) { _fun0034_ip = 271; continue _fun0034 }
case 272:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var15];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 271:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0034_ip = 270; continue _fun0034;
case 268:
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
case 220:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.Timestamp;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.updatedAt;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['updatedAt'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0034_ip = 270; continue _fun0034;
case 267:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.Timestamp;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.createdAt;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['createdAt'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0034_ip = 270; continue _fun0034;
case 266:
                var2 = var22.fixed64;
                var25 = var2.bind(var22)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var1['requestorId'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0034_ip = 270; continue _fun0034;
case 157:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['linkStatus'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0034_ip = 270; continue _fun0034;
case 265:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['linkType'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0034_ip = 270; continue _fun0034;
case 264:
                var2 = var22.fixed64;
                var25 = var2.bind(var22)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var1['userId'] = var2;
                var24 = var4;
                var23 = var3;
case 270:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0034_ip = 63; continue _fun0034 }
case 92:
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
                var3 = var5.userId;
                var4 = '0';
                if(!(var4 !== var3)) { _fun0035_ip = 35; continue _fun0035 }
case 36:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
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
case 35:
                var3 = var5.linkType;
                var6 = 0;
                if(!(var6 !== var3)) { _fun0035_ip = 130; continue _fun0035 }
case 273:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 7;
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
case 130:
                var3 = var5.linkStatus;
                if(!(var6 !== var3)) { _fun0035_ip = 156; continue _fun0035 }
case 160:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
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
case 156:
                var3 = var5.requestorId;
                if(!(var4 !== var3)) { _fun0035_ip = 274; continue _fun0035 }
case 87:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
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
case 274:
                var3 = var5.createdAt;
                if(!var3) { _fun0035_ip = 43; continue _fun0035 }
case 275:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.createdAt;
                var9 = var1.tag;
                var3 = 7;
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
case 43:
                var3 = var5.updatedAt;
                if(!var3) { _fun0035_ip = 276; continue _fun0035 }
case 277:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.updatedAt;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 6;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 276:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0035_ip = 278; continue _fun0035 }
case 279:
                var2 = 1;
                if(!(var2 == var4)) { _fun0035_ip = 280; continue _fun0035 }
case 281:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 280:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 278:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var16 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot23 = var16;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function RateLimitData$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = {'no': 1, 'name': 'limit_expiry', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0036_ip = 173; continue _fun0036 }
case 174:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 173:
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
                var12 = 8;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0037_ip = 282; continue _fun0037 }
case 15:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0037_ip = 283; continue _fun0037 }
case 100:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0037_ip = 213; continue _fun0037 }
case 106:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0037_ip = 89; continue _fun0037 }
case 284:
                var23 = var21;
                if(!(var10 === var21)) { _fun0037_ip = 285; continue _fun0037 }
case 206:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 285:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0037_ip = 89; continue _fun0037;
case 213:
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
case 283:
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
case 89:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0037_ip = 15; continue _fun0037 }
case 282:
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
                var3 = var5.limitExpiry;
                if(!var3) { _fun0038_ip = 194; continue _fun0038 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.limitExpiry;
                var9 = var1.tag;
                var3 = 7;
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
case 194:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0038_ip = 286; continue _fun0038 }
case 108:
                var2 = 1;
                if(!(var2 == var4)) { _fun0038_ip = 78; continue _fun0038 }
case 287:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 78:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 286:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var15 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot24 = var15;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function FeatureLimits$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = {'no': 1, 'name': 'map', 'kind': 'map', 'K': 13};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot24;
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
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0039_ip = 177; continue _fun0039 }
case 288:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 177:
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
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0040_ip = 12; continue _fun0040 }
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
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0040_ip = 289; continue _fun0040 }
case 175:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0040_ip = 20; continue _fun0040 }
case 177:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0040_ip = 239; continue _fun0040 }
case 146:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0040_ip = 290; continue _fun0040 }
case 179:
                var22 = var20;
                if(!(var10 === var20)) { _fun0040_ip = 18; continue _fun0040 }
case 180:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 18:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0040_ip = 290; continue _fun0040;
case 239:
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
case 20:
                var20 = var15.binaryReadMap1;
                var2 = var1.map;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 290:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0040_ip = 175; continue _fun0040 }
case 289:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
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
                if(!var5) { _fun0041_ip = 134; continue _fun0041 }
case 234:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0041_ip = 74; continue _fun0041 }
case 4:
                if(!(var10 !== var5)) { _fun0041_ip = 235; continue _fun0041 }
case 147:
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
case 235:
                var15 = _closure1_slot24;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0041_ip = 160; continue _fun0041;
case 74:
                var5 = var13.uint32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 160:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0041_ip = 234; continue _fun0041 }
case 134:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0041_ip = 82; continue _fun0041 }
case 238:
                var4 = var6;
case 82:
                if(!(var5 == var3)) { _fun0041_ip = 204; continue _fun0041 }
case 239:
                var5 = _closure1_slot24;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 204:
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
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
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
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0042_ip = 291; continue _fun0042 }
case 292:
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
                var14 = _closure1_slot24;
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
                if(var10 < var8) { _fun0042_ip = 292; continue _fun0042 }
case 291:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0042_ip = 293; continue _fun0042 }
case 294:
                if(!(var6 == var3)) { _fun0042_ip = 295; continue _fun0042 }
case 79:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 295:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 293:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var14 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot25 = var14;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SafetyFlag$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = {'no': 1, 'name': 'flag_expiry', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
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
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0043_ip = 173; continue _fun0043 }
case 174:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 173:
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
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0044_ip = 12; continue _fun0044 }
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
                var12 = 8;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0044_ip = 282; continue _fun0044 }
case 15:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0044_ip = 283; continue _fun0044 }
case 100:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0044_ip = 213; continue _fun0044 }
case 106:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0044_ip = 89; continue _fun0044 }
case 284:
                var23 = var21;
                if(!(var10 === var21)) { _fun0044_ip = 285; continue _fun0044 }
case 206:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 285:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0044_ip = 89; continue _fun0044;
case 213:
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
case 283:
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
case 89:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0044_ip = 15; continue _fun0044 }
case 282:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.flagExpiry;
                if(!var3) { _fun0045_ip = 194; continue _fun0045 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.flagExpiry;
                var9 = var1.tag;
                var3 = 7;
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
case 194:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0045_ip = 286; continue _fun0045 }
case 108:
                var2 = 1;
                if(!(var2 == var4)) { _fun0045_ip = 78; continue _fun0045 }
case 287:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 78:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 286:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var13 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot26 = var13;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildShardingConfig$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
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
            _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0046_ip = 100; continue _fun0046 }
case 101:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
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
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0047_ip = 12; continue _fun0047 }
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
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 2;
                var7 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0047_ip = 185; continue _fun0047 }
case 296:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var7];
                var22 = var2[var6];
                if(!(var6 !== var28)) { _fun0047_ip = 297; continue _fun0047 }
case 298:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0047_ip = 133; continue _fun0047 }
case 153:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0047_ip = 299; continue _fun0047 }
case 300:
                var25 = var23;
                if(!(var11 === var23)) { _fun0047_ip = 301; continue _fun0047 }
case 165:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 301:
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
                _fun0047_ip = 299; continue _fun0047;
case 133:
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
case 297:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0047_ip = 302; continue _fun0047 }
case 303:
                var23 = var1.shards;
                var22 = var23.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0047_ip = 299; continue _fun0047;
case 302:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0047_ip = 299; continue _fun0047 }
case 304:
                var24 = var1.shards;
                var23 = var24.push;
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0047_ip = 304; continue _fun0047 }
case 299:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0047_ip = 296; continue _fun0047 }
case 185:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.shards;
                var2 = var2.length;
                if(!var2) { _fun0048_ip = 305; continue _fun0048 }
case 115:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
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
                if(!var2) { _fun0048_ip = 306; continue _fun0048 }
case 38:
                var4 = var1.int32;
                var2 = var5.shards;
                var2 = var2[var3];
                var2 = var4.bind(var1)(var2);
                var3 = var3 + 1;
                var2 = var5.shards;
                var2 = var2.length;
                if(var3 < var2) { _fun0048_ip = 38; continue _fun0048 }
case 306:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 305:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0048_ip = 307; continue _fun0048 }
case 74:
                var2 = 1;
                if(!(var2 == var4)) { _fun0048_ip = 308; continue _fun0048 }
case 76:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 308:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 307:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var12 = var4 instanceof Object ? var4 : var5;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function QuestMetadata$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
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
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0049_ip = 309; continue _fun0049 }
case 149:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 309:
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
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0050_ip = 12; continue _fun0050 }
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
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0050_ip = 122; continue _fun0050 }
case 175:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0050_ip = 20; continue _fun0050 }
case 177:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0050_ip = 239; continue _fun0050 }
case 146:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0050_ip = 310; continue _fun0050 }
case 179:
                var22 = var20;
                if(!(var10 === var20)) { _fun0050_ip = 18; continue _fun0050 }
case 180:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 18:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0050_ip = 310; continue _fun0050;
case 239:
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
case 20:
                var2 = var17.uint32;
                var2 = var2.bind(var17)();
                var1['questsCompleted'] = var2;
                var19 = var4;
                var18 = var3;
case 310:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0050_ip = 175; continue _fun0050 }
case 122:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.questsCompleted;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0051_ip = 15; continue _fun0051 }
case 13:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
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
case 15:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0051_ip = 165; continue _fun0051 }
case 311:
                var2 = 1;
                if(!(var2 == var4)) { _fun0051_ip = 312; continue _fun0051 }
case 313:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 312:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 165:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var11 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot27 = var11;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function NormalState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = ['discord_protos.users.v1.NormalState'];
            var6 = new Array(0);
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0052_ip = 173; continue _fun0052 }
case 174:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 173:
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
                var1 = arg4;
                var3 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0053_ip = 314; continue _fun0053 }
case 315:
                var2 = var3.create;
                var1 = var2.bind(var3)();
case 314:
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
                var1 = arg2;
                var2 = arg3;
                var5 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var5)) { _fun0054_ip = 316; continue _fun0054 }
case 13:
                var2 = 1;
                if(!(var2 == var5)) { _fun0054_ip = 317; continue _fun0054 }
case 318:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var5 = var2.onWrite;
case 317:
                var2 = this;
                var4 = var2.typeName;
                var3 = undefined;
                var2 = arg1;
                var2 = var5.bind(var3)(var4, var2, var1);
case 316:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var10 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot28 = var10;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function RestrictedState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = {'no': 1, 'name': 'restricted_until', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.RestrictedState'];
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
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0055_ip = 173; continue _fun0055 }
case 174:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 173:
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
                var12 = 8;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0056_ip = 282; continue _fun0056 }
case 15:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0056_ip = 283; continue _fun0056 }
case 100:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0056_ip = 213; continue _fun0056 }
case 106:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0056_ip = 89; continue _fun0056 }
case 284:
                var23 = var21;
                if(!(var10 === var21)) { _fun0056_ip = 285; continue _fun0056 }
case 206:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 285:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0056_ip = 89; continue _fun0056;
case 213:
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
case 283:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.Timestamp;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.restrictedUntil;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['restrictedUntil'] = var2;
                var20 = var4;
                var19 = var3;
case 89:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0056_ip = 15; continue _fun0056 }
case 282:
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
                var2 = arg3;
                var3 = var5.restrictedUntil;
                if(!var3) { _fun0057_ip = 194; continue _fun0057 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.restrictedUntil;
                var9 = var1.tag;
                var3 = 7;
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
case 194:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0057_ip = 286; continue _fun0057 }
case 108:
                var2 = 1;
                if(!(var2 == var4)) { _fun0057_ip = 78; continue _fun0057 }
case 287:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 78:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 286:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var9 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot29 = var9;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function DeferredActionState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = {'no': 1, 'name': 'action_deferred_until', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.DeferredActionState'];
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
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0058_ip = 173; continue _fun0058 }
case 174:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 173:
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
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0059_ip = 12; continue _fun0059 }
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
                var12 = 8;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0059_ip = 282; continue _fun0059 }
case 15:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0059_ip = 283; continue _fun0059 }
case 100:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0059_ip = 213; continue _fun0059 }
case 106:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0059_ip = 89; continue _fun0059 }
case 284:
                var23 = var21;
                if(!(var10 === var21)) { _fun0059_ip = 285; continue _fun0059 }
case 206:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 285:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0059_ip = 89; continue _fun0059;
case 213:
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
case 283:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.Timestamp;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.actionDeferredUntil;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['actionDeferredUntil'] = var2;
                var20 = var4;
                var19 = var3;
case 89:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0059_ip = 15; continue _fun0059 }
case 282:
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
                var2 = arg3;
                var3 = var5.actionDeferredUntil;
                if(!var3) { _fun0060_ip = 194; continue _fun0060 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.actionDeferredUntil;
                var9 = var1.tag;
                var3 = 7;
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
case 194:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0060_ip = 286; continue _fun0060 }
case 108:
                var2 = 1;
                if(!(var2 == var4)) { _fun0060_ip = 78; continue _fun0060 }
case 287:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 78:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 286:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var8 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot30 = var8;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function TempBannedState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = {'no': 1, 'name': 'banned_until', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.users.v1.TempBannedState'];
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
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0061_ip = 173; continue _fun0061 }
case 174:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 173:
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
                var12 = 8;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0062_ip = 282; continue _fun0062 }
case 15:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0062_ip = 283; continue _fun0062 }
case 100:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0062_ip = 213; continue _fun0062 }
case 106:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0062_ip = 89; continue _fun0062 }
case 284:
                var23 = var21;
                if(!(var10 === var21)) { _fun0062_ip = 285; continue _fun0062 }
case 206:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 285:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0062_ip = 89; continue _fun0062;
case 213:
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
case 283:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.Timestamp;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.bannedUntil;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['bannedUntil'] = var2;
                var20 = var4;
                var19 = var3;
case 89:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0062_ip = 15; continue _fun0062 }
case 282:
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
                var2 = arg3;
                var3 = var5.bannedUntil;
                if(!var3) { _fun0063_ip = 194; continue _fun0063 }
case 13:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.bannedUntil;
                var9 = var1.tag;
                var3 = 7;
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
case 194:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0063_ip = 286; continue _fun0063 }
case 108:
                var2 = 1;
                if(!(var2 == var4)) { _fun0063_ip = 78; continue _fun0063 }
case 287:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 78:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 286:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var7 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot31 = var7;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function BannedState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = ['discord_protos.users.v1.BannedState'];
            var6 = new Array(0);
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
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0064_ip = 173; continue _fun0064 }
case 174:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 173:
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
                var1 = arg4;
                var3 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0065_ip = 314; continue _fun0065 }
case 315:
                var2 = var3.create;
                var1 = var2.bind(var3)();
case 314:
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
                var1 = arg2;
                var2 = arg3;
                var5 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var5)) { _fun0066_ip = 316; continue _fun0066 }
case 13:
                var2 = 1;
                if(!(var2 == var5)) { _fun0066_ip = 317; continue _fun0066 }
case 318:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var5 = var2.onWrite;
case 317:
                var2 = this;
                var4 = var2.typeName;
                var3 = undefined;
                var2 = arg1;
                var2 = var5.bind(var3)(var4, var2, var1);
case 316:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var6 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot32 = var6;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SafetyState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = {'no': 101, 'name': 'normal', 'kind': 'message', 'oneof': 'state'};
            var6 = function T() {
                var1 = _closure1_slot28;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(8);
            var6[0] = var1;
            var1 = {'no': 102, 'name': 'restricted', 'kind': 'message', 'oneof': 'state'};
            var8 = function T() {
                var1 = _closure1_slot29;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 103, 'name': 'deferred_action', 'kind': 'message', 'oneof': 'state'};
            var8 = function T() {
                var1 = _closure1_slot30;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 104, 'name': 'temp_banned', 'kind': 'message', 'oneof': 'state'};
            var8 = function T() {
                var1 = _closure1_slot31;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 105, 'name': 'banned', 'kind': 'message', 'oneof': 'state'};
            var8 = function T() {
                var1 = _closure1_slot32;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 1, 'name': 'reason', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot12;
                var1 = ['discord_protos.users.v1.SafetyStateReason'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 2, 'name': 'annotations', 'kind': 'enum', 'repeat': 1};
            var8 = function T() {
                var2 = _closure1_slot13;
                var1 = ['discord_protos.users.v1.SafetyAnnotations'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 3, 'name': 'last_mutation_id', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var7;
            var6[7] = var1;
            var1 = ['discord_protos.users.v1.SafetyState'];
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
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var6 = undefined;
                var2['oneofKind'] = var6;
                var1['state'] = var2;
                var2 = 0;
                var1['reason'] = var2;
                var2 = new Array(0);
                var1['annotations'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0067_ip = 235; continue _fun0067 }
case 313:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 235:
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
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                var30 = arg1;
                var29 = arg3;
                var1 = arg4;
                var28 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0068_ip = 12; continue _fun0068 }
case 13:
                var2 = var28.create;
                var1 = var2.bind(var28)();
case 12:
                var3 = var30.pos;
                var2 = arg2;
                var27 = var3 + var2;
                var2 = var30.pos;
                var2 = var2 < var27;
                var26 = undefined;
                var25 = 'normal';
                var23 = 'restricted';
                var22 = 'deferredAction';
                var21 = 'tempBanned';
                var20 = 'banned';
                var19 = 7;
                var18 = 6;
                var17 = true;
                var16 = false;
                var15 = 'throw';
                var14 = 3;
                var13 = 2;
                var12 = 1;
                var11 = 105;
                var10 = 104;
                var9 = 103;
                var8 = 102;
                var7 = 101;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0068_ip = 319; continue _fun0068 }
case 184:
                var2 = var30.tag;
                var31 = var2.bind(var30)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var26)(var31, var13);
                var40 = var2[var6];
                var34 = var2[var12];
                if(!(var7 !== var40)) { _fun0068_ip = 320; continue _fun0068 }
case 73:
                if(!(var8 !== var40)) { _fun0068_ip = 321; continue _fun0068 }
case 74:
                if(!(var9 !== var40)) { _fun0068_ip = 322; continue _fun0068 }
case 76:
                if(!(var10 !== var40)) { _fun0068_ip = 323; continue _fun0068 }
case 78:
                if(!(var11 !== var40)) { _fun0068_ip = 324; continue _fun0068 }
case 193:
                if(!(var12 !== var40)) { _fun0068_ip = 325; continue _fun0068 }
case 326:
                if(!(var13 !== var40)) { _fun0068_ip = 164; continue _fun0068 }
case 327:
                if(!(var14 !== var40)) { _fun0068_ip = 328; continue _fun0068 }
case 159:
                var35 = var29.readUnknownField;
                if(!(var15 !== var35)) { _fun0068_ip = 118; continue _fun0068 }
case 239:
                var2 = var30.skip;
                var2 = var2.bind(var30)(var34);
                var33 = var5;
                var32 = var35;
                var31 = var2;
                if(!(var16 !== var35)) { _fun0068_ip = 329; continue _fun0068 }
case 330:
                var37 = var35;
                if(!(var17 === var35)) { _fun0068_ip = 294; continue _fun0068 }
case 331:
                var38 = _closure1_slot0;
                var36 = _closure1_slot1;
                var36 = var36[var19];
                var36 = var38.bind(var26)(var36);
                var36 = var36.UnknownFieldHandler;
                var37 = var36.onRead;
case 294:
                var45 = var28.typeName;
                var46 = undefined;
                var44 = var1;
                var43 = var40;
                var42 = var34;
                var41 = var2;
                var36 = var46[var37](var45, var44, var43, var42, var41, var40);
                var33 = var5;
                var32 = var35;
                var31 = var2;
                _fun0068_ip = 329; continue _fun0068;
case 118:
                var2 = global;
                var35 = var2.globalThis;
                var36 = var35.Error;
                var41 = var28.typeName;
                var2 = var2.HermesInternal;
                var38 = var2.concat;
                var46 = 'Unknown field ';
                var44 = ' (wire type ';
                var42 = ') for ';
                var45 = var40;
                var43 = var34;
                var45 = var46[var38](var45, var44, var43, var42, var41, var40);
                var35 = var36.prototype;
                var35 = Object.create(var35, {constructor: {value: var36}});
                var46 = var35;
                var2 = new var46[var36](var45, var44);
                var2 = var2 instanceof Object ? var2 : var35;
                throw var2;
case 328:
                var35 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var18];
                var2 = var35.bind(var26)(var2);
                var37 = var2.UInt64Value;
                var36 = var37.internalBinaryRead;
                var2 = var30.uint32;
                var44 = var2.bind(var30)();
                var42 = var1.lastMutationId;
                var46 = var37;
                var45 = var30;
                var43 = var29;
                var2 = var46[var36](var45, var44, var43, var42, var41);
                var1['lastMutationId'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0068_ip = 329; continue _fun0068;
case 164:
                var35 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var19];
                var2 = var35.bind(var26)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var34 !== var2)) { _fun0068_ip = 332; continue _fun0068 }
case 333:
                var35 = var1.annotations;
                var34 = var35.push;
                var2 = var30.int32;
                var2 = var2.bind(var30)();
                var2 = var34.bind(var35)(var2);
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0068_ip = 329; continue _fun0068;
case 332:
                var2 = var30.int32;
                var34 = var2.bind(var30)();
                var2 = var30.pos;
                var34 = var34 + var2;
                var2 = var30.pos;
                var32 = var4;
                var31 = var3;
                var33 = var34;
                if(!(var2 < var33)) { _fun0068_ip = 329; continue _fun0068 }
case 334:
                var36 = var1.annotations;
                var35 = var36.push;
                var2 = var30.int32;
                var2 = var2.bind(var30)();
                var2 = var35.bind(var36)(var2);
                var2 = var30.pos;
                var33 = var34;
                var32 = var4;
                var31 = var3;
                if(var2 < var34) { _fun0068_ip = 334; continue _fun0068 }
case 335:
                _fun0068_ip = 329; continue _fun0068;
case 325:
                var2 = var30.int32;
                var2 = var2.bind(var30)();
                var1['reason'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0068_ip = 329; continue _fun0068;
case 324:
                var2 = {};
                var2['oneofKind'] = var20;
                var37 = _closure1_slot32;
                var36 = var37.internalBinaryRead;
                var34 = var30.uint32;
                var44 = var34.bind(var30)();
                var34 = var1.state;
                var42 = var34.banned;
                var46 = var37;
                var45 = var30;
                var43 = var29;
                var34 = var46[var36](var45, var44, var43, var42, var41);
                var2['banned'] = var34;
                var1['state'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0068_ip = 329; continue _fun0068;
case 323:
                var2 = {};
                var2['oneofKind'] = var21;
                var37 = _closure1_slot31;
                var36 = var37.internalBinaryRead;
                var34 = var30.uint32;
                var44 = var34.bind(var30)();
                var34 = var1.state;
                var42 = var34.tempBanned;
                var46 = var37;
                var45 = var30;
                var43 = var29;
                var34 = var46[var36](var45, var44, var43, var42, var41);
                var2['tempBanned'] = var34;
                var1['state'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0068_ip = 329; continue _fun0068;
case 322:
                var2 = {};
                var2['oneofKind'] = var22;
                var37 = _closure1_slot30;
                var36 = var37.internalBinaryRead;
                var34 = var30.uint32;
                var44 = var34.bind(var30)();
                var34 = var1.state;
                var42 = var34.deferredAction;
                var46 = var37;
                var45 = var30;
                var43 = var29;
                var34 = var46[var36](var45, var44, var43, var42, var41);
                var2['deferredAction'] = var34;
                var1['state'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0068_ip = 329; continue _fun0068;
case 321:
                var2 = {};
                var2['oneofKind'] = var23;
                var37 = _closure1_slot29;
                var36 = var37.internalBinaryRead;
                var34 = var30.uint32;
                var44 = var34.bind(var30)();
                var34 = var1.state;
                var42 = var34.restricted;
                var46 = var37;
                var45 = var30;
                var43 = var29;
                var34 = var46[var36](var45, var44, var43, var42, var41);
                var2['restricted'] = var34;
                var1['state'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
                _fun0068_ip = 329; continue _fun0068;
case 320:
                var2 = {};
                var2['oneofKind'] = var25;
                var37 = _closure1_slot28;
                var36 = var37.internalBinaryRead;
                var34 = var30.uint32;
                var44 = var34.bind(var30)();
                var34 = var1.state;
                var42 = var34.normal;
                var46 = var37;
                var45 = var30;
                var43 = var29;
                var34 = var46[var36](var45, var44, var43, var42, var41);
                var2['normal'] = var34;
                var1['state'] = var2;
                var33 = var5;
                var32 = var4;
                var31 = var3;
case 329:
                var2 = var30.pos;
                var5 = var33;
                var4 = var32;
                var3 = var31;
                if(var2 < var27) { _fun0068_ip = 184; continue _fun0068 }
case 319:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.state;
                var4 = var3.oneofKind;
                var3 = 'normal';
                if(!(var3 === var4)) { _fun0069_ip = 184; continue _fun0069 }
case 336:
                var7 = _closure1_slot28;
                var6 = var7.internalBinaryWrite;
                var4 = var5.state;
                var4 = var4.normal;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 101;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 184:
                var3 = var5.state;
                var4 = var3.oneofKind;
                var3 = 'restricted';
                if(!(var3 === var4)) { _fun0069_ip = 109; continue _fun0069 }
case 312:
                var7 = _closure1_slot29;
                var6 = var7.internalBinaryWrite;
                var4 = var5.state;
                var4 = var4.restricted;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 102;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 109:
                var3 = var5.state;
                var4 = var3.oneofKind;
                var3 = 'deferredAction';
                if(!(var3 === var4)) { _fun0069_ip = 337; continue _fun0069 }
case 338:
                var7 = _closure1_slot30;
                var6 = var7.internalBinaryWrite;
                var4 = var5.state;
                var4 = var4.deferredAction;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 103;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 337:
                var3 = var5.state;
                var4 = var3.oneofKind;
                var3 = 'tempBanned';
                if(!(var3 === var4)) { _fun0069_ip = 339; continue _fun0069 }
case 340:
                var7 = _closure1_slot31;
                var6 = var7.internalBinaryWrite;
                var4 = var5.state;
                var4 = var4.tempBanned;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 104;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 339:
                var3 = var5.state;
                var4 = var3.oneofKind;
                var3 = 'banned';
                if(!(var3 === var4)) { _fun0069_ip = 334; continue _fun0069 }
case 341:
                var7 = _closure1_slot32;
                var6 = var7.internalBinaryWrite;
                var4 = var5.state;
                var4 = var4.banned;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 105;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 334:
                var3 = var5.reason;
                var4 = 0;
                if(!(var4 !== var3)) { _fun0069_ip = 324; continue _fun0069 }
case 342:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 1;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.int32;
                var3 = var5.reason;
                var3 = var6.bind(var7)(var3);
case 324:
                var3 = var5.annotations;
                var3 = var3.length;
                if(!var3) { _fun0069_ip = 343; continue _fun0069 }
case 344:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 2;
                var6 = var7.bind(var1)(var3, var6);
                var3 = var6.fork;
                var3 = var3.bind(var6)();
                var3 = var5.annotations;
                var3 = var3.length;
                var3 = var4 < var3;
                var4 = 0;
                if(!var3) { _fun0069_ip = 345; continue _fun0069 }
case 346:
                var6 = var1.int32;
                var3 = var5.annotations;
                var3 = var3[var4];
                var3 = var6.bind(var1)(var3);
                var4 = var4 + 1;
                var3 = var5.annotations;
                var3 = var3.length;
                if(var4 < var3) { _fun0069_ip = 346; continue _fun0069 }
case 345:
                var3 = var1.join;
                var3 = var3.bind(var1)();
case 343:
                var3 = var5.lastMutationId;
                if(!var3) { _fun0069_ip = 347; continue _fun0069 }
case 348:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 6;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.lastMutationId;
                var9 = var1.tag;
                var3 = 7;
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
case 347:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0069_ip = 349; continue _fun0069 }
case 350:
                var2 = 1;
                if(!(var2 == var4)) { _fun0069_ip = 351; continue _fun0069 }
case 352:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
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
case 349:
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
    var46 = var5;
    var4 = new var46[var4](var45);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot33 = var5;
    var4 = var40[var2];
    var4 = var39.bind(var1)(var4);
    var42 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PremiumState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var1 = {'no': 1, 'name': 'premium_source', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot14;
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
                var2 = _closure1_slot15;
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
                var2 = _closure1_slot16;
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
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0070_ip = 298; continue _fun0070 }
case 103:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 298:
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
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0071_ip = 187; continue _fun0071 }
case 15:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0071_ip = 353; continue _fun0071 }
case 100:
                if(!(var7 !== var27)) { _fun0071_ip = 354; continue _fun0071 }
case 146:
                if(!(var8 !== var27)) { _fun0071_ip = 171; continue _fun0071 }
case 196:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0071_ip = 355; continue _fun0071 }
case 287:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0071_ip = 356; continue _fun0071 }
case 208:
                var23 = var21;
                if(!(var11 === var21)) { _fun0071_ip = 357; continue _fun0071 }
case 138:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 357:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0071_ip = 356; continue _fun0071;
case 355:
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
case 171:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['premiumSubscriptionGroupRole'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0071_ip = 356; continue _fun0071;
case 354:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['premiumSubscriptionType'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0071_ip = 356; continue _fun0071;
case 353:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['premiumSource'] = var2;
                var20 = var4;
                var19 = var3;
case 356:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0071_ip = 15; continue _fun0071 }
case 187:
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
                var2 = var5.premiumSource;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0072_ip = 15; continue _fun0072 }
case 13:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
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
case 15:
                var2 = var5.premiumSubscriptionType;
                if(!(var3 !== var2)) { _fun0072_ip = 165; continue _fun0072 }
case 166:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
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
case 165:
                var2 = var5.premiumSubscriptionGroupRole;
                if(!(var3 !== var2)) { _fun0072_ip = 195; continue _fun0072 }
case 158:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
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
case 195:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0072_ip = 358; continue _fun0072 }
case 359:
                var2 = 1;
                if(!(var2 == var4)) { _fun0072_ip = 20; continue _fun0072 }
case 212:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 20:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 358:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var42);
    var42 = var4.prototype;
    var42 = Object.create(var42, {constructor: {value: var4}});
    var46 = var42;
    var4 = new var46[var4](var45);
    var4 = var4 instanceof Object ? var4 : var42;
    var _closure1_slot34 = var4;
    var2 = var40[var2];
    var2 = var39.bind(var1)(var2);
    var42 = var2.MessageType;
    var2 = function(arg1) {
        var4 = function StoreCountry$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot36;
            var6 = new Array(2);
            var1 = {'no': 1, 'name': 'country', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'set_at', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
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
            _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
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
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0073_ip = 100; continue _fun0073 }
case 101:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
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
                var12 = 8;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0074_ip = 360; continue _fun0074 }
case 15:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0074_ip = 361; continue _fun0074 }
case 100:
                if(!(var7 !== var27)) { _fun0074_ip = 203; continue _fun0074 }
case 146:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0074_ip = 204; continue _fun0074 }
case 108:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0074_ip = 142; continue _fun0074 }
case 206:
                var23 = var21;
                if(!(var10 === var21)) { _fun0074_ip = 207; continue _fun0074 }
case 208:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 207:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0074_ip = 142; continue _fun0074;
case 204:
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
case 203:
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
                _fun0074_ip = 142; continue _fun0074;
case 361:
                var2 = var18.string;
                var2 = var2.bind(var18)();
                var1['country'] = var2;
                var20 = var4;
                var19 = var3;
case 142:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0074_ip = 15; continue _fun0074 }
case 360:
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
                var2 = arg3;
                var4 = var5.country;
                var3 = '';
                if(!(var3 !== var4)) { _fun0075_ip = 101; continue _fun0075 }
case 115:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
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
case 101:
                var3 = var5.setAt;
                if(!var3) { _fun0075_ip = 116; continue _fun0075 }
case 117:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 8;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.setAt;
                var9 = var1.tag;
                var3 = 7;
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
case 116:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0075_ip = 362; continue _fun0075 }
case 192:
                var2 = 1;
                if(!(var2 == var4)) { _fun0075_ip = 338; continue _fun0075 }
case 363:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 338:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 362:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var42);
    var42 = var2.prototype;
    var42 = Object.create(var42, {constructor: {value: var2}});
    var46 = var42;
    var2 = new var46[var2](var45);
    var2 = var2 instanceof Object ? var2 : var42;
    var _closure1_slot35 = var2;
    var38 = var40[var38];
    var40 = var39.bind(var1)(var38);
    var39 = var40.fileFinishedImporting;
    var38 = '../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx';
    var38 = var39.bind(var40)(var38);
    var3['DisplayNameFont'] = var37;
    var3['DisplayNameEffect'] = var36;
    var3['UserLinkType'] = var35;
    var3['UserLinkStatus'] = var34;
    var3['RateLimitTier'] = var33;
    var3['FeatureLimitName'] = var32;
    var3['SafetyFlagType'] = var31;
    var3['SafetyStateReason'] = var30;
    var3['SafetyAnnotations'] = var29;
    var3['PremiumSource'] = var28;
    var3['PremiumSubscriptionType'] = var27;
    var3['PremiumSubscriptionGroupRole'] = var26;
    var3['User'] = var25;
    var3['MediumUser'] = var24;
    var3['UserAvatarDecoration'] = var23;
    var3['UserNameplate'] = var22;
    var3['DisplayNameStyles'] = var21;
    var3['UserCollectibles'] = var20;
    var3['UserPrimaryGuild'] = var19;
    var3['CrossPlatformRestriction'] = var18;
    var3['UserData'] = var17;
    var3['LinkedUser'] = var16;
    var3['RateLimitData'] = var15;
    var3['FeatureLimits'] = var14;
    var3['SafetyFlag'] = var13;
    var3['GuildShardingConfig'] = var12;
    var3['QuestMetadata'] = var11;
    var3['NormalState'] = var10;
    var3['RestrictedState'] = var9;
    var3['DeferredActionState'] = var8;
    var3['TempBannedState'] = var7;
    var3['BannedState'] = var6;
    var3['SafetyState'] = var5;
    var3['PremiumState'] = var4;
    var3['StoreCountry'] = var2;
    return var1;
})();
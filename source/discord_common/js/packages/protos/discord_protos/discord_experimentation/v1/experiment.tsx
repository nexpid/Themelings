// discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var15 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var16;
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
            var1 = _closure1_slot19;
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
    var _closure1_slot18 = var1;
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var20 = 0;
    var2 = var16[var20];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var19 = 1;
    var2 = var16[var19];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var18 = 2;
    var2 = var16[var18];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var17 = 3;
    var2 = var16[var17];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var5 = 4;
    var2 = var16[var5];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var4 = 5;
    var2 = var16[var4];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var13 = {};
    var13['UNSPECIFIED'] = var20;
    var2 = 'UNSPECIFIED';
    var13[var20] = var2;
    var13['USER'] = var19;
    var6 = 'USER';
    var13[var19] = var6;
    var _closure1_slot8 = var13;
    var12 = {};
    var12['SURFACE_UNSPECIFIED'] = var20;
    var6 = 'SURFACE_UNSPECIFIED';
    var12[var20] = var6;
    var12['API'] = var19;
    var6 = 'API';
    var12[var19] = var6;
    var12['APP'] = var18;
    var6 = 'APP';
    var12[var18] = var6;
    var12['DEVELOPER_PORTAL'] = var17;
    var6 = 'DEVELOPER_PORTAL';
    var12[var17] = var6;
    var12['ADMIN_PANEL'] = var5;
    var6 = 'ADMIN_PANEL';
    var12[var5] = var6;
    var12['ADS_BUDGET_AB'] = var4;
    var6 = 'ADS_BUDGET_AB';
    var12[var4] = var6;
    var _closure1_slot9 = var12;
    var11 = {};
    var11['ENABLED'] = var20;
    var6 = 'ENABLED';
    var11[var20] = var6;
    var11['DISABLED'] = var19;
    var6 = 'DISABLED';
    var11[var19] = var6;
    var _closure1_slot10 = var11;
    var10 = {};
    var10['FULL'] = var20;
    var6 = 'FULL';
    var10[var20] = var6;
    var10['FORCE_DEFAULT'] = var19;
    var6 = 'FORCE_DEFAULT';
    var10[var19] = var6;
    var10['OVERRIDE_ONLY'] = var18;
    var6 = 'OVERRIDE_ONLY';
    var10[var18] = var6;
    var _closure1_slot11 = var10;
    var9 = {};
    var9['DEFAULT'] = var20;
    var6 = 'DEFAULT';
    var9[var20] = var6;
    var9['HOLDOUT'] = var19;
    var6 = 'HOLDOUT';
    var9[var19] = var6;
    var _closure1_slot12 = var9;
    var8 = {};
    var8['UNSPECIFIED'] = var20;
    var8[var20] = var2;
    var8['CONTROL'] = var19;
    var6 = 'CONTROL';
    var8[var19] = var6;
    var8['TREATMENT'] = var18;
    var6 = 'TREATMENT';
    var8[var18] = var6;
    var8['OVERRIDE'] = var17;
    var6 = 'OVERRIDE';
    var8[var17] = var6;
    var _closure1_slot13 = var8;
    var7 = {};
    var7['UNSPECIFIED'] = var20;
    var7[var20] = var2;
    var7['ACTIVE'] = var19;
    var6 = 'ACTIVE';
    var7[var19] = var6;
    var7['UNUSED'] = var18;
    var6 = 'UNUSED';
    var7[var18] = var6;
    var7['BURNED'] = var17;
    var6 = 'BURNED';
    var7[var17] = var6;
    var _closure1_slot14 = var7;
    var6 = {};
    var6['UNSPECIFIED'] = var20;
    var6[var20] = var2;
    var6['DRAFT'] = var19;
    var2 = 'DRAFT';
    var6[var19] = var2;
    var6['MEASUREMENT'] = var18;
    var2 = 'MEASUREMENT';
    var6[var18] = var2;
    var6['MEASUREMENT_ENDED'] = var17;
    var2 = 'MEASUREMENT_ENDED';
    var6[var17] = var2;
    var6['ROLLING_OUT'] = var5;
    var2 = 'ROLLING_OUT';
    var6[var5] = var2;
    var6['ROLLED_OUT'] = var4;
    var2 = 'ROLLED_OUT';
    var6[var4] = var2;
    var4 = 6;
    var6['ARCHIVED'] = var4;
    var2 = 'ARCHIVED';
    var6[var4] = var2;
    var4 = 7;
    var6['AA_MODE'] = var4;
    var2 = 'AA_MODE';
    var6[var4] = var2;
    var _closure1_slot15 = var6;
    var2 = 9;
    var4 = var16[var2];
    var4 = var15.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Experiment$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot18;
            var6 = new Array(27);
            var1 = {'no': 1, 'name': 'id', 'kind': 'scalar', 'T': 6};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'name', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'created_at', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'creator_id', 'kind': 'scalar', 'T': 6};
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'version', 'kind': 'scalar', 'T': 5};
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'edited_at', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'editor_id', 'kind': 'scalar', 'T': 6};
            var6[6] = var1;
            var1 = {'no': 8, 'name': 'title', 'kind': 'scalar', 'T': 9};
            var6[7] = var1;
            var1 = {'no': 9, 'name': 'description', 'kind': 'scalar', 'T': 9};
            var6[8] = var1;
            var1 = {'no': 10, 'name': 'hypothesis', 'kind': 'message'};
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
            var6[9] = var1;
            var1 = {'no': 11, 'name': 'tech_spec_link', 'kind': 'message'};
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
            var6[10] = var1;
            var1 = {'no': 12, 'name': 'revision', 'kind': 'scalar', 'T': 5};
            var6[11] = var1;
            var1 = {'no': 13, 'name': 'hash_key', 'kind': 'scalar', 'T': 9};
            var6[12] = var1;
            var1 = {'no': 14, 'name': 'unit_type', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot8;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.UnitType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[13] = var1;
            var1 = {'no': 15, 'name': 'variations', 'kind': 'message', 'repeat': 1};
            var8 = function T() {
                var1 = _closure1_slot16;
                return var1;
            };
            var1['T'] = var8;
            var6[14] = var1;
            var1 = {'no': 16, 'name': 'rules', 'kind': 'message', 'repeat': 1};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Rule;
                return var1;
            };
            var1['T'] = var8;
            var6[15] = var1;
            var1 = {'no': 18, 'name': 'phase', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot15;
                var1 = ['discord_protos.discord_experimentation.v1.Phase'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[16] = var1;
            var1 = {'no': 19, 'name': 'surfaces', 'kind': 'enum', 'repeat': 1};
            var8 = function T() {
                var2 = _closure1_slot9;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.Surface'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[17] = var1;
            var1 = {'no': 20, 'name': 'owning_team_id', 'kind': 'scalar', 'T': 9};
            var6[18] = var1;
            var1 = {'no': 21, 'name': 'cached_notification_channel_id', 'kind': 'scalar', 'T': 6};
            var6[19] = var1;
            var1 = {'no': 22, 'name': 'exposure_tracking', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot10;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.ExposureTracking'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[20] = var1;
            var1 = {'no': 25, 'name': 'assignment_mode', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot11;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.AssignmentMode'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[21] = var1;
            var1 = {'no': 23, 'name': 'enable_edit_raw_json_ui', 'kind': 'scalar', 'T': 8};
            var6[22] = var1;
            var1 = {'no': 24, 'name': 'winning_variation_id', 'kind': 'scalar', 'T': 5};
            var6[23] = var1;
            var1 = {'no': 26, 'name': 'type', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot12;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.Type'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[24] = var1;
            var1 = {'no': 27, 'name': 'is_template', 'kind': 'scalar', 'T': 8};
            var6[25] = var1;
            var1 = {'no': 28, 'name': 'field_numbers_to_copy', 'kind': 'scalar', 'repeat': 1, 'T': 5};
            var6[26] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.Experiment'];
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
                var1 = {'id': '0', 'name': '', 'creatorId': '0', 'version': 0, 'editorId': '0', 'title': '', 'description': '', 'revision': 0, 'hashKey': '', 'unitType': 0, 'variations': null, 'rules': null, 'phase': 0, 'surfaces': null, 'owningTeamId': '', 'cachedNotificationChannelId': '0', 'exposureTracking': 0, 'assignmentMode': 0, 'enableEditRawJsonUi': false, 'winningVariationId': 0, 'type': 0, 'isTemplate': false};
                var2 = new Array(0);
                var1['variations'] = var2;
                var2 = new Array(0);
                var1['rules'] = var2;
                var2 = new Array(0);
                var1['surfaces'] = var2;
                var11 = false;
                var2 = new Array(0);
                var1['fieldNumbersToCopy'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 9;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
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
                var24 = arg1;
                var23 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 13:
                var4 = var24.pos;
                var3 = arg2;
                var22 = var4 + var3;
                var3 = var24.pos;
                var3 = var3 < var22;
                var21 = undefined;
                var19 = 9;
                var18 = true;
                var17 = false;
                var16 = 'throw';
                var15 = 6;
                var14 = 7;
                var13 = 8;
                var12 = 2;
                var11 = 0;
                var10 = 1;
                var9 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var3 = var24.tag;
                var7 = var3.bind(var24)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var21)(var7, var12);
                var8 = var3[var11];
                var7 = var3[var10];
                SwitchImm(value_reg=7, jump_table_address=1827, default_jump_address=1608, unsigned_min_value=1, unsigned_max_value=28) // Switch table: [1569, 1537, 1456, 1414, 1381, 1300, 1258, 1226, 1194, 1113, 1032, 999, 967, 934, 874, 795, 1608, 762, 588, 556, 514, 481, 415, 382, 448, 349, 316, 142];
case 17:
                var25 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var19];
                var3 = var25.bind(var21)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                if(!(var7 !== var3)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var26 = var1.fieldNumbersToCopy;
                var25 = var26.push;
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var3 = var25.bind(var26)(var3);
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 18:
                var3 = var24.int32;
                var29 = var3.bind(var24)();
                var3 = var24.pos;
                var29 = var29 + var3;
                var3 = var24.pos;
                var28 = var9;
                var27 = var29;
                var26 = var5;
                var25 = var4;
                if(!(var3 < var29)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var31 = var1.fieldNumbersToCopy;
                var30 = var31.push;
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var3 = var30.bind(var31)(var3);
                var3 = var24.pos;
                var28 = var9;
                var26 = var5;
                var25 = var4;
                var27 = var29;
                if(var3 < var27) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                _fun0004_ip = 20; continue _fun0004;
case 23:
                var3 = var24.bool;
                var3 = var3.bind(var24)();
                var1['isTemplate'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 24:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['type'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 25:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['winningVariationId'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 26:
                var3 = var24.bool;
                var3 = var3.bind(var24)();
                var1['enableEditRawJsonUi'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 27:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['assignmentMode'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 28:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['exposureTracking'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 29:
                var3 = var24.fixed64;
                var29 = var3.bind(var24)();
                var3 = var29.toString;
                var3 = var3.bind(var29)();
                var1['cachedNotificationChannelId'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 30:
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var1['owningTeamId'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 31:
                var29 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var19];
                var3 = var29.bind(var21)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                if(!(var7 !== var3)) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                var30 = var1.surfaces;
                var29 = var30.push;
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var3 = var29.bind(var30)(var3);
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 32:
                var3 = var24.int32;
                var29 = var3.bind(var24)();
                var3 = var24.pos;
                var29 = var29 + var3;
                var3 = var24.pos;
                var28 = var29;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                if(!(var3 < var29)) { _fun0004_ip = 20; continue _fun0004 }
case 34:
                var31 = var1.surfaces;
                var30 = var31.push;
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var3 = var30.bind(var31)(var3);
                var3 = var24.pos;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                var28 = var29;
                if(var3 < var28) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                _fun0004_ip = 20; continue _fun0004;
case 36:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['phase'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 37:
                var30 = var1.rules;
                var29 = var30.push;
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var13];
                var3 = var31.bind(var21)(var3);
                var32 = var3.Rule;
                var31 = var32.internalBinaryRead;
                var3 = var24.uint32;
                var3 = var3.bind(var24)();
                var3 = var31.bind(var32)(var24, var3, var23);
                var3 = var29.bind(var30)(var3);
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 38:
                var30 = var1.variations;
                var29 = var30.push;
                var32 = _closure1_slot16;
                var31 = var32.internalBinaryRead;
                var3 = var24.uint32;
                var3 = var3.bind(var24)();
                var3 = var31.bind(var32)(var24, var3, var23);
                var3 = var29.bind(var30)(var3);
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 39:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['unitType'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 40:
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var1['hashKey'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 41:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['revision'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 42:
                var29 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var14];
                var3 = var29.bind(var21)(var3);
                var31 = var3.StringValue;
                var30 = var31.internalBinaryRead;
                var3 = var24.uint32;
                var36 = var3.bind(var24)();
                var34 = var1.techSpecLink;
                var38 = var31;
                var37 = var24;
                var35 = var23;
                var3 = var38[var30](var37, var36, var35, var34, var33);
                var1['techSpecLink'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 43:
                var29 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var14];
                var3 = var29.bind(var21)(var3);
                var31 = var3.StringValue;
                var30 = var31.internalBinaryRead;
                var3 = var24.uint32;
                var36 = var3.bind(var24)();
                var34 = var1.hypothesis;
                var38 = var31;
                var37 = var24;
                var35 = var23;
                var3 = var38[var30](var37, var36, var35, var34, var33);
                var1['hypothesis'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 44:
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var1['description'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 45:
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var1['title'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 46:
                var3 = var24.fixed64;
                var29 = var3.bind(var24)();
                var3 = var29.toString;
                var3 = var3.bind(var29)();
                var1['editorId'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 47:
                var29 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var29.bind(var21)(var3);
                var31 = var3.Timestamp;
                var30 = var31.internalBinaryRead;
                var3 = var24.uint32;
                var36 = var3.bind(var24)();
                var34 = var1.editedAt;
                var38 = var31;
                var37 = var24;
                var35 = var23;
                var3 = var38[var30](var37, var36, var35, var34, var33);
                var1['editedAt'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 48:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['version'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 49:
                var3 = var24.fixed64;
                var29 = var3.bind(var24)();
                var3 = var29.toString;
                var3 = var3.bind(var29)();
                var1['creatorId'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 50:
                var29 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var29.bind(var21)(var3);
                var31 = var3.Timestamp;
                var30 = var31.internalBinaryRead;
                var3 = var24.uint32;
                var36 = var3.bind(var24)();
                var34 = var1.createdAt;
                var38 = var31;
                var37 = var24;
                var35 = var23;
                var3 = var38[var30](var37, var36, var35, var34, var33);
                var1['createdAt'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 51:
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var1['name'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 52:
                var3 = var24.fixed64;
                var29 = var3.bind(var24)();
                var3 = var29.toString;
                var3 = var3.bind(var29)();
                var1['id'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 20; continue _fun0004;
case 53:
                var29 = var23.readUnknownField;
                if(!(var16 !== var29)) { _fun0004_ip = 54; continue _fun0004 }
case 55:
                var3 = var24.skip;
                var3 = var3.bind(var24)(var7);
                var28 = var9;
                var27 = var6;
                var26 = var29;
                var25 = var3;
                if(!(var17 !== var29)) { _fun0004_ip = 20; continue _fun0004 }
case 56:
                var31 = var29;
                if(!(var18 === var29)) { _fun0004_ip = 57; continue _fun0004 }
case 58:
                var32 = _closure1_slot0;
                var30 = _closure1_slot1;
                var30 = var30[var19];
                var30 = var32.bind(var21)(var30);
                var30 = var30.UnknownFieldHandler;
                var31 = var30.onRead;
case 57:
                var37 = var2.typeName;
                var38 = undefined;
                var36 = var1;
                var35 = var8;
                var34 = var7;
                var33 = var3;
                var30 = var38[var31](var37, var36, var35, var34, var33, var32);
                var28 = var9;
                var27 = var6;
                var26 = var29;
                var25 = var3;
case 20:
                var3 = var24.pos;
                var9 = var28;
                var6 = var27;
                var5 = var26;
                var4 = var25;
                if(var3 < var22) { _fun0004_ip = 16; continue _fun0004 }
case 15:
                return var1;
case 54:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var33 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var38 = 'Unknown field ';
                var36 = ' (wire type ';
                var34 = ') for ';
                var37 = var8;
                var35 = var7;
                var37 = var38[var5](var37, var36, var35, var34, var33, var32);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var38 = var2;
                var1 = new var38[var3](var37, var36);
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
                var8 = '0';
                if(!(var8 !== var2)) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Bit64;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.fixed64;
                var2 = var5.id;
                var2 = var4.bind(var6)(var2);
case 59:
                var2 = var5.name;
                var10 = '';
                if(!(var10 !== var2)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 2;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.string;
                var2 = var5.name;
                var2 = var4.bind(var6)(var2);
case 61:
                var2 = var5.createdAt;
                if(!var2) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var2 = 6;
                var2 = var13[var2];
                var9 = undefined;
                var2 = var12.bind(var9)(var2);
                var7 = var2.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.createdAt;
                var11 = var1.tag;
                var2 = 9;
                var2 = var13[var2];
                var2 = var12.bind(var9)(var2);
                var2 = var2.WireType;
                var9 = var2.LengthDelimited;
                var2 = 3;
                var9 = var11.bind(var1)(var2, var9);
                var2 = var9.fork;
                var2 = var2.bind(var9)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 63:
                var2 = var5.creatorId;
                if(!(var8 !== var2)) { _fun0005_ip = 65; continue _fun0005 }
case 66:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Bit64;
                var2 = 4;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.fixed64;
                var2 = var5.creatorId;
                var2 = var4.bind(var6)(var2);
case 65:
                var2 = var5.version;
                var9 = 0;
                if(!(var9 !== var2)) { _fun0005_ip = 67; continue _fun0005 }
case 68:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 5;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.version;
                var2 = var4.bind(var6)(var2);
case 67:
                var2 = var5.editedAt;
                if(!var2) { _fun0005_ip = 69; continue _fun0005 }
case 70:
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var12 = 6;
                var2 = var15[var12];
                var13 = undefined;
                var2 = var14.bind(var13)(var2);
                var7 = var2.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.editedAt;
                var11 = var1.tag;
                var2 = 9;
                var2 = var15[var2];
                var2 = var14.bind(var13)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                var11 = var11.bind(var1)(var12, var2);
                var2 = var11.fork;
                var2 = var2.bind(var11)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 69:
                var2 = var5.editorId;
                if(!(var8 !== var2)) { _fun0005_ip = 71; continue _fun0005 }
case 72:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Bit64;
                var2 = 7;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.fixed64;
                var2 = var5.editorId;
                var2 = var4.bind(var6)(var2);
case 71:
                var2 = var5.title;
                if(!(var10 !== var2)) { _fun0005_ip = 73; continue _fun0005 }
case 74:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 8;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.string;
                var2 = var5.title;
                var2 = var4.bind(var6)(var2);
case 73:
                var2 = var5.description;
                if(!(var10 !== var2)) { _fun0005_ip = 75; continue _fun0005 }
case 76:
                var6 = var1.tag;
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 9;
                var7 = var2[var4];
                var2 = undefined;
                var2 = var11.bind(var2)(var7);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                var6 = var6.bind(var1)(var4, var2);
                var4 = var6.string;
                var2 = var5.description;
                var2 = var4.bind(var6)(var2);
case 75:
                var2 = var5.hypothesis;
                if(!var2) { _fun0005_ip = 77; continue _fun0005 }
case 78:
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var2 = 7;
                var2 = var14[var2];
                var11 = undefined;
                var2 = var13.bind(var11)(var2);
                var7 = var2.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.hypothesis;
                var12 = var1.tag;
                var2 = 9;
                var2 = var14[var2];
                var2 = var13.bind(var11)(var2);
                var2 = var2.WireType;
                var11 = var2.LengthDelimited;
                var2 = 10;
                var11 = var12.bind(var1)(var2, var11);
                var2 = var11.fork;
                var2 = var2.bind(var11)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 77:
                var2 = var5.techSpecLink;
                if(!var2) { _fun0005_ip = 79; continue _fun0005 }
case 80:
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var2 = 7;
                var2 = var14[var2];
                var11 = undefined;
                var2 = var13.bind(var11)(var2);
                var7 = var2.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.techSpecLink;
                var12 = var1.tag;
                var2 = 9;
                var2 = var14[var2];
                var2 = var13.bind(var11)(var2);
                var2 = var2.WireType;
                var11 = var2.LengthDelimited;
                var2 = 11;
                var11 = var12.bind(var1)(var2, var11);
                var2 = var11.fork;
                var2 = var2.bind(var11)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 79:
                var2 = var5.revision;
                if(!(var9 !== var2)) { _fun0005_ip = 81; continue _fun0005 }
case 82:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 12;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.revision;
                var2 = var4.bind(var6)(var2);
case 81:
                var2 = var5.hashKey;
                if(!(var10 !== var2)) { _fun0005_ip = 83; continue _fun0005 }
case 84:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 13;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.string;
                var2 = var5.hashKey;
                var2 = var4.bind(var6)(var2);
case 83:
                var2 = var5.unitType;
                if(!(var9 !== var2)) { _fun0005_ip = 85; continue _fun0005 }
case 86:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 14;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.unitType;
                var2 = var4.bind(var6)(var2);
case 85:
                var2 = var5.variations;
                var2 = var2.length;
                var6 = var9 < var2;
                var7 = 9;
                var4 = undefined;
                var12 = 15;
                var11 = 0;
                if(!var6) { _fun0005_ip = 87; continue _fun0005 }
case 88:
                var15 = _closure1_slot16;
                var14 = var15.internalBinaryWrite;
                var6 = var5.variations;
                var13 = var6[var11];
                var16 = var1.tag;
                var17 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var17.bind(var4)(var6);
                var6 = var6.WireType;
                var6 = var6.LengthDelimited;
                var16 = var16.bind(var1)(var12, var6);
                var6 = var16.fork;
                var6 = var6.bind(var16)();
                var13 = var14.bind(var15)(var13, var6, var3);
                var6 = var13.join;
                var6 = var6.bind(var13)();
                var11 = var11 + 1;
                var6 = var5.variations;
                var6 = var6.length;
                if(var11 < var6) { _fun0005_ip = 88; continue _fun0005 }
case 87:
                var6 = var5.rules;
                var6 = var6.length;
                var6 = var9 < var6;
                var13 = 8;
                var12 = 16;
                var11 = 0;
                if(!var6) { _fun0005_ip = 89; continue _fun0005 }
case 90:
                var18 = _closure1_slot0;
                var6 = _closure1_slot1;
                var14 = var6[var13];
                var14 = var18.bind(var4)(var14);
                var16 = var14.Rule;
                var15 = var16.internalBinaryWrite;
                var14 = var5.rules;
                var14 = var14[var11];
                var17 = var1.tag;
                var6 = var6[var7];
                var6 = var18.bind(var4)(var6);
                var6 = var6.WireType;
                var6 = var6.LengthDelimited;
                var17 = var17.bind(var1)(var12, var6);
                var6 = var17.fork;
                var6 = var6.bind(var17)();
                var14 = var15.bind(var16)(var14, var6, var3);
                var6 = var14.join;
                var6 = var6.bind(var14)();
                var11 = var11 + 1;
                var6 = var5.rules;
                var6 = var6.length;
                if(var11 < var6) { _fun0005_ip = 90; continue _fun0005 }
case 89:
                var6 = var5.phase;
                if(!(var9 !== var6)) { _fun0005_ip = 91; continue _fun0005 }
case 92:
                var12 = var1.tag;
                var11 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var11.bind(var4)(var6);
                var6 = var6.WireType;
                var11 = var6.Varint;
                var6 = 18;
                var12 = var12.bind(var1)(var6, var11);
                var11 = var12.int32;
                var6 = var5.phase;
                var6 = var11.bind(var12)(var6);
case 91:
                var6 = var5.surfaces;
                var6 = var6.length;
                if(!var6) { _fun0005_ip = 93; continue _fun0005 }
case 94:
                var12 = var1.tag;
                var11 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var11.bind(var4)(var6);
                var6 = var6.WireType;
                var11 = var6.LengthDelimited;
                var6 = 19;
                var11 = var12.bind(var1)(var6, var11);
                var6 = var11.fork;
                var6 = var6.bind(var11)();
                var6 = var5.surfaces;
                var6 = var6.length;
                var6 = var9 < var6;
                var11 = 0;
                if(!var6) { _fun0005_ip = 95; continue _fun0005 }
case 96:
                var12 = var1.int32;
                var6 = var5.surfaces;
                var6 = var6[var11];
                var6 = var12.bind(var1)(var6);
                var11 = var11 + 1;
                var6 = var5.surfaces;
                var6 = var6.length;
                if(var11 < var6) { _fun0005_ip = 96; continue _fun0005 }
case 95:
                var6 = var1.join;
                var6 = var6.bind(var1)();
case 93:
                var6 = var5.owningTeamId;
                if(!(var10 !== var6)) { _fun0005_ip = 97; continue _fun0005 }
case 98:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var10.bind(var4)(var6);
                var6 = var6.WireType;
                var10 = var6.LengthDelimited;
                var6 = 20;
                var11 = var11.bind(var1)(var6, var10);
                var10 = var11.string;
                var6 = var5.owningTeamId;
                var6 = var10.bind(var11)(var6);
case 97:
                var6 = var5.cachedNotificationChannelId;
                if(!(var8 !== var6)) { _fun0005_ip = 99; continue _fun0005 }
case 100:
                var10 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Bit64;
                var6 = 21;
                var10 = var10.bind(var1)(var6, var8);
                var8 = var10.fixed64;
                var6 = var5.cachedNotificationChannelId;
                var6 = var8.bind(var10)(var6);
case 99:
                var6 = var5.exposureTracking;
                if(!(var9 !== var6)) { _fun0005_ip = 101; continue _fun0005 }
case 102:
                var10 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Varint;
                var6 = 22;
                var10 = var10.bind(var1)(var6, var8);
                var8 = var10.int32;
                var6 = var5.exposureTracking;
                var6 = var8.bind(var10)(var6);
case 101:
                var6 = var5.assignmentMode;
                if(!(var9 !== var6)) { _fun0005_ip = 103; continue _fun0005 }
case 104:
                var10 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Varint;
                var6 = 25;
                var10 = var10.bind(var1)(var6, var8);
                var8 = var10.int32;
                var6 = var5.assignmentMode;
                var6 = var8.bind(var10)(var6);
case 103:
                var8 = var5.enableEditRawJsonUi;
                var6 = false;
                if(!(var6 !== var8)) { _fun0005_ip = 105; continue _fun0005 }
case 106:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 23;
                var11 = var11.bind(var1)(var8, var10);
                var10 = var11.bool;
                var8 = var5.enableEditRawJsonUi;
                var8 = var10.bind(var11)(var8);
case 105:
                var8 = var5.winningVariationId;
                if(!(var9 !== var8)) { _fun0005_ip = 107; continue _fun0005 }
case 108:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 24;
                var11 = var11.bind(var1)(var8, var10);
                var10 = var11.int32;
                var8 = var5.winningVariationId;
                var8 = var10.bind(var11)(var8);
case 107:
                var8 = var5.type;
                if(!(var9 !== var8)) { _fun0005_ip = 109; continue _fun0005 }
case 110:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 26;
                var11 = var11.bind(var1)(var8, var10);
                var10 = var11.int32;
                var8 = var5.type;
                var8 = var10.bind(var11)(var8);
case 109:
                var8 = var5.isTemplate;
                if(!(var6 !== var8)) { _fun0005_ip = 111; continue _fun0005 }
case 112:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 27;
                var11 = var11.bind(var1)(var8, var10);
                var10 = var11.bool;
                var8 = var5.isTemplate;
                var8 = var10.bind(var11)(var8);
case 111:
                var8 = var5.fieldNumbersToCopy;
                var8 = var8.length;
                if(!var8) { _fun0005_ip = 113; continue _fun0005 }
case 114:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.LengthDelimited;
                var8 = 28;
                var10 = var11.bind(var1)(var8, var10);
                var8 = var10.fork;
                var8 = var8.bind(var10)();
                var8 = var5.fieldNumbersToCopy;
                var8 = var8.length;
                var8 = var9 < var8;
                var9 = 0;
                if(!var8) { _fun0005_ip = 115; continue _fun0005 }
case 116:
                var10 = var1.int32;
                var8 = var5.fieldNumbersToCopy;
                var8 = var8[var9];
                var8 = var10.bind(var1)(var8);
                var9 = var9 + 1;
                var8 = var5.fieldNumbersToCopy;
                var8 = var8.length;
                if(var9 < var8) { _fun0005_ip = 116; continue _fun0005 }
case 115:
                var8 = var1.join;
                var8 = var8.bind(var1)();
case 113:
                var3 = var3.writeUnknownFields;
                if(!(var6 !== var3)) { _fun0005_ip = 117; continue _fun0005 }
case 118:
                var6 = 1;
                if(!(var6 == var3)) { _fun0005_ip = 119; continue _fun0005 }
case 120:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 119:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 117:
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
    var25 = var5;
    var4 = new var25[var4](var24);
    var5 = var4 instanceof Object ? var4 : var5;
    var4 = var16[var2];
    var4 = var15.bind(var1)(var4);
    var17 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Variation$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot18;
            var6 = new Array(6);
            var1 = {'no': 1, 'name': 'id', 'kind': 'scalar', 'T': 5};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'label', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'target_allocation', 'kind': 'scalar', 'T': 5};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'buckets', 'kind': 'message', 'repeat': 1};
            var8 = function T() {
                var1 = _closure1_slot17;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'type', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot13;
                var1 = ['discord_protos.discord_experimentation.v1.Variation.Type'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'configuration', 'kind': 'message'};
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
            var6[5] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.Variation'];
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
                var1 = {'id': 0, 'label': '', 'targetAllocation': 0, 'buckets': null, 'type': 0};
                var2 = new Array(0);
                var1['buckets'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 9;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0006_ip = 121; continue _fun0006 }
case 122:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 121:
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
                if(!(var2 == var1)) { _fun0007_ip = 13; continue _fun0007 }
case 14:
                var2 = var20.create;
                var1 = var2.bind(var20)();
case 13:
                var3 = var22.pos;
                var2 = arg2;
                var19 = var3 + var2;
                var2 = var22.pos;
                var2 = var2 < var19;
                var18 = undefined;
                var16 = 7;
                var15 = 9;
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
                if(!var2) { _fun0007_ip = 123; continue _fun0007 }
case 124:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0007_ip = 125; continue _fun0007 }
case 126:
                if(!(var7 !== var31)) { _fun0007_ip = 127; continue _fun0007 }
case 128:
                if(!(var8 !== var31)) { _fun0007_ip = 129; continue _fun0007 }
case 130:
                if(!(var9 !== var31)) { _fun0007_ip = 131; continue _fun0007 }
case 132:
                if(!(var10 !== var31)) { _fun0007_ip = 133; continue _fun0007 }
case 11:
                if(!(var11 !== var31)) { _fun0007_ip = 134; continue _fun0007 }
case 135:
                var25 = var21.readUnknownField;
                if(!(var12 !== var25)) { _fun0007_ip = 136; continue _fun0007 }
case 137:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var13 !== var25)) { _fun0007_ip = 138; continue _fun0007 }
case 139:
                var27 = var25;
                if(!(var14 === var25)) { _fun0007_ip = 140; continue _fun0007 }
case 141:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var15];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 140:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0007_ip = 138; continue _fun0007;
case 136:
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
case 134:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.StringValue;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.configuration;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['configuration'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 138; continue _fun0007;
case 133:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['type'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 138; continue _fun0007;
case 131:
                var26 = var1.buckets;
                var25 = var26.push;
                var28 = _closure1_slot17;
                var27 = var28.internalBinaryRead;
                var2 = var22.uint32;
                var2 = var2.bind(var22)();
                var2 = var27.bind(var28)(var22, var2, var21);
                var2 = var25.bind(var26)(var2);
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 138; continue _fun0007;
case 129:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['targetAllocation'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 138; continue _fun0007;
case 127:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['label'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 138; continue _fun0007;
case 125:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['id'] = var2;
                var24 = var4;
                var23 = var3;
case 138:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0007_ip = 124; continue _fun0007 }
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.id;
                var8 = 0;
                if(!(var8 !== var2)) { _fun0008_ip = 142; continue _fun0008 }
case 143:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.id;
                var2 = var4.bind(var6)(var2);
case 142:
                var4 = var5.label;
                var2 = '';
                if(!(var2 !== var4)) { _fun0008_ip = 144; continue _fun0008 }
case 145:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
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
case 144:
                var2 = var5.targetAllocation;
                if(!(var8 !== var2)) { _fun0008_ip = 146; continue _fun0008 }
case 147:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 3;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.targetAllocation;
                var2 = var4.bind(var6)(var2);
case 146:
                var2 = var5.buckets;
                var2 = var2.length;
                var6 = var8 < var2;
                var7 = 9;
                var4 = undefined;
                var10 = 4;
                var9 = 0;
                if(!var6) { _fun0008_ip = 148; continue _fun0008 }
case 149:
                var13 = _closure1_slot17;
                var12 = var13.internalBinaryWrite;
                var6 = var5.buckets;
                var11 = var6[var9];
                var14 = var1.tag;
                var15 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var15.bind(var4)(var6);
                var6 = var6.WireType;
                var6 = var6.LengthDelimited;
                var14 = var14.bind(var1)(var10, var6);
                var6 = var14.fork;
                var6 = var6.bind(var14)();
                var11 = var12.bind(var13)(var11, var6, var3);
                var6 = var11.join;
                var6 = var6.bind(var11)();
                var9 = var9 + 1;
                var6 = var5.buckets;
                var6 = var6.length;
                if(var9 < var6) { _fun0008_ip = 149; continue _fun0008 }
case 148:
                var6 = var5.type;
                if(!(var8 !== var6)) { _fun0008_ip = 150; continue _fun0008 }
case 151:
                var9 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Varint;
                var6 = 5;
                var9 = var9.bind(var1)(var6, var8);
                var8 = var9.int32;
                var6 = var5.type;
                var6 = var8.bind(var9)(var6);
case 150:
                var6 = var5.configuration;
                if(!var6) { _fun0008_ip = 152; continue _fun0008 }
case 153:
                var11 = _closure1_slot0;
                var6 = _closure1_slot1;
                var8 = 7;
                var8 = var6[var8];
                var8 = var11.bind(var4)(var8);
                var10 = var8.StringValue;
                var9 = var10.internalBinaryWrite;
                var8 = var5.configuration;
                var12 = var1.tag;
                var6 = var6[var7];
                var6 = var11.bind(var4)(var6);
                var6 = var6.WireType;
                var11 = var6.LengthDelimited;
                var6 = 6;
                var11 = var12.bind(var1)(var6, var11);
                var6 = var11.fork;
                var6 = var6.bind(var11)();
                var8 = var9.bind(var10)(var8, var6, var3);
                var6 = var8.join;
                var6 = var6.bind(var8)();
case 152:
                var3 = var3.writeUnknownFields;
                var6 = false;
                if(!(var6 !== var3)) { _fun0008_ip = 154; continue _fun0008 }
case 72:
                var6 = 1;
                if(!(var6 == var3)) { _fun0008_ip = 155; continue _fun0008 }
case 156:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 155:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 154:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var17);
    var17 = var4.prototype;
    var17 = Object.create(var17, {constructor: {value: var4}});
    var25 = var17;
    var4 = new var25[var4](var24);
    var4 = var4 instanceof Object ? var4 : var17;
    var _closure1_slot16 = var4;
    var2 = var16[var2];
    var2 = var15.bind(var1)(var2);
    var17 = var2.MessageType;
    var2 = function(arg1) {
        var4 = function Bucket$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot18;
            var6 = new Array(3);
            var1 = {'no': 1, 'name': 'start', 'kind': 'scalar', 'T': 5};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'stop', 'kind': 'scalar', 'T': 5};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'type', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot14;
                var1 = ['discord_protos.discord_experimentation.v1.Bucket.Type'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.Bucket'];
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
                var1 = {'start': 0, 'stop': 0, 'type': 0};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 9;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0009_ip = 157; continue _fun0009 }
case 158:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 157:
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
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0010_ip = 13; continue _fun0010 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0010_ip = 159; continue _fun0010 }
case 142:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0010_ip = 160; continue _fun0010 }
case 161:
                if(!(var7 !== var27)) { _fun0010_ip = 162; continue _fun0010 }
case 163:
                if(!(var8 !== var27)) { _fun0010_ip = 164; continue _fun0010 }
case 165:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0010_ip = 166; continue _fun0010 }
case 167:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0010_ip = 168; continue _fun0010 }
case 169:
                var23 = var21;
                if(!(var11 === var21)) { _fun0010_ip = 170; continue _fun0010 }
case 147:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 170:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0010_ip = 168; continue _fun0010;
case 166:
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
case 164:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['type'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0010_ip = 168; continue _fun0010;
case 162:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['stop'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0010_ip = 168; continue _fun0010;
case 160:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['start'] = var2;
                var20 = var4;
                var19 = var3;
case 168:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0010_ip = 142; continue _fun0010 }
case 159:
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
                var2 = var5.start;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0011_ip = 171; continue _fun0011 }
case 172:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.start;
                var2 = var4.bind(var6)(var2);
case 171:
                var2 = var5.stop;
                if(!(var3 !== var2)) { _fun0011_ip = 173; continue _fun0011 }
case 174:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 2;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.stop;
                var2 = var4.bind(var6)(var2);
case 173:
                var2 = var5.type;
                if(!(var3 !== var2)) { _fun0011_ip = 140; continue _fun0011 }
case 175:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 3;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.type;
                var2 = var3.bind(var4)(var2);
case 140:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0011_ip = 176; continue _fun0011 }
case 177:
                var2 = 1;
                if(!(var2 == var4)) { _fun0011_ip = 178; continue _fun0011 }
case 179:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 178:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 176:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var17);
    var17 = var2.prototype;
    var17 = Object.create(var17, {constructor: {value: var2}});
    var25 = var17;
    var2 = new var25[var2](var24);
    var2 = var2 instanceof Object ? var2 : var17;
    var _closure1_slot17 = var2;
    var14 = 10;
    var14 = var16[var14];
    var16 = var15.bind(var1)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = '../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx';
    var14 = var15.bind(var16)(var14);
    var3['Experiment_UnitType'] = var13;
    var3['Experiment_Surface'] = var12;
    var3['Experiment_ExposureTracking'] = var11;
    var3['Experiment_AssignmentMode'] = var10;
    var3['Experiment_Type'] = var9;
    var3['Variation_Type'] = var8;
    var3['Bucket_Type'] = var7;
    var3['Phase'] = var6;
    var3['Experiment'] = var5;
    var3['Variation'] = var4;
    var3['Bucket'] = var2;
    return var1;
})();
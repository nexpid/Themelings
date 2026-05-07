// discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var17 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var18 = dependencyMap;
    var _closure1_slot0 = var17;
    var _closure1_slot1 = var18;
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
            var1 = _closure1_slot21;
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
    var _closure1_slot20 = var1;
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
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var21 = 0;
    var2 = var18[var21];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var20 = 1;
    var2 = var18[var20];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var19 = 2;
    var2 = var18[var19];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var22 = 3;
    var2 = var18[var22];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var6 = 4;
    var2 = var18[var6];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var8 = 5;
    var2 = var18[var8];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var15 = {};
    var15['UNSPECIFIED'] = var21;
    var2 = 'UNSPECIFIED';
    var15[var21] = var2;
    var15['USER'] = var20;
    var4 = 'USER';
    var15[var20] = var4;
    var15['INSTALLATION'] = var19;
    var4 = 'INSTALLATION';
    var15[var19] = var4;
    var15['GUILD'] = var22;
    var4 = 'GUILD';
    var15[var22] = var4;
    var15['CUSTOM'] = var6;
    var4 = 'CUSTOM';
    var15[var6] = var4;
    var _closure1_slot8 = var15;
    var14 = {};
    var14['SURFACE_UNSPECIFIED'] = var21;
    var4 = 'SURFACE_UNSPECIFIED';
    var14[var21] = var4;
    var14['API'] = var20;
    var4 = 'API';
    var14[var20] = var4;
    var14['APP'] = var19;
    var4 = 'APP';
    var14[var19] = var4;
    var14['DEVELOPER_PORTAL'] = var22;
    var4 = 'DEVELOPER_PORTAL';
    var14[var22] = var4;
    var14['ADMIN_PANEL'] = var6;
    var4 = 'ADMIN_PANEL';
    var14[var6] = var4;
    var14['ADS_BUDGET_AB'] = var8;
    var4 = 'ADS_BUDGET_AB';
    var14[var8] = var4;
    var5 = 6;
    var14['AV_WORKER'] = var5;
    var4 = 'AV_WORKER';
    var14[var5] = var4;
    var4 = 7;
    var14['SEO'] = var4;
    var7 = 'SEO';
    var14[var4] = var7;
    var _closure1_slot9 = var14;
    var13 = {};
    var13['ENABLED'] = var21;
    var7 = 'ENABLED';
    var13[var21] = var7;
    var13['DISABLED'] = var20;
    var7 = 'DISABLED';
    var13[var20] = var7;
    var _closure1_slot10 = var13;
    var12 = {};
    var12['FULL'] = var21;
    var7 = 'FULL';
    var12[var21] = var7;
    var12['FORCE_CONTROL'] = var22;
    var7 = 'FORCE_CONTROL';
    var12[var22] = var7;
    var12['OVERRIDES_ONLY'] = var6;
    var7 = 'OVERRIDES_ONLY';
    var12[var6] = var7;
    var12['OFF'] = var8;
    var7 = 'OFF';
    var12[var8] = var7;
    var _closure1_slot11 = var12;
    var11 = {};
    var11['DEFAULT'] = var21;
    var7 = 'DEFAULT';
    var11[var21] = var7;
    var11['HOLDOUT'] = var20;
    var7 = 'HOLDOUT';
    var11[var20] = var7;
    var11['NUMBERLINE'] = var19;
    var7 = 'NUMBERLINE';
    var11[var19] = var7;
    var _closure1_slot12 = var11;
    var10 = {};
    var10['CUSTOM_UNIT_PREFIX_UNSPECIFIED'] = var21;
    var7 = 'CUSTOM_UNIT_PREFIX_UNSPECIFIED';
    var10[var21] = var7;
    var10['SEO_URL_SLUG'] = var20;
    var7 = 'SEO_URL_SLUG';
    var10[var20] = var7;
    var _closure1_slot13 = var10;
    var9 = {};
    var9['UNSPECIFIED'] = var21;
    var9[var21] = var2;
    var9['CONTROL'] = var20;
    var7 = 'CONTROL';
    var9[var20] = var7;
    var9['TREATMENT'] = var19;
    var7 = 'TREATMENT';
    var9[var19] = var7;
    var9['OVERRIDE'] = var22;
    var7 = 'OVERRIDE';
    var9[var22] = var7;
    var _closure1_slot14 = var9;
    var8 = {};
    var8['UNSPECIFIED'] = var21;
    var8[var21] = var2;
    var8['ACTIVE'] = var20;
    var7 = 'ACTIVE';
    var8[var20] = var7;
    var8['UNUSED'] = var19;
    var7 = 'UNUSED';
    var8[var19] = var7;
    var8['BURNED'] = var22;
    var7 = 'BURNED';
    var8[var22] = var7;
    var8['PRESERVED'] = var6;
    var7 = 'PRESERVED';
    var8[var6] = var7;
    var _closure1_slot15 = var8;
    var7 = {};
    var7['UNSPECIFIED'] = var21;
    var7[var21] = var2;
    var7['DRAFT'] = var20;
    var2 = 'DRAFT';
    var7[var20] = var2;
    var7['MEASUREMENT'] = var19;
    var2 = 'MEASUREMENT';
    var7[var19] = var2;
    var7['ROLLING_OUT'] = var6;
    var2 = 'ROLLING_OUT';
    var7[var6] = var2;
    var7['ARCHIVED'] = var5;
    var2 = 'ARCHIVED';
    var7[var5] = var2;
    var7['AA_MODE'] = var4;
    var2 = 'AA_MODE';
    var7[var4] = var2;
    var _closure1_slot16 = var7;
    var2 = 9;
    var4 = var18[var2];
    var4 = var17.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Experiment$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot20;
            var6 = new Array(39);
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
                var1 = _closure1_slot17;
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
                var2 = _closure1_slot16;
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
            var1 = {'no': 34, 'name': 'extra_outcome_context', 'kind': 'scalar', 'T': 9};
            var6[24] = var1;
            var1 = {'no': 26, 'name': 'type', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot12;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.Type'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[25] = var1;
            var1 = {'no': 27, 'name': 'is_template', 'kind': 'scalar', 'T': 8};
            var6[26] = var1;
            var1 = {'no': 28, 'name': 'field_numbers_to_copy', 'kind': 'scalar', 'repeat': 1, 'T': 5};
            var6[27] = var1;
            var1 = {'no': 29, 'name': 'engine_feature_flags', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[28] = var1;
            var1 = {'no': 30, 'name': 'debug_config', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot19;
                return var1;
            };
            var1['T'] = var8;
            var6[29] = var1;
            var1 = {'no': 31, 'name': 'expected_end_date', 'kind': 'message'};
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
            var6[30] = var1;
            var1 = {'no': 32, 'name': 'is_automated_change', 'kind': 'scalar', 'T': 8};
            var6[31] = var1;
            var1 = {'no': 33, 'name': 'archive_at', 'kind': 'message'};
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
            var6[32] = var1;
            var1 = {'no': 35, 'name': 'guild_experiment_version', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Int32Value;
                return var1;
            };
            var1['T'] = var8;
            var6[33] = var1;
            var1 = {'no': 36, 'name': 'custom_unit_prefix', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot13;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.CustomUnitPrefix'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[34] = var1;
            var1 = {'no': 37, 'name': 'growthbook_tags', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[35] = var1;
            var1 = {'no': 38, 'name': 'allocate_right_to_left', 'kind': 'scalar', 'T': 8};
            var6[36] = var1;
            var1 = {'no': 39, 'name': 'is_managed', 'kind': 'scalar', 'T': 8};
            var6[37] = var1;
            var1 = {'no': 41, 'name': 'number_line_id', 'kind': 'scalar', 'T': 6};
            var6[38] = var1;
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
                var1 = {'id': '0', 'name': '', 'creatorId': '0', 'version': 0, 'editorId': '0', 'title': '', 'description': '', 'revision': 0, 'hashKey': '', 'unitType': 0, 'variations': null, 'rules': null, 'phase': 0, 'surfaces': null, 'owningTeamId': '', 'cachedNotificationChannelId': '0', 'exposureTracking': 0, 'assignmentMode': 0, 'enableEditRawJsonUi': false, 'winningVariationId': 0, 'extraOutcomeContext': '', 'type': 0, 'isTemplate': false};
                var2 = '0';
                var3 = 0;
                var6 = new Array(0);
                var1['variations'] = var6;
                var6 = new Array(0);
                var1['rules'] = var6;
                var6 = new Array(0);
                var1['surfaces'] = var6;
                var11 = false;
                var6 = new Array(0);
                var1['fieldNumbersToCopy'] = var6;
                var6 = new Array(0);
                var1['engineFeatureFlags'] = var6;
                var1['isAutomatedChange'] = var11;
                var1['customUnitPrefix'] = var3;
                var3 = new Array(0);
                var1['growthbookTags'] = var3;
                var1['allocateRightToLeft'] = var11;
                var1['isManaged'] = var11;
                var1['numberLineId'] = var2;
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
                SwitchImm(value_reg=7, jump_table_address=2409, default_jump_address=2191, unsigned_min_value=1, unsigned_max_value=41) // Switch table: [2152, 2120, 2039, 1997, 1964, 1883, 1841, 1809, 1777, 1696, 1615, 1582, 1550, 1517, 1457, 1378, 2191, 1345, 1176, 1144, 1102, 1069, 1003, 970, 1036, 905, 872, 703, 661, 599, 518, 485, 404, 938, 323, 290, 248, 215, 182, 2191, 140];
case 17:
                var3 = var24.fixed64;
                var25 = var3.bind(var24)();
                var3 = var25.toString;
                var3 = var3.bind(var25)();
                var1['numberLineId'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 12:
                var3 = var24.bool;
                var3 = var3.bind(var24)();
                var1['isManaged'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 19:
                var3 = var24.bool;
                var3 = var3.bind(var24)();
                var1['allocateRightToLeft'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 20:
                var30 = var1.growthbookTags;
                var29 = var30.push;
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var3 = var29.bind(var30)(var3);
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 21:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['customUnitPrefix'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 22:
                var29 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var14];
                var3 = var29.bind(var21)(var3);
                var31 = var3.Int32Value;
                var30 = var31.internalBinaryRead;
                var3 = var24.uint32;
                var36 = var3.bind(var24)();
                var34 = var1.guildExperimentVersion;
                var38 = var31;
                var37 = var24;
                var35 = var23;
                var3 = var38[var30](var37, var36, var35, var34, var33);
                var1['guildExperimentVersion'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 23:
                var29 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var29.bind(var21)(var3);
                var31 = var3.Timestamp;
                var30 = var31.internalBinaryRead;
                var3 = var24.uint32;
                var36 = var3.bind(var24)();
                var34 = var1.archiveAt;
                var38 = var31;
                var37 = var24;
                var35 = var23;
                var3 = var38[var30](var37, var36, var35, var34, var33);
                var1['archiveAt'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 24:
                var3 = var24.bool;
                var3 = var3.bind(var24)();
                var1['isAutomatedChange'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 25:
                var29 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var29.bind(var21)(var3);
                var31 = var3.Timestamp;
                var30 = var31.internalBinaryRead;
                var3 = var24.uint32;
                var36 = var3.bind(var24)();
                var34 = var1.expectedEndDate;
                var38 = var31;
                var37 = var24;
                var35 = var23;
                var3 = var38[var30](var37, var36, var35, var34, var33);
                var1['expectedEndDate'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 26:
                var31 = _closure1_slot19;
                var30 = var31.internalBinaryRead;
                var3 = var24.uint32;
                var36 = var3.bind(var24)();
                var34 = var1.debugConfig;
                var38 = var31;
                var37 = var24;
                var35 = var23;
                var3 = var38[var30](var37, var36, var35, var34, var33);
                var1['debugConfig'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 27:
                var30 = var1.engineFeatureFlags;
                var29 = var30.push;
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var3 = var29.bind(var30)(var3);
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 28:
                var29 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var19];
                var3 = var29.bind(var21)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                if(!(var7 !== var3)) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                var30 = var1.fieldNumbersToCopy;
                var29 = var30.push;
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var3 = var29.bind(var30)(var3);
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 29:
                var3 = var24.int32;
                var29 = var3.bind(var24)();
                var3 = var24.pos;
                var29 = var29 + var3;
                var3 = var24.pos;
                var28 = var9;
                var27 = var29;
                var26 = var5;
                var25 = var4;
                if(!(var3 < var29)) { _fun0004_ip = 18; continue _fun0004 }
case 31:
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
                if(var3 < var27) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                _fun0004_ip = 18; continue _fun0004;
case 33:
                var3 = var24.bool;
                var3 = var3.bind(var24)();
                var1['isTemplate'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 34:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['type'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 35:
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var1['extraOutcomeContext'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 36:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['winningVariationId'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 37:
                var3 = var24.bool;
                var3 = var3.bind(var24)();
                var1['enableEditRawJsonUi'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 38:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['assignmentMode'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 39:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['exposureTracking'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 40:
                var3 = var24.fixed64;
                var29 = var3.bind(var24)();
                var3 = var29.toString;
                var3 = var3.bind(var29)();
                var1['cachedNotificationChannelId'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 41:
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var1['owningTeamId'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 42:
                var29 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var19];
                var3 = var29.bind(var21)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                if(!(var7 !== var3)) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                var30 = var1.surfaces;
                var29 = var30.push;
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var3 = var29.bind(var30)(var3);
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 43:
                var3 = var24.int32;
                var29 = var3.bind(var24)();
                var3 = var24.pos;
                var29 = var29 + var3;
                var3 = var24.pos;
                var28 = var29;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                if(!(var3 < var29)) { _fun0004_ip = 18; continue _fun0004 }
case 45:
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
                if(var3 < var28) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                _fun0004_ip = 18; continue _fun0004;
case 47:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['phase'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 48:
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
                _fun0004_ip = 18; continue _fun0004;
case 49:
                var30 = var1.variations;
                var29 = var30.push;
                var32 = _closure1_slot17;
                var31 = var32.internalBinaryRead;
                var3 = var24.uint32;
                var3 = var3.bind(var24)();
                var3 = var31.bind(var32)(var24, var3, var23);
                var3 = var29.bind(var30)(var3);
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 50:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['unitType'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 51:
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var1['hashKey'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 52:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['revision'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 53:
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
                _fun0004_ip = 18; continue _fun0004;
case 54:
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
                _fun0004_ip = 18; continue _fun0004;
case 55:
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var1['description'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 56:
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var1['title'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 57:
                var3 = var24.fixed64;
                var29 = var3.bind(var24)();
                var3 = var29.toString;
                var3 = var3.bind(var29)();
                var1['editorId'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 58:
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
                _fun0004_ip = 18; continue _fun0004;
case 59:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['version'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 60:
                var3 = var24.fixed64;
                var29 = var3.bind(var24)();
                var3 = var29.toString;
                var3 = var3.bind(var29)();
                var1['creatorId'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 61:
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
                _fun0004_ip = 18; continue _fun0004;
case 62:
                var3 = var24.string;
                var3 = var3.bind(var24)();
                var1['name'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 63:
                var3 = var24.fixed64;
                var29 = var3.bind(var24)();
                var3 = var29.toString;
                var3 = var3.bind(var29)();
                var1['id'] = var3;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 64:
                var29 = var23.readUnknownField;
                if(!(var16 !== var29)) { _fun0004_ip = 65; continue _fun0004 }
case 66:
                var3 = var24.skip;
                var3 = var3.bind(var24)(var7);
                var28 = var9;
                var27 = var6;
                var26 = var29;
                var25 = var3;
                if(!(var17 !== var29)) { _fun0004_ip = 18; continue _fun0004 }
case 67:
                var31 = var29;
                if(!(var18 === var29)) { _fun0004_ip = 68; continue _fun0004 }
case 69:
                var32 = _closure1_slot0;
                var30 = _closure1_slot1;
                var30 = var30[var19];
                var30 = var32.bind(var21)(var30);
                var30 = var30.UnknownFieldHandler;
                var31 = var30.onRead;
case 68:
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
case 18:
                var3 = var24.pos;
                var9 = var28;
                var6 = var27;
                var5 = var26;
                var4 = var25;
                if(var3 < var22) { _fun0004_ip = 16; continue _fun0004 }
case 15:
                return var1;
case 65:
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
                var9 = '0';
                if(!(var9 !== var2)) { _fun0005_ip = 70; continue _fun0005 }
case 71:
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
case 70:
                var2 = var5.name;
                var10 = '';
                if(!(var10 !== var2)) { _fun0005_ip = 72; continue _fun0005 }
case 73:
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
case 72:
                var2 = var5.createdAt;
                if(!var2) { _fun0005_ip = 74; continue _fun0005 }
case 75:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var2 = 6;
                var2 = var13[var2];
                var8 = undefined;
                var2 = var12.bind(var8)(var2);
                var7 = var2.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.createdAt;
                var11 = var1.tag;
                var2 = 9;
                var2 = var13[var2];
                var2 = var12.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 3;
                var8 = var11.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 74:
                var2 = var5.creatorId;
                if(!(var9 !== var2)) { _fun0005_ip = 76; continue _fun0005 }
case 77:
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
case 76:
                var2 = var5.version;
                var11 = 0;
                if(!(var11 !== var2)) { _fun0005_ip = 78; continue _fun0005 }
case 79:
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
case 78:
                var2 = var5.editedAt;
                if(!var2) { _fun0005_ip = 80; continue _fun0005 }
case 81:
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var12 = 6;
                var2 = var15[var12];
                var13 = undefined;
                var2 = var14.bind(var13)(var2);
                var7 = var2.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.editedAt;
                var8 = var1.tag;
                var2 = 9;
                var2 = var15[var2];
                var2 = var14.bind(var13)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                var8 = var8.bind(var1)(var12, var2);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 80:
                var2 = var5.editorId;
                if(!(var9 !== var2)) { _fun0005_ip = 82; continue _fun0005 }
case 83:
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
case 82:
                var2 = var5.title;
                if(!(var10 !== var2)) { _fun0005_ip = 84; continue _fun0005 }
case 85:
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
case 84:
                var2 = var5.description;
                if(!(var10 !== var2)) { _fun0005_ip = 86; continue _fun0005 }
case 87:
                var6 = var1.tag;
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 9;
                var7 = var2[var4];
                var2 = undefined;
                var2 = var8.bind(var2)(var7);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                var6 = var6.bind(var1)(var4, var2);
                var4 = var6.string;
                var2 = var5.description;
                var2 = var4.bind(var6)(var2);
case 86:
                var2 = var5.hypothesis;
                if(!var2) { _fun0005_ip = 88; continue _fun0005 }
case 29:
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var2 = 7;
                var2 = var14[var2];
                var8 = undefined;
                var2 = var13.bind(var8)(var2);
                var7 = var2.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.hypothesis;
                var12 = var1.tag;
                var2 = 9;
                var2 = var14[var2];
                var2 = var13.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 10;
                var8 = var12.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 88:
                var2 = var5.techSpecLink;
                if(!var2) { _fun0005_ip = 89; continue _fun0005 }
case 90:
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var2 = 7;
                var2 = var14[var2];
                var8 = undefined;
                var2 = var13.bind(var8)(var2);
                var7 = var2.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.techSpecLink;
                var12 = var1.tag;
                var2 = 9;
                var2 = var14[var2];
                var2 = var13.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 11;
                var8 = var12.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 89:
                var2 = var5.revision;
                if(!(var11 !== var2)) { _fun0005_ip = 91; continue _fun0005 }
case 92:
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
case 91:
                var2 = var5.hashKey;
                if(!(var10 !== var2)) { _fun0005_ip = 93; continue _fun0005 }
case 94:
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
case 93:
                var2 = var5.unitType;
                if(!(var11 !== var2)) { _fun0005_ip = 95; continue _fun0005 }
case 96:
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
case 95:
                var2 = var5.variations;
                var2 = var2.length;
                var6 = var11 < var2;
                var7 = 9;
                var4 = undefined;
                var12 = 15;
                var8 = 0;
                if(!var6) { _fun0005_ip = 97; continue _fun0005 }
case 98:
                var15 = _closure1_slot17;
                var14 = var15.internalBinaryWrite;
                var6 = var5.variations;
                var13 = var6[var8];
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
                var8 = var8 + 1;
                var6 = var5.variations;
                var6 = var6.length;
                if(var8 < var6) { _fun0005_ip = 98; continue _fun0005 }
case 97:
                var6 = var5.rules;
                var6 = var6.length;
                var6 = var11 < var6;
                var13 = 8;
                var12 = 16;
                var8 = 0;
                if(!var6) { _fun0005_ip = 99; continue _fun0005 }
case 100:
                var18 = _closure1_slot0;
                var6 = _closure1_slot1;
                var14 = var6[var13];
                var14 = var18.bind(var4)(var14);
                var16 = var14.Rule;
                var15 = var16.internalBinaryWrite;
                var14 = var5.rules;
                var14 = var14[var8];
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
                var8 = var8 + 1;
                var6 = var5.rules;
                var6 = var6.length;
                if(var8 < var6) { _fun0005_ip = 100; continue _fun0005 }
case 99:
                var6 = var5.phase;
                if(!(var11 !== var6)) { _fun0005_ip = 101; continue _fun0005 }
case 102:
                var12 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Varint;
                var6 = 18;
                var12 = var12.bind(var1)(var6, var8);
                var8 = var12.int32;
                var6 = var5.phase;
                var6 = var8.bind(var12)(var6);
case 101:
                var6 = var5.surfaces;
                var6 = var6.length;
                if(!var6) { _fun0005_ip = 103; continue _fun0005 }
case 104:
                var12 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.LengthDelimited;
                var6 = 19;
                var8 = var12.bind(var1)(var6, var8);
                var6 = var8.fork;
                var6 = var6.bind(var8)();
                var6 = var5.surfaces;
                var6 = var6.length;
                var6 = var11 < var6;
                var8 = 0;
                if(!var6) { _fun0005_ip = 105; continue _fun0005 }
case 106:
                var12 = var1.int32;
                var6 = var5.surfaces;
                var6 = var6[var8];
                var6 = var12.bind(var1)(var6);
                var8 = var8 + 1;
                var6 = var5.surfaces;
                var6 = var6.length;
                if(var8 < var6) { _fun0005_ip = 106; continue _fun0005 }
case 105:
                var6 = var1.join;
                var6 = var6.bind(var1)();
case 103:
                var6 = var5.owningTeamId;
                if(!(var10 !== var6)) { _fun0005_ip = 107; continue _fun0005 }
case 108:
                var12 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.LengthDelimited;
                var6 = 20;
                var12 = var12.bind(var1)(var6, var8);
                var8 = var12.string;
                var6 = var5.owningTeamId;
                var6 = var8.bind(var12)(var6);
case 107:
                var6 = var5.cachedNotificationChannelId;
                if(!(var9 !== var6)) { _fun0005_ip = 109; continue _fun0005 }
case 110:
                var12 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Bit64;
                var6 = 21;
                var12 = var12.bind(var1)(var6, var8);
                var8 = var12.fixed64;
                var6 = var5.cachedNotificationChannelId;
                var6 = var8.bind(var12)(var6);
case 109:
                var6 = var5.exposureTracking;
                if(!(var11 !== var6)) { _fun0005_ip = 111; continue _fun0005 }
case 112:
                var12 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Varint;
                var6 = 22;
                var12 = var12.bind(var1)(var6, var8);
                var8 = var12.int32;
                var6 = var5.exposureTracking;
                var6 = var8.bind(var12)(var6);
case 111:
                var6 = var5.assignmentMode;
                if(!(var11 !== var6)) { _fun0005_ip = 113; continue _fun0005 }
case 114:
                var12 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Varint;
                var6 = 25;
                var12 = var12.bind(var1)(var6, var8);
                var8 = var12.int32;
                var6 = var5.assignmentMode;
                var6 = var8.bind(var12)(var6);
case 113:
                var8 = var5.enableEditRawJsonUi;
                var6 = false;
                if(!(var6 !== var8)) { _fun0005_ip = 115; continue _fun0005 }
case 116:
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.Varint;
                var8 = 23;
                var13 = var13.bind(var1)(var8, var12);
                var12 = var13.bool;
                var8 = var5.enableEditRawJsonUi;
                var8 = var12.bind(var13)(var8);
case 115:
                var8 = var5.winningVariationId;
                if(!(var11 !== var8)) { _fun0005_ip = 117; continue _fun0005 }
case 118:
                var13 = var1.tag;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var12.bind(var4)(var8);
                var8 = var8.WireType;
                var12 = var8.Varint;
                var8 = 24;
                var13 = var13.bind(var1)(var8, var12);
                var12 = var13.int32;
                var8 = var5.winningVariationId;
                var8 = var12.bind(var13)(var8);
case 117:
                var8 = var5.extraOutcomeContext;
                if(!(var10 !== var8)) { _fun0005_ip = 119; continue _fun0005 }
case 120:
                var12 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.LengthDelimited;
                var8 = 34;
                var12 = var12.bind(var1)(var8, var10);
                var10 = var12.string;
                var8 = var5.extraOutcomeContext;
                var8 = var10.bind(var12)(var8);
case 119:
                var8 = var5.type;
                if(!(var11 !== var8)) { _fun0005_ip = 121; continue _fun0005 }
case 122:
                var12 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 26;
                var12 = var12.bind(var1)(var8, var10);
                var10 = var12.int32;
                var8 = var5.type;
                var8 = var10.bind(var12)(var8);
case 121:
                var8 = var5.isTemplate;
                if(!(var6 !== var8)) { _fun0005_ip = 123; continue _fun0005 }
case 124:
                var12 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 27;
                var12 = var12.bind(var1)(var8, var10);
                var10 = var12.bool;
                var8 = var5.isTemplate;
                var8 = var10.bind(var12)(var8);
case 123:
                var8 = var5.fieldNumbersToCopy;
                var8 = var8.length;
                if(!var8) { _fun0005_ip = 125; continue _fun0005 }
case 126:
                var12 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.LengthDelimited;
                var8 = 28;
                var10 = var12.bind(var1)(var8, var10);
                var8 = var10.fork;
                var8 = var8.bind(var10)();
                var8 = var5.fieldNumbersToCopy;
                var8 = var8.length;
                var8 = var11 < var8;
                var10 = 0;
                if(!var8) { _fun0005_ip = 127; continue _fun0005 }
case 128:
                var12 = var1.int32;
                var8 = var5.fieldNumbersToCopy;
                var8 = var8[var10];
                var8 = var12.bind(var1)(var8);
                var10 = var10 + 1;
                var8 = var5.fieldNumbersToCopy;
                var8 = var8.length;
                if(var10 < var8) { _fun0005_ip = 128; continue _fun0005 }
case 127:
                var8 = var1.join;
                var8 = var8.bind(var1)();
case 125:
                var8 = var5.engineFeatureFlags;
                var8 = var8.length;
                var8 = var11 < var8;
                var12 = 29;
                var10 = 0;
                if(!var8) { _fun0005_ip = 129; continue _fun0005 }
case 130:
                var13 = var1.tag;
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var14 = var13.bind(var1)(var12, var8);
                var13 = var14.string;
                var8 = var5.engineFeatureFlags;
                var8 = var8[var10];
                var8 = var13.bind(var14)(var8);
                var10 = var10 + 1;
                var8 = var5.engineFeatureFlags;
                var8 = var8.length;
                if(var10 < var8) { _fun0005_ip = 130; continue _fun0005 }
case 129:
                var8 = var5.debugConfig;
                if(!var8) { _fun0005_ip = 131; continue _fun0005 }
case 132:
                var13 = _closure1_slot19;
                var12 = var13.internalBinaryWrite;
                var10 = var5.debugConfig;
                var15 = var1.tag;
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var14 = var8.LengthDelimited;
                var8 = 30;
                var14 = var15.bind(var1)(var8, var14);
                var8 = var14.fork;
                var8 = var8.bind(var14)();
                var10 = var12.bind(var13)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
case 131:
                var8 = var5.expectedEndDate;
                if(!var8) { _fun0005_ip = 133; continue _fun0005 }
case 134:
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var10 = 6;
                var10 = var8[var10];
                var10 = var14.bind(var4)(var10);
                var13 = var10.Timestamp;
                var12 = var13.internalBinaryWrite;
                var10 = var5.expectedEndDate;
                var15 = var1.tag;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var14 = var8.LengthDelimited;
                var8 = 31;
                var14 = var15.bind(var1)(var8, var14);
                var8 = var14.fork;
                var8 = var8.bind(var14)();
                var10 = var12.bind(var13)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
case 133:
                var8 = var5.isAutomatedChange;
                if(!(var6 !== var8)) { _fun0005_ip = 135; continue _fun0005 }
case 136:
                var12 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 32;
                var12 = var12.bind(var1)(var8, var10);
                var10 = var12.bool;
                var8 = var5.isAutomatedChange;
                var8 = var10.bind(var12)(var8);
case 135:
                var8 = var5.archiveAt;
                if(!var8) { _fun0005_ip = 137; continue _fun0005 }
case 138:
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var10 = 6;
                var10 = var8[var10];
                var10 = var14.bind(var4)(var10);
                var13 = var10.Timestamp;
                var12 = var13.internalBinaryWrite;
                var10 = var5.archiveAt;
                var15 = var1.tag;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var14 = var8.LengthDelimited;
                var8 = 33;
                var14 = var15.bind(var1)(var8, var14);
                var8 = var14.fork;
                var8 = var8.bind(var14)();
                var10 = var12.bind(var13)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
case 137:
                var8 = var5.guildExperimentVersion;
                if(!var8) { _fun0005_ip = 139; continue _fun0005 }
case 140:
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var10 = 7;
                var10 = var8[var10];
                var10 = var14.bind(var4)(var10);
                var13 = var10.Int32Value;
                var12 = var13.internalBinaryWrite;
                var10 = var5.guildExperimentVersion;
                var15 = var1.tag;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var14 = var8.LengthDelimited;
                var8 = 35;
                var14 = var15.bind(var1)(var8, var14);
                var8 = var14.fork;
                var8 = var8.bind(var14)();
                var10 = var12.bind(var13)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
case 139:
                var8 = var5.customUnitPrefix;
                if(!(var11 !== var8)) { _fun0005_ip = 141; continue _fun0005 }
case 142:
                var12 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 36;
                var12 = var12.bind(var1)(var8, var10);
                var10 = var12.int32;
                var8 = var5.customUnitPrefix;
                var8 = var10.bind(var12)(var8);
case 141:
                var8 = var5.growthbookTags;
                var8 = var8.length;
                var8 = var11 < var8;
                var10 = 37;
                var11 = 0;
                if(!var8) { _fun0005_ip = 143; continue _fun0005 }
case 144:
                var12 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var13 = var12.bind(var1)(var10, var8);
                var12 = var13.string;
                var8 = var5.growthbookTags;
                var8 = var8[var11];
                var8 = var12.bind(var13)(var8);
                var11 = var11 + 1;
                var8 = var5.growthbookTags;
                var8 = var8.length;
                if(var11 < var8) { _fun0005_ip = 144; continue _fun0005 }
case 143:
                var8 = var5.allocateRightToLeft;
                if(!(var6 !== var8)) { _fun0005_ip = 145; continue _fun0005 }
case 146:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 38;
                var11 = var11.bind(var1)(var8, var10);
                var10 = var11.bool;
                var8 = var5.allocateRightToLeft;
                var8 = var10.bind(var11)(var8);
case 145:
                var8 = var5.isManaged;
                if(!(var6 !== var8)) { _fun0005_ip = 147; continue _fun0005 }
case 148:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 39;
                var11 = var11.bind(var1)(var8, var10);
                var10 = var11.bool;
                var8 = var5.isManaged;
                var8 = var10.bind(var11)(var8);
case 147:
                var8 = var5.numberLineId;
                if(!(var9 !== var8)) { _fun0005_ip = 149; continue _fun0005 }
case 150:
                var10 = var1.tag;
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var9.bind(var4)(var8);
                var8 = var8.WireType;
                var9 = var8.Bit64;
                var8 = 41;
                var10 = var10.bind(var1)(var8, var9);
                var9 = var10.fixed64;
                var8 = var5.numberLineId;
                var8 = var9.bind(var10)(var8);
case 149:
                var3 = var3.writeUnknownFields;
                if(!(var6 !== var3)) { _fun0005_ip = 151; continue _fun0005 }
case 152:
                var6 = 1;
                if(!(var6 == var3)) { _fun0005_ip = 153; continue _fun0005 }
case 154:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 153:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 151:
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
    var26 = var5;
    var4 = new var26[var4](var25);
    var6 = var4 instanceof Object ? var4 : var5;
    var4 = var18[var2];
    var4 = var17.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Variation$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot20;
            var6 = new Array(6);
            var1 = {'no': 1, 'name': 'id', 'kind': 'scalar', 'T': 5};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'label', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'target_allocation', 'kind': 'scalar', 'T': 5};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'buckets', 'kind': 'message', 'repeat': 1};
            var8 = function T() {
                var1 = _closure1_slot18;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'type', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot14;
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
                if(!(var6 !== var5)) { _fun0006_ip = 155; continue _fun0006 }
case 156:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 155:
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
                if(!var2) { _fun0007_ip = 157; continue _fun0007 }
case 158:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0007_ip = 80; continue _fun0007 }
case 159:
                if(!(var7 !== var31)) { _fun0007_ip = 160; continue _fun0007 }
case 161:
                if(!(var8 !== var31)) { _fun0007_ip = 162; continue _fun0007 }
case 163:
                if(!(var9 !== var31)) { _fun0007_ip = 164; continue _fun0007 }
case 165:
                if(!(var10 !== var31)) { _fun0007_ip = 166; continue _fun0007 }
case 167:
                if(!(var11 !== var31)) { _fun0007_ip = 168; continue _fun0007 }
case 169:
                var25 = var21.readUnknownField;
                if(!(var12 !== var25)) { _fun0007_ip = 170; continue _fun0007 }
case 75:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var13 !== var25)) { _fun0007_ip = 171; continue _fun0007 }
case 172:
                var27 = var25;
                if(!(var14 === var25)) { _fun0007_ip = 173; continue _fun0007 }
case 174:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var15];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 173:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0007_ip = 171; continue _fun0007;
case 170:
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
case 168:
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
                _fun0007_ip = 171; continue _fun0007;
case 166:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['type'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 171; continue _fun0007;
case 164:
                var26 = var1.buckets;
                var25 = var26.push;
                var28 = _closure1_slot18;
                var27 = var28.internalBinaryRead;
                var2 = var22.uint32;
                var2 = var2.bind(var22)();
                var2 = var27.bind(var28)(var22, var2, var21);
                var2 = var25.bind(var26)(var2);
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 171; continue _fun0007;
case 162:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['targetAllocation'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 171; continue _fun0007;
case 160:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['label'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0007_ip = 171; continue _fun0007;
case 80:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['id'] = var2;
                var24 = var4;
                var23 = var3;
case 171:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0007_ip = 158; continue _fun0007 }
case 157:
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
                if(!(var8 !== var2)) { _fun0008_ip = 175; continue _fun0008 }
case 176:
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
case 175:
                var4 = var5.label;
                var2 = '';
                if(!(var2 !== var4)) { _fun0008_ip = 177; continue _fun0008 }
case 178:
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
case 177:
                var2 = var5.targetAllocation;
                if(!(var8 !== var2)) { _fun0008_ip = 179; continue _fun0008 }
case 180:
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
case 179:
                var2 = var5.buckets;
                var2 = var2.length;
                var6 = var8 < var2;
                var7 = 9;
                var4 = undefined;
                var10 = 4;
                var9 = 0;
                if(!var6) { _fun0008_ip = 181; continue _fun0008 }
case 170:
                var13 = _closure1_slot18;
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
                if(var9 < var6) { _fun0008_ip = 170; continue _fun0008 }
case 181:
                var6 = var5.type;
                if(!(var8 !== var6)) { _fun0008_ip = 182; continue _fun0008 }
case 183:
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
case 182:
                var6 = var5.configuration;
                if(!var6) { _fun0008_ip = 184; continue _fun0008 }
case 185:
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
case 184:
                var3 = var3.writeUnknownFields;
                var6 = false;
                if(!(var6 !== var3)) { _fun0008_ip = 186; continue _fun0008 }
case 83:
                var6 = 1;
                if(!(var6 == var3)) { _fun0008_ip = 187; continue _fun0008 }
case 188:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 187:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
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
    var26 = var5;
    var4 = new var26[var4](var25);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot17 = var5;
    var4 = var18[var2];
    var4 = var17.bind(var1)(var4);
    var19 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Bucket$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot20;
            var6 = new Array(4);
            var1 = {'no': 1, 'name': 'start', 'kind': 'scalar', 'T': 5};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'stop', 'kind': 'scalar', 'T': 5};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'type', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot15;
                var1 = ['discord_protos.discord_experimentation.v1.Bucket.Type'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'owning_experiment_id', 'kind': 'scalar', 'T': 6};
            var6[3] = var1;
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
                var1 = {'start': 0, 'stop': 0, 'type': 0, 'owningExperimentId': '0'};
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
                if(!(var6 !== var5)) { _fun0009_ip = 189; continue _fun0009 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 189:
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
                if(!(var2 == var1)) { _fun0010_ip = 13; continue _fun0010 }
case 14:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 13:
                var3 = var19.pos;
                var2 = arg2;
                var16 = var3 + var2;
                var2 = var19.pos;
                var2 = var2 < var16;
                var15 = undefined;
                var13 = 9;
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
                if(!var2) { _fun0010_ip = 185; continue _fun0010 }
case 190:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0010_ip = 191; continue _fun0010 }
case 189:
                if(!(var7 !== var28)) { _fun0010_ip = 192; continue _fun0010 }
case 193:
                if(!(var8 !== var28)) { _fun0010_ip = 194; continue _fun0010 }
case 195:
                if(!(var9 !== var28)) { _fun0010_ip = 196; continue _fun0010 }
case 197:
                var22 = var18.readUnknownField;
                if(!(var10 !== var22)) { _fun0010_ip = 20; continue _fun0010 }
case 198:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var11 !== var22)) { _fun0010_ip = 199; continue _fun0010 }
case 200:
                var24 = var22;
                if(!(var12 === var22)) { _fun0010_ip = 201; continue _fun0010 }
case 202:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var13];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 201:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0010_ip = 199; continue _fun0010;
case 20:
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
case 196:
                var2 = var19.fixed64;
                var22 = var2.bind(var19)();
                var2 = var22.toString;
                var2 = var2.bind(var22)();
                var1['owningExperimentId'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0010_ip = 199; continue _fun0010;
case 194:
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var1['type'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0010_ip = 199; continue _fun0010;
case 192:
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var1['stop'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0010_ip = 199; continue _fun0010;
case 191:
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var1['start'] = var2;
                var21 = var4;
                var20 = var3;
case 199:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0010_ip = 190; continue _fun0010 }
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
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.start;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0011_ip = 203; continue _fun0011 }
case 204:
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
case 203:
                var2 = var5.stop;
                if(!(var3 !== var2)) { _fun0011_ip = 205; continue _fun0011 }
case 206:
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
case 205:
                var2 = var5.type;
                if(!(var3 !== var2)) { _fun0011_ip = 207; continue _fun0011 }
case 208:
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
case 207:
                var3 = var5.owningExperimentId;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0011_ip = 209; continue _fun0011 }
case 210:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Bit64;
                var2 = 4;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.fixed64;
                var2 = var5.owningExperimentId;
                var2 = var3.bind(var4)(var2);
case 209:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0011_ip = 211; continue _fun0011 }
case 212:
                var2 = 1;
                if(!(var2 == var4)) { _fun0011_ip = 213; continue _fun0011 }
case 214:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 213:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 211:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var19);
    var19 = var4.prototype;
    var19 = Object.create(var19, {constructor: {value: var4}});
    var26 = var19;
    var4 = new var26[var4](var25);
    var4 = var4 instanceof Object ? var4 : var19;
    var _closure1_slot18 = var4;
    var2 = var18[var2];
    var2 = var17.bind(var1)(var2);
    var19 = var2.MessageType;
    var2 = function(arg1) {
        var4 = function DebugConfig$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot20;
            var6 = new Array(6);
            var1 = {'no': 1, 'name': 'enable_decision_logging', 'kind': 'scalar', 'T': 8};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'metrics_sample_rate', 'kind': 'scalar', 'T': 1};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'log_context_on_failure', 'kind': 'scalar', 'T': 8};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'log_raw_headers', 'kind': 'scalar', 'T': 8};
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'tag_filter_metrics', 'kind': 'scalar', 'T': 8};
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'decision_log_sample_rate', 'kind': 'scalar', 'T': 1};
            var6[5] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.DebugConfig'];
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
                var1 = {'enableDecisionLogging': false, 'metricsSampleRate': 0, 'logContextOnFailure': false, 'logRawHeaders': false, 'tagFilterMetrics': false, 'decisionLogSampleRate': 0};
                var11 = false;
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
                if(!(var6 !== var5)) { _fun0012_ip = 189; continue _fun0012 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 189:
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
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0013_ip = 13; continue _fun0013 }
case 14:
                var2 = var19.create;
                var1 = var2.bind(var19)();
case 13:
                var3 = var21.pos;
                var2 = arg2;
                var18 = var3 + var2;
                var2 = var21.pos;
                var2 = var2 < var18;
                var17 = undefined;
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
                if(!var2) { _fun0013_ip = 215; continue _fun0013 }
case 216:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var7);
                var30 = var2[var5];
                var29 = var2[var6];
                if(!(var6 !== var30)) { _fun0013_ip = 217; continue _fun0013 }
case 218:
                if(!(var7 !== var30)) { _fun0013_ip = 219; continue _fun0013 }
case 220:
                if(!(var8 !== var30)) { _fun0013_ip = 221; continue _fun0013 }
case 222:
                if(!(var9 !== var30)) { _fun0013_ip = 223; continue _fun0013 }
case 224:
                if(!(var10 !== var30)) { _fun0013_ip = 225; continue _fun0013 }
case 226:
                if(!(var11 !== var30)) { _fun0013_ip = 227; continue _fun0013 }
case 177:
                var24 = var20.readUnknownField;
                if(!(var12 !== var24)) { _fun0013_ip = 228; continue _fun0013 }
case 180:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var29);
                var23 = var24;
                var22 = var2;
                if(!(var13 !== var24)) { _fun0013_ip = 229; continue _fun0013 }
case 230:
                var26 = var24;
                if(!(var14 === var24)) { _fun0013_ip = 231; continue _fun0013 }
case 232:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var15];
                var25 = var27.bind(var17)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 231:
                var35 = var19.typeName;
                var36 = undefined;
                var34 = var1;
                var33 = var30;
                var32 = var29;
                var31 = var2;
                var25 = var36[var26](var35, var34, var33, var32, var31, var30);
                var23 = var24;
                var22 = var2;
                _fun0013_ip = 229; continue _fun0013;
case 228:
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
case 227:
                var2 = var21.double;
                var2 = var2.bind(var21)();
                var1['decisionLogSampleRate'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0013_ip = 229; continue _fun0013;
case 225:
                var2 = var21.bool;
                var2 = var2.bind(var21)();
                var1['tagFilterMetrics'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0013_ip = 229; continue _fun0013;
case 223:
                var2 = var21.bool;
                var2 = var2.bind(var21)();
                var1['logRawHeaders'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0013_ip = 229; continue _fun0013;
case 221:
                var2 = var21.bool;
                var2 = var2.bind(var21)();
                var1['logContextOnFailure'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0013_ip = 229; continue _fun0013;
case 219:
                var2 = var21.double;
                var2 = var2.bind(var21)();
                var1['metricsSampleRate'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0013_ip = 229; continue _fun0013;
case 217:
                var2 = var21.bool;
                var2 = var2.bind(var21)();
                var1['enableDecisionLogging'] = var2;
                var23 = var4;
                var22 = var3;
case 229:
                var2 = var21.pos;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0013_ip = 216; continue _fun0013 }
case 215:
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
                var3 = var5.enableDecisionLogging;
                var2 = false;
                if(!(var2 !== var3)) { _fun0014_ip = 233; continue _fun0014 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.enableDecisionLogging;
                var3 = var4.bind(var6)(var3);
case 233:
                var3 = var5.metricsSampleRate;
                var4 = 0;
                if(!(var4 !== var3)) { _fun0014_ip = 234; continue _fun0014 }
case 158:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Bit64;
                var3 = 2;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.double;
                var3 = var5.metricsSampleRate;
                var3 = var6.bind(var7)(var3);
case 234:
                var3 = var5.logContextOnFailure;
                if(!(var2 !== var3)) { _fun0014_ip = 235; continue _fun0014 }
case 236:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 3;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.bool;
                var3 = var5.logContextOnFailure;
                var3 = var6.bind(var7)(var3);
case 235:
                var3 = var5.logRawHeaders;
                if(!(var2 !== var3)) { _fun0014_ip = 209; continue _fun0014 }
case 210:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 4;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.bool;
                var3 = var5.logRawHeaders;
                var3 = var6.bind(var7)(var3);
case 209:
                var3 = var5.tagFilterMetrics;
                if(!(var2 !== var3)) { _fun0014_ip = 211; continue _fun0014 }
case 196:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 9;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 5;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.bool;
                var3 = var5.tagFilterMetrics;
                var3 = var6.bind(var7)(var3);
case 211:
                var3 = var5.decisionLogSampleRate;
                if(!(var4 !== var3)) { _fun0014_ip = 237; continue _fun0014 }
case 238:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Bit64;
                var3 = 6;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.double;
                var3 = var5.decisionLogSampleRate;
                var3 = var4.bind(var6)(var3);
case 237:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0014_ip = 239; continue _fun0014 }
case 24:
                var2 = 1;
                if(!(var2 == var4)) { _fun0014_ip = 240; continue _fun0014 }
case 241:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 240:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 239:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var19);
    var19 = var2.prototype;
    var19 = Object.create(var19, {constructor: {value: var2}});
    var26 = var19;
    var2 = new var26[var2](var25);
    var2 = var2 instanceof Object ? var2 : var19;
    var _closure1_slot19 = var2;
    var16 = 10;
    var16 = var18[var16];
    var18 = var17.bind(var1)(var16);
    var17 = var18.fileFinishedImporting;
    var16 = '../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx';
    var16 = var17.bind(var18)(var16);
    var3['Experiment_UnitType'] = var15;
    var3['Experiment_Surface'] = var14;
    var3['Experiment_ExposureTracking'] = var13;
    var3['Experiment_AssignmentMode'] = var12;
    var3['Experiment_Type'] = var11;
    var3['Experiment_CustomUnitPrefix'] = var10;
    var3['Variation_Type'] = var9;
    var3['Bucket_Type'] = var8;
    var3['Phase'] = var7;
    var3['Experiment'] = var6;
    var3['Variation'] = var5;
    var3['Bucket'] = var4;
    var3['DebugConfig'] = var2;
    return var1;
})();
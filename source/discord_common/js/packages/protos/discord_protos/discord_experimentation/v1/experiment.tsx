// discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var21 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var22 = dependencyMap;
    var _closure1_slot0 = var21;
    var _closure1_slot1 = var22;
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
            var1 = _closure1_slot25;
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
    var _closure1_slot24 = var1;
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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var24 = 0;
    var2 = var22[var24];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var23 = 1;
    var2 = var22[var23];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var7 = 2;
    var2 = var22[var7];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var25 = 3;
    var2 = var22[var25];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var6 = 4;
    var2 = var22[var6];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var10 = 5;
    var2 = var22[var10];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var19 = {};
    var19['EXCLUSIVE'] = var24;
    var2 = 'EXCLUSIVE';
    var19[var24] = var2;
    var19['SYNCED'] = var23;
    var2 = 'SYNCED';
    var19[var23] = var2;
    var19['PRE_ALLOCATED'] = var7;
    var2 = 'PRE_ALLOCATED';
    var19[var7] = var2;
    var _closure1_slot8 = var19;
    var18 = {};
    var18['UNSPECIFIED'] = var24;
    var2 = 'UNSPECIFIED';
    var18[var24] = var2;
    var18['USER'] = var23;
    var4 = 'USER';
    var18[var23] = var4;
    var18['INSTALLATION'] = var7;
    var4 = 'INSTALLATION';
    var18[var7] = var4;
    var18['GUILD'] = var25;
    var4 = 'GUILD';
    var18[var25] = var4;
    var18['CUSTOM'] = var6;
    var4 = 'CUSTOM';
    var18[var6] = var4;
    var _closure1_slot9 = var18;
    var17 = {};
    var17['SURFACE_UNSPECIFIED'] = var24;
    var4 = 'SURFACE_UNSPECIFIED';
    var17[var24] = var4;
    var17['API'] = var23;
    var4 = 'API';
    var17[var23] = var4;
    var17['APP'] = var7;
    var4 = 'APP';
    var17[var7] = var4;
    var17['DEVELOPER_PORTAL'] = var25;
    var4 = 'DEVELOPER_PORTAL';
    var17[var25] = var4;
    var17['ADMIN_PANEL'] = var6;
    var4 = 'ADMIN_PANEL';
    var17[var6] = var4;
    var17['ADS_BUDGET_AB'] = var10;
    var4 = 'ADS_BUDGET_AB';
    var17[var10] = var4;
    var5 = 6;
    var17['AV_WORKER'] = var5;
    var4 = 'AV_WORKER';
    var17[var5] = var4;
    var4 = 7;
    var17['SEO'] = var4;
    var8 = 'SEO';
    var17[var4] = var8;
    var9 = 8;
    var17['MARKETING'] = var9;
    var8 = 'MARKETING';
    var17[var9] = var8;
    var _closure1_slot10 = var17;
    var16 = {};
    var16['ENABLED'] = var24;
    var8 = 'ENABLED';
    var16[var24] = var8;
    var16['DISABLED'] = var23;
    var8 = 'DISABLED';
    var16[var23] = var8;
    var _closure1_slot11 = var16;
    var15 = {};
    var15['FULL'] = var24;
    var8 = 'FULL';
    var15[var24] = var8;
    var15['FORCE_CONTROL'] = var25;
    var8 = 'FORCE_CONTROL';
    var15[var25] = var8;
    var15['OVERRIDES_ONLY'] = var6;
    var8 = 'OVERRIDES_ONLY';
    var15[var6] = var8;
    var15['OFF'] = var10;
    var9 = 'OFF';
    var15[var10] = var9;
    var _closure1_slot12 = var15;
    var14 = {};
    var14['DEFAULT'] = var24;
    var10 = 'DEFAULT';
    var14[var24] = var10;
    var14['HOLDOUT'] = var23;
    var11 = 'HOLDOUT';
    var14[var23] = var11;
    var14['NUMBERLINE'] = var7;
    var11 = 'NUMBERLINE';
    var14[var7] = var11;
    var _closure1_slot13 = var14;
    var13 = {};
    var13['CUSTOM_UNIT_PREFIX_UNSPECIFIED'] = var24;
    var11 = 'CUSTOM_UNIT_PREFIX_UNSPECIFIED';
    var13[var24] = var11;
    var13['SEO_URL_SLUG'] = var23;
    var11 = 'SEO_URL_SLUG';
    var13[var23] = var11;
    var _closure1_slot14 = var13;
    var12 = {};
    var12['EXPOSURE_POINT_ID_UNSPECIFIED'] = var24;
    var11 = 'EXPOSURE_POINT_ID_UNSPECIFIED';
    var12[var24] = var11;
    var12['SEO_INSTALLATION_PAGE_LOAD'] = var23;
    var11 = 'SEO_INSTALLATION_PAGE_LOAD';
    var12[var23] = var11;
    var12['MARKETING_INSTALLATION_PAGE_LOAD'] = var7;
    var11 = 'MARKETING_INSTALLATION_PAGE_LOAD';
    var12[var7] = var11;
    var _closure1_slot15 = var12;
    var11 = {};
    var11['DEFAULT'] = var24;
    var11[var24] = var10;
    var11['OFF'] = var23;
    var11[var23] = var9;
    var11['OVERRIDES_ONLY'] = var7;
    var11[var7] = var8;
    var _closure1_slot16 = var11;
    var10 = {};
    var10['UNSPECIFIED'] = var24;
    var10[var24] = var2;
    var10['CONTROL'] = var23;
    var8 = 'CONTROL';
    var10[var23] = var8;
    var10['TREATMENT'] = var7;
    var8 = 'TREATMENT';
    var10[var7] = var8;
    var10['OVERRIDE'] = var25;
    var8 = 'OVERRIDE';
    var10[var25] = var8;
    var _closure1_slot17 = var10;
    var9 = {};
    var9['UNSPECIFIED'] = var24;
    var9[var24] = var2;
    var9['ACTIVE'] = var23;
    var8 = 'ACTIVE';
    var9[var23] = var8;
    var9['UNUSED'] = var7;
    var8 = 'UNUSED';
    var9[var7] = var8;
    var9['BURNED'] = var25;
    var8 = 'BURNED';
    var9[var25] = var8;
    var9['PRESERVED'] = var6;
    var8 = 'PRESERVED';
    var9[var6] = var8;
    var _closure1_slot18 = var9;
    var8 = {};
    var8['UNSPECIFIED'] = var24;
    var8[var24] = var2;
    var8['DRAFT'] = var23;
    var2 = 'DRAFT';
    var8[var23] = var2;
    var8['MEASUREMENT'] = var7;
    var2 = 'MEASUREMENT';
    var8[var7] = var2;
    var8['ROLLING_OUT'] = var6;
    var2 = 'ROLLING_OUT';
    var8[var6] = var2;
    var8['ARCHIVED'] = var5;
    var2 = 'ARCHIVED';
    var8[var5] = var2;
    var8['AA_MODE'] = var4;
    var2 = 'AA_MODE';
    var8[var4] = var2;
    var _closure1_slot19 = var8;
    var2 = 9;
    var4 = var22[var2];
    var4 = var21.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Experiment$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot24;
            var6 = new Array(42);
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
                var2 = _closure1_slot9;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.UnitType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[13] = var1;
            var1 = {'no': 15, 'name': 'variations', 'kind': 'message', 'repeat': 1};
            var8 = function T() {
                var1 = _closure1_slot21;
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
                var2 = _closure1_slot19;
                var1 = ['discord_protos.discord_experimentation.v1.Phase'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[16] = var1;
            var1 = {'no': 19, 'name': 'surfaces', 'kind': 'enum', 'repeat': 1};
            var8 = function T() {
                var2 = _closure1_slot10;
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
                var2 = _closure1_slot11;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.ExposureTracking'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[20] = var1;
            var1 = {'no': 25, 'name': 'assignment_mode', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot12;
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
                var2 = _closure1_slot13;
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
                var1 = _closure1_slot23;
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
            var1 = {'no': 44, 'name': 'suppress_editor_mention', 'kind': 'scalar', 'T': 8};
            var6[32] = var1;
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
            var6[33] = var1;
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
            var6[34] = var1;
            var1 = {'no': 36, 'name': 'custom_unit_prefix', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot14;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.CustomUnitPrefix'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[35] = var1;
            var1 = {'no': 45, 'name': 'exposure_points', 'kind': 'enum', 'repeat': 1};
            var8 = function T() {
                var2 = _closure1_slot15;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.ExposurePointId'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[36] = var1;
            var1 = {'no': 37, 'name': 'growthbook_tags', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[37] = var1;
            var1 = {'no': 38, 'name': 'allocate_right_to_left', 'kind': 'scalar', 'T': 8};
            var6[38] = var1;
            var1 = {'no': 39, 'name': 'is_managed', 'kind': 'scalar', 'T': 8};
            var6[39] = var1;
            var1 = {'no': 43, 'name': 'number_line_settings', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot20;
                return var1;
            };
            var1['T'] = var8;
            var6[40] = var1;
            var1 = {'no': 42, 'name': 'eligibility_persistence', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot16;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.EligibilityPersistence'];
                var1[1] = var2;
                var2 = 'ELIGIBILITY_PERSISTENCE_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[41] = var1;
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
                var2 = 0;
                var3 = new Array(0);
                var1['variations'] = var3;
                var3 = new Array(0);
                var1['rules'] = var3;
                var3 = new Array(0);
                var1['surfaces'] = var3;
                var11 = false;
                var3 = new Array(0);
                var1['fieldNumbersToCopy'] = var3;
                var3 = new Array(0);
                var1['engineFeatureFlags'] = var3;
                var1['isAutomatedChange'] = var11;
                var1['suppressEditorMention'] = var11;
                var1['customUnitPrefix'] = var2;
                var3 = new Array(0);
                var1['exposurePoints'] = var3;
                var3 = new Array(0);
                var1['growthbookTags'] = var3;
                var1['allocateRightToLeft'] = var11;
                var1['isManaged'] = var11;
                var1['eligibilityPersistence'] = var2;
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
                var25 = arg1;
                var24 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 13:
                var4 = var25.pos;
                var3 = arg2;
                var23 = var4 + var3;
                var3 = var25.pos;
                var3 = var3 < var23;
                var22 = undefined;
                var20 = 9;
                var19 = true;
                var18 = false;
                var17 = 'throw';
                var16 = 6;
                var15 = 7;
                var14 = 8;
                var13 = 2;
                var12 = 0;
                var11 = 1;
                var10 = undefined;
                var9 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var3 = var25.tag;
                var7 = var3.bind(var25)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var22)(var7, var13);
                var8 = var3[var12];
                var7 = var3[var11];
                SwitchImm(value_reg=7, jump_table_address=2819, default_jump_address=2592, unsigned_min_value=1, unsigned_max_value=45) // Switch table: [2550, 2515, 2431, 2386, 2350, 2266, 2221, 2186, 2151, 2067, 1983, 1947, 1912, 1876, 1813, 1731, 2592, 1695, 1517, 1482, 1437, 1401, 1329, 1293, 1365, 1222, 1186, 1008, 963, 898, 814, 778, 658, 1258, 574, 538, 315, 279, 243, 2592, 2592, 142, 178, 742, 360];
case 17:
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var1['eligibilityPersistence'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 19:
                var33 = _closure1_slot20;
                var32 = var33.internalBinaryRead;
                var3 = var25.uint32;
                var38 = var3.bind(var25)();
                var36 = var1.numberLineSettings;
                var40 = var33;
                var39 = var25;
                var37 = var24;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['numberLineSettings'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 20:
                var3 = var25.bool;
                var3 = var3.bind(var25)();
                var1['isManaged'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 21:
                var3 = var25.bool;
                var3 = var3.bind(var25)();
                var1['allocateRightToLeft'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 22:
                var32 = var1.growthbookTags;
                var31 = var32.push;
                var3 = var25.string;
                var3 = var3.bind(var25)();
                var3 = var31.bind(var32)(var3);
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 23:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var20];
                var3 = var31.bind(var22)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                if(!(var7 !== var3)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var32 = var1.exposurePoints;
                var31 = var32.push;
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var3 = var31.bind(var32)(var3);
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 24:
                var3 = var25.int32;
                var31 = var3.bind(var25)();
                var3 = var25.pos;
                var31 = var31 + var3;
                var3 = var25.pos;
                var30 = var10;
                var29 = var9;
                var28 = var31;
                var27 = var5;
                var26 = var4;
                if(!(var3 < var31)) { _fun0004_ip = 18; continue _fun0004 }
case 26:
                var33 = var1.exposurePoints;
                var32 = var33.push;
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var3 = var32.bind(var33)(var3);
                var3 = var25.pos;
                var30 = var10;
                var29 = var9;
                var27 = var5;
                var26 = var4;
                var28 = var31;
                if(var3 < var28) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                _fun0004_ip = 18; continue _fun0004;
case 28:
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var1['customUnitPrefix'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 29:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var22)(var3);
                var33 = var3.Int32Value;
                var32 = var33.internalBinaryRead;
                var3 = var25.uint32;
                var38 = var3.bind(var25)();
                var36 = var1.guildExperimentVersion;
                var40 = var33;
                var39 = var25;
                var37 = var24;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['guildExperimentVersion'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 30:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var16];
                var3 = var31.bind(var22)(var3);
                var33 = var3.Timestamp;
                var32 = var33.internalBinaryRead;
                var3 = var25.uint32;
                var38 = var3.bind(var25)();
                var36 = var1.archiveAt;
                var40 = var33;
                var39 = var25;
                var37 = var24;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['archiveAt'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 31:
                var3 = var25.bool;
                var3 = var3.bind(var25)();
                var1['suppressEditorMention'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 32:
                var3 = var25.bool;
                var3 = var3.bind(var25)();
                var1['isAutomatedChange'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 33:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var16];
                var3 = var31.bind(var22)(var3);
                var33 = var3.Timestamp;
                var32 = var33.internalBinaryRead;
                var3 = var25.uint32;
                var38 = var3.bind(var25)();
                var36 = var1.expectedEndDate;
                var40 = var33;
                var39 = var25;
                var37 = var24;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['expectedEndDate'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 34:
                var33 = _closure1_slot23;
                var32 = var33.internalBinaryRead;
                var3 = var25.uint32;
                var38 = var3.bind(var25)();
                var36 = var1.debugConfig;
                var40 = var33;
                var39 = var25;
                var37 = var24;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['debugConfig'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 35:
                var32 = var1.engineFeatureFlags;
                var31 = var32.push;
                var3 = var25.string;
                var3 = var3.bind(var25)();
                var3 = var31.bind(var32)(var3);
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 36:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var20];
                var3 = var31.bind(var22)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                if(!(var7 !== var3)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                var32 = var1.fieldNumbersToCopy;
                var31 = var32.push;
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var3 = var31.bind(var32)(var3);
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 37:
                var3 = var25.int32;
                var31 = var3.bind(var25)();
                var3 = var25.pos;
                var31 = var31 + var3;
                var3 = var25.pos;
                var30 = var10;
                var29 = var31;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                if(!(var3 < var31)) { _fun0004_ip = 18; continue _fun0004 }
case 39:
                var33 = var1.fieldNumbersToCopy;
                var32 = var33.push;
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var3 = var32.bind(var33)(var3);
                var3 = var25.pos;
                var30 = var10;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                var29 = var31;
                if(var3 < var29) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                _fun0004_ip = 18; continue _fun0004;
case 41:
                var3 = var25.bool;
                var3 = var3.bind(var25)();
                var1['isTemplate'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 42:
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var1['type'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 43:
                var3 = var25.string;
                var3 = var3.bind(var25)();
                var1['extraOutcomeContext'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 44:
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var1['winningVariationId'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 45:
                var3 = var25.bool;
                var3 = var3.bind(var25)();
                var1['enableEditRawJsonUi'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 46:
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var1['assignmentMode'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 47:
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var1['exposureTracking'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 48:
                var3 = var25.fixed64;
                var31 = var3.bind(var25)();
                var3 = var31.toString;
                var3 = var3.bind(var31)();
                var1['cachedNotificationChannelId'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 49:
                var3 = var25.string;
                var3 = var3.bind(var25)();
                var1['owningTeamId'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 50:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var20];
                var3 = var31.bind(var22)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                if(!(var7 !== var3)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
                var32 = var1.surfaces;
                var31 = var32.push;
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var3 = var31.bind(var32)(var3);
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 51:
                var3 = var25.int32;
                var31 = var3.bind(var25)();
                var3 = var25.pos;
                var31 = var31 + var3;
                var3 = var25.pos;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                var30 = var31;
                if(!(var3 < var30)) { _fun0004_ip = 18; continue _fun0004 }
case 53:
                var33 = var1.surfaces;
                var32 = var33.push;
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var3 = var32.bind(var33)(var3);
                var3 = var25.pos;
                var30 = var31;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                if(var3 < var31) { _fun0004_ip = 53; continue _fun0004 }
case 54:
                _fun0004_ip = 18; continue _fun0004;
case 55:
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var1['phase'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 56:
                var32 = var1.rules;
                var31 = var32.push;
                var33 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var14];
                var3 = var33.bind(var22)(var3);
                var34 = var3.Rule;
                var33 = var34.internalBinaryRead;
                var3 = var25.uint32;
                var3 = var3.bind(var25)();
                var3 = var33.bind(var34)(var25, var3, var24);
                var3 = var31.bind(var32)(var3);
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 57:
                var32 = var1.variations;
                var31 = var32.push;
                var34 = _closure1_slot21;
                var33 = var34.internalBinaryRead;
                var3 = var25.uint32;
                var3 = var3.bind(var25)();
                var3 = var33.bind(var34)(var25, var3, var24);
                var3 = var31.bind(var32)(var3);
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 58:
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var1['unitType'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 59:
                var3 = var25.string;
                var3 = var3.bind(var25)();
                var1['hashKey'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 60:
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var1['revision'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 61:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var22)(var3);
                var33 = var3.StringValue;
                var32 = var33.internalBinaryRead;
                var3 = var25.uint32;
                var38 = var3.bind(var25)();
                var36 = var1.techSpecLink;
                var40 = var33;
                var39 = var25;
                var37 = var24;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['techSpecLink'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 62:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var22)(var3);
                var33 = var3.StringValue;
                var32 = var33.internalBinaryRead;
                var3 = var25.uint32;
                var38 = var3.bind(var25)();
                var36 = var1.hypothesis;
                var40 = var33;
                var39 = var25;
                var37 = var24;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['hypothesis'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 63:
                var3 = var25.string;
                var3 = var3.bind(var25)();
                var1['description'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 64:
                var3 = var25.string;
                var3 = var3.bind(var25)();
                var1['title'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 65:
                var3 = var25.fixed64;
                var31 = var3.bind(var25)();
                var3 = var31.toString;
                var3 = var3.bind(var31)();
                var1['editorId'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 66:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var16];
                var3 = var31.bind(var22)(var3);
                var33 = var3.Timestamp;
                var32 = var33.internalBinaryRead;
                var3 = var25.uint32;
                var38 = var3.bind(var25)();
                var36 = var1.editedAt;
                var40 = var33;
                var39 = var25;
                var37 = var24;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['editedAt'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 67:
                var3 = var25.int32;
                var3 = var3.bind(var25)();
                var1['version'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 68:
                var3 = var25.fixed64;
                var31 = var3.bind(var25)();
                var3 = var31.toString;
                var3 = var3.bind(var31)();
                var1['creatorId'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 69:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var16];
                var3 = var31.bind(var22)(var3);
                var33 = var3.Timestamp;
                var32 = var33.internalBinaryRead;
                var3 = var25.uint32;
                var38 = var3.bind(var25)();
                var36 = var1.createdAt;
                var40 = var33;
                var39 = var25;
                var37 = var24;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['createdAt'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 70:
                var3 = var25.string;
                var3 = var3.bind(var25)();
                var1['name'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 71:
                var3 = var25.fixed64;
                var31 = var3.bind(var25)();
                var3 = var31.toString;
                var3 = var3.bind(var31)();
                var1['id'] = var3;
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var5;
                var26 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 72:
                var31 = var24.readUnknownField;
                if(!(var17 !== var31)) { _fun0004_ip = 73; continue _fun0004 }
case 74:
                var3 = var25.skip;
                var3 = var3.bind(var25)(var7);
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var31;
                var26 = var3;
                if(!(var18 !== var31)) { _fun0004_ip = 18; continue _fun0004 }
case 75:
                var33 = var31;
                if(!(var19 === var31)) { _fun0004_ip = 76; continue _fun0004 }
case 77:
                var34 = _closure1_slot0;
                var32 = _closure1_slot1;
                var32 = var32[var20];
                var32 = var34.bind(var22)(var32);
                var32 = var32.UnknownFieldHandler;
                var33 = var32.onRead;
case 76:
                var39 = var2.typeName;
                var40 = undefined;
                var38 = var1;
                var37 = var8;
                var36 = var7;
                var35 = var3;
                var32 = var40[var33](var39, var38, var37, var36, var35, var34);
                var30 = var10;
                var29 = var9;
                var28 = var6;
                var27 = var31;
                var26 = var3;
case 18:
                var3 = var25.pos;
                var10 = var30;
                var9 = var29;
                var6 = var28;
                var5 = var27;
                var4 = var26;
                if(var3 < var23) { _fun0004_ip = 16; continue _fun0004 }
case 15:
                return var1;
case 73:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var35 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var40 = 'Unknown field ';
                var38 = ' (wire type ';
                var36 = ') for ';
                var39 = var8;
                var37 = var7;
                var39 = var40[var5](var39, var38, var37, var36, var35, var34);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var40 = var2;
                var1 = new var40[var3](var39, var38);
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
                if(!(var8 !== var2)) { _fun0005_ip = 78; continue _fun0005 }
case 79:
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
case 78:
                var2 = var5.name;
                var10 = '';
                if(!(var10 !== var2)) { _fun0005_ip = 80; continue _fun0005 }
case 81:
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
case 80:
                var2 = var5.createdAt;
                if(!var2) { _fun0005_ip = 82; continue _fun0005 }
case 83:
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
case 82:
                var2 = var5.creatorId;
                if(!(var8 !== var2)) { _fun0005_ip = 84; continue _fun0005 }
case 85:
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
case 84:
                var2 = var5.version;
                var9 = 0;
                if(!(var9 !== var2)) { _fun0005_ip = 24; continue _fun0005 }
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
                var2 = 5;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.version;
                var2 = var4.bind(var6)(var2);
case 24:
                var2 = var5.editedAt;
                if(!var2) { _fun0005_ip = 87; continue _fun0005 }
case 88:
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
case 87:
                var2 = var5.editorId;
                if(!(var8 !== var2)) { _fun0005_ip = 89; continue _fun0005 }
case 90:
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
case 89:
                var2 = var5.title;
                if(!(var10 !== var2)) { _fun0005_ip = 91; continue _fun0005 }
case 92:
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
case 91:
                var2 = var5.description;
                if(!(var10 !== var2)) { _fun0005_ip = 93; continue _fun0005 }
case 94:
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
case 93:
                var2 = var5.hypothesis;
                if(!var2) { _fun0005_ip = 95; continue _fun0005 }
case 96:
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
case 95:
                var2 = var5.techSpecLink;
                if(!var2) { _fun0005_ip = 97; continue _fun0005 }
case 98:
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
case 97:
                var2 = var5.revision;
                if(!(var9 !== var2)) { _fun0005_ip = 99; continue _fun0005 }
case 100:
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
case 99:
                var2 = var5.hashKey;
                if(!(var10 !== var2)) { _fun0005_ip = 101; continue _fun0005 }
case 102:
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
case 101:
                var2 = var5.unitType;
                if(!(var9 !== var2)) { _fun0005_ip = 103; continue _fun0005 }
case 104:
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
case 103:
                var2 = var5.variations;
                var2 = var2.length;
                var6 = var9 < var2;
                var7 = 9;
                var4 = undefined;
                var12 = 15;
                var11 = 0;
                if(!var6) { _fun0005_ip = 105; continue _fun0005 }
case 106:
                var15 = _closure1_slot21;
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
                if(var11 < var6) { _fun0005_ip = 106; continue _fun0005 }
case 105:
                var6 = var5.rules;
                var6 = var6.length;
                var6 = var9 < var6;
                var13 = 8;
                var12 = 16;
                var11 = 0;
                if(!var6) { _fun0005_ip = 107; continue _fun0005 }
case 108:
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
                if(var11 < var6) { _fun0005_ip = 108; continue _fun0005 }
case 107:
                var6 = var5.phase;
                if(!(var9 !== var6)) { _fun0005_ip = 109; continue _fun0005 }
case 110:
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
case 109:
                var6 = var5.surfaces;
                var6 = var6.length;
                if(!var6) { _fun0005_ip = 111; continue _fun0005 }
case 112:
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
                if(!var6) { _fun0005_ip = 54; continue _fun0005 }
case 113:
                var12 = var1.int32;
                var6 = var5.surfaces;
                var6 = var6[var11];
                var6 = var12.bind(var1)(var6);
                var11 = var11 + 1;
                var6 = var5.surfaces;
                var6 = var6.length;
                if(var11 < var6) { _fun0005_ip = 113; continue _fun0005 }
case 54:
                var6 = var1.join;
                var6 = var6.bind(var1)();
case 111:
                var6 = var5.owningTeamId;
                if(!(var10 !== var6)) { _fun0005_ip = 114; continue _fun0005 }
case 115:
                var12 = var1.tag;
                var11 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var11.bind(var4)(var6);
                var6 = var6.WireType;
                var11 = var6.LengthDelimited;
                var6 = 20;
                var12 = var12.bind(var1)(var6, var11);
                var11 = var12.string;
                var6 = var5.owningTeamId;
                var6 = var11.bind(var12)(var6);
case 114:
                var6 = var5.cachedNotificationChannelId;
                if(!(var8 !== var6)) { _fun0005_ip = 116; continue _fun0005 }
case 117:
                var11 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Bit64;
                var6 = 21;
                var11 = var11.bind(var1)(var6, var8);
                var8 = var11.fixed64;
                var6 = var5.cachedNotificationChannelId;
                var6 = var8.bind(var11)(var6);
case 116:
                var6 = var5.exposureTracking;
                if(!(var9 !== var6)) { _fun0005_ip = 118; continue _fun0005 }
case 119:
                var11 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Varint;
                var6 = 22;
                var11 = var11.bind(var1)(var6, var8);
                var8 = var11.int32;
                var6 = var5.exposureTracking;
                var6 = var8.bind(var11)(var6);
case 118:
                var6 = var5.assignmentMode;
                if(!(var9 !== var6)) { _fun0005_ip = 120; continue _fun0005 }
case 121:
                var11 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Varint;
                var6 = 25;
                var11 = var11.bind(var1)(var6, var8);
                var8 = var11.int32;
                var6 = var5.assignmentMode;
                var6 = var8.bind(var11)(var6);
case 120:
                var8 = var5.enableEditRawJsonUi;
                var6 = false;
                if(!(var6 !== var8)) { _fun0005_ip = 122; continue _fun0005 }
case 123:
                var12 = var1.tag;
                var11 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var11.bind(var4)(var8);
                var8 = var8.WireType;
                var11 = var8.Varint;
                var8 = 23;
                var12 = var12.bind(var1)(var8, var11);
                var11 = var12.bool;
                var8 = var5.enableEditRawJsonUi;
                var8 = var11.bind(var12)(var8);
case 122:
                var8 = var5.winningVariationId;
                if(!(var9 !== var8)) { _fun0005_ip = 124; continue _fun0005 }
case 125:
                var12 = var1.tag;
                var11 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var11.bind(var4)(var8);
                var8 = var8.WireType;
                var11 = var8.Varint;
                var8 = 24;
                var12 = var12.bind(var1)(var8, var11);
                var11 = var12.int32;
                var8 = var5.winningVariationId;
                var8 = var11.bind(var12)(var8);
case 124:
                var8 = var5.extraOutcomeContext;
                if(!(var10 !== var8)) { _fun0005_ip = 126; continue _fun0005 }
case 127:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.LengthDelimited;
                var8 = 34;
                var11 = var11.bind(var1)(var8, var10);
                var10 = var11.string;
                var8 = var5.extraOutcomeContext;
                var8 = var10.bind(var11)(var8);
case 126:
                var8 = var5.type;
                if(!(var9 !== var8)) { _fun0005_ip = 128; continue _fun0005 }
case 129:
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
case 128:
                var8 = var5.isTemplate;
                if(!(var6 !== var8)) { _fun0005_ip = 130; continue _fun0005 }
case 131:
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
case 130:
                var8 = var5.fieldNumbersToCopy;
                var8 = var8.length;
                if(!var8) { _fun0005_ip = 132; continue _fun0005 }
case 133:
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
                var10 = 0;
                if(!var8) { _fun0005_ip = 134; continue _fun0005 }
case 135:
                var11 = var1.int32;
                var8 = var5.fieldNumbersToCopy;
                var8 = var8[var10];
                var8 = var11.bind(var1)(var8);
                var10 = var10 + 1;
                var8 = var5.fieldNumbersToCopy;
                var8 = var8.length;
                if(var10 < var8) { _fun0005_ip = 135; continue _fun0005 }
case 134:
                var8 = var1.join;
                var8 = var8.bind(var1)();
case 132:
                var8 = var5.engineFeatureFlags;
                var8 = var8.length;
                var8 = var9 < var8;
                var11 = 29;
                var10 = 0;
                if(!var8) { _fun0005_ip = 136; continue _fun0005 }
case 137:
                var12 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var13 = var12.bind(var1)(var11, var8);
                var12 = var13.string;
                var8 = var5.engineFeatureFlags;
                var8 = var8[var10];
                var8 = var12.bind(var13)(var8);
                var10 = var10 + 1;
                var8 = var5.engineFeatureFlags;
                var8 = var8.length;
                if(var10 < var8) { _fun0005_ip = 137; continue _fun0005 }
case 136:
                var8 = var5.debugConfig;
                if(!var8) { _fun0005_ip = 138; continue _fun0005 }
case 139:
                var12 = _closure1_slot23;
                var11 = var12.internalBinaryWrite;
                var10 = var5.debugConfig;
                var14 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var13 = var8.LengthDelimited;
                var8 = 30;
                var13 = var14.bind(var1)(var8, var13);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var10 = var11.bind(var12)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
case 138:
                var8 = var5.expectedEndDate;
                if(!var8) { _fun0005_ip = 140; continue _fun0005 }
case 141:
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var10 = 6;
                var10 = var8[var10];
                var10 = var13.bind(var4)(var10);
                var12 = var10.Timestamp;
                var11 = var12.internalBinaryWrite;
                var10 = var5.expectedEndDate;
                var14 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var13 = var8.LengthDelimited;
                var8 = 31;
                var13 = var14.bind(var1)(var8, var13);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var10 = var11.bind(var12)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
case 140:
                var8 = var5.isAutomatedChange;
                if(!(var6 !== var8)) { _fun0005_ip = 142; continue _fun0005 }
case 143:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 32;
                var11 = var11.bind(var1)(var8, var10);
                var10 = var11.bool;
                var8 = var5.isAutomatedChange;
                var8 = var10.bind(var11)(var8);
case 142:
                var8 = var5.suppressEditorMention;
                if(!(var6 !== var8)) { _fun0005_ip = 144; continue _fun0005 }
case 145:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 44;
                var11 = var11.bind(var1)(var8, var10);
                var10 = var11.bool;
                var8 = var5.suppressEditorMention;
                var8 = var10.bind(var11)(var8);
case 144:
                var8 = var5.archiveAt;
                if(!var8) { _fun0005_ip = 146; continue _fun0005 }
case 147:
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var10 = 6;
                var10 = var8[var10];
                var10 = var13.bind(var4)(var10);
                var12 = var10.Timestamp;
                var11 = var12.internalBinaryWrite;
                var10 = var5.archiveAt;
                var14 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var13 = var8.LengthDelimited;
                var8 = 33;
                var13 = var14.bind(var1)(var8, var13);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var10 = var11.bind(var12)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
case 146:
                var8 = var5.guildExperimentVersion;
                if(!var8) { _fun0005_ip = 148; continue _fun0005 }
case 149:
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var10 = 7;
                var10 = var8[var10];
                var10 = var13.bind(var4)(var10);
                var12 = var10.Int32Value;
                var11 = var12.internalBinaryWrite;
                var10 = var5.guildExperimentVersion;
                var14 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var13 = var8.LengthDelimited;
                var8 = 35;
                var13 = var14.bind(var1)(var8, var13);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var10 = var11.bind(var12)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
case 148:
                var8 = var5.customUnitPrefix;
                if(!(var9 !== var8)) { _fun0005_ip = 150; continue _fun0005 }
case 151:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.Varint;
                var8 = 36;
                var11 = var11.bind(var1)(var8, var10);
                var10 = var11.int32;
                var8 = var5.customUnitPrefix;
                var8 = var10.bind(var11)(var8);
case 150:
                var8 = var5.exposurePoints;
                var8 = var8.length;
                if(!var8) { _fun0005_ip = 152; continue _fun0005 }
case 153:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.LengthDelimited;
                var8 = 45;
                var10 = var11.bind(var1)(var8, var10);
                var8 = var10.fork;
                var8 = var8.bind(var10)();
                var8 = var5.exposurePoints;
                var8 = var8.length;
                var8 = var9 < var8;
                var10 = 0;
                if(!var8) { _fun0005_ip = 154; continue _fun0005 }
case 155:
                var11 = var1.int32;
                var8 = var5.exposurePoints;
                var8 = var8[var10];
                var8 = var11.bind(var1)(var8);
                var10 = var10 + 1;
                var8 = var5.exposurePoints;
                var8 = var8.length;
                if(var10 < var8) { _fun0005_ip = 155; continue _fun0005 }
case 154:
                var8 = var1.join;
                var8 = var8.bind(var1)();
case 152:
                var8 = var5.growthbookTags;
                var8 = var8.length;
                var8 = var9 < var8;
                var11 = 37;
                var10 = 0;
                if(!var8) { _fun0005_ip = 156; continue _fun0005 }
case 157:
                var12 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var13 = var12.bind(var1)(var11, var8);
                var12 = var13.string;
                var8 = var5.growthbookTags;
                var8 = var8[var10];
                var8 = var12.bind(var13)(var8);
                var10 = var10 + 1;
                var8 = var5.growthbookTags;
                var8 = var8.length;
                if(var10 < var8) { _fun0005_ip = 157; continue _fun0005 }
case 156:
                var8 = var5.allocateRightToLeft;
                if(!(var6 !== var8)) { _fun0005_ip = 158; continue _fun0005 }
case 159:
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
case 158:
                var8 = var5.isManaged;
                if(!(var6 !== var8)) { _fun0005_ip = 160; continue _fun0005 }
case 161:
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
case 160:
                var8 = var5.numberLineSettings;
                if(!var8) { _fun0005_ip = 162; continue _fun0005 }
case 163:
                var12 = _closure1_slot20;
                var11 = var12.internalBinaryWrite;
                var10 = var5.numberLineSettings;
                var14 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var13 = var8.LengthDelimited;
                var8 = 43;
                var13 = var14.bind(var1)(var8, var13);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var10 = var11.bind(var12)(var10, var8, var3);
                var8 = var10.join;
                var8 = var8.bind(var10)();
case 162:
                var8 = var5.eligibilityPersistence;
                if(!(var9 !== var8)) { _fun0005_ip = 164; continue _fun0005 }
case 165:
                var10 = var1.tag;
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var9.bind(var4)(var8);
                var8 = var8.WireType;
                var9 = var8.Varint;
                var8 = 42;
                var10 = var10.bind(var1)(var8, var9);
                var9 = var10.int32;
                var8 = var5.eligibilityPersistence;
                var8 = var9.bind(var10)(var8);
case 164:
                var3 = var3.writeUnknownFields;
                if(!(var6 !== var3)) { _fun0005_ip = 166; continue _fun0005 }
case 167:
                var6 = 1;
                if(!(var6 == var3)) { _fun0005_ip = 168; continue _fun0005 }
case 169:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 168:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 166:
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
    var30 = var5;
    var4 = new var30[var4](var29);
    var7 = var4 instanceof Object ? var4 : var5;
    var4 = var22[var2];
    var4 = var21.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Experiment_NumberLineSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot24;
            var1 = {'no': 1, 'name': 'mode', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot8;
                var1 = ['discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings.Mode'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(3);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'linked_id', 'kind': 'scalar', 'T': 6};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'shared_control', 'kind': 'scalar', 'T': 8};
            var6[2] = var1;
            var1 = ['discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings'];
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
                var1 = {'mode': 0, 'linkedId': '0', 'sharedControl': false};
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
                if(!(var6 !== var5)) { _fun0006_ip = 170; continue _fun0006 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 170:
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
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 13; continue _fun0007 }
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
                if(!var2) { _fun0007_ip = 171; continue _fun0007 }
case 172:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0007_ip = 173; continue _fun0007 }
case 174:
                if(!(var7 !== var27)) { _fun0007_ip = 175; continue _fun0007 }
case 176:
                if(!(var8 !== var27)) { _fun0007_ip = 177; continue _fun0007 }
case 178:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0007_ip = 179; continue _fun0007 }
case 180:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0007_ip = 181; continue _fun0007 }
case 80:
                var23 = var21;
                if(!(var11 === var21)) { _fun0007_ip = 182; continue _fun0007 }
case 183:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 182:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0007_ip = 181; continue _fun0007;
case 179:
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
case 177:
                var2 = var18.bool;
                var2 = var2.bind(var18)();
                var1['sharedControl'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0007_ip = 181; continue _fun0007;
case 175:
                var2 = var18.fixed64;
                var21 = var2.bind(var18)();
                var2 = var21.toString;
                var2 = var2.bind(var21)();
                var1['linkedId'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0007_ip = 181; continue _fun0007;
case 173:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['mode'] = var2;
                var20 = var4;
                var19 = var3;
case 181:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0007_ip = 172; continue _fun0007 }
case 171:
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
                var3 = var5.mode;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0008_ip = 184; continue _fun0008 }
case 185:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.mode;
                var2 = var3.bind(var4)(var2);
case 184:
                var3 = var5.linkedId;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0008_ip = 186; continue _fun0008 }
case 187:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Bit64;
                var2 = 2;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.fixed64;
                var2 = var5.linkedId;
                var2 = var3.bind(var4)(var2);
case 186:
                var3 = var5.sharedControl;
                var2 = false;
                if(!(var2 !== var3)) { _fun0008_ip = 188; continue _fun0008 }
case 19:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 3;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.sharedControl;
                var3 = var4.bind(var6)(var3);
case 188:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0008_ip = 189; continue _fun0008 }
case 190:
                var2 = 1;
                if(!(var2 == var4)) { _fun0008_ip = 191; continue _fun0008 }
case 192:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 191:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 189:
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
    var30 = var5;
    var4 = new var30[var4](var29);
    var6 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot20 = var6;
    var4 = var22[var2];
    var4 = var21.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Variation$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot24;
            var6 = new Array(7);
            var1 = {'no': 1, 'name': 'id', 'kind': 'scalar', 'T': 5};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'label', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'target_allocation', 'kind': 'scalar', 'T': 5};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'buckets', 'kind': 'message', 'repeat': 1};
            var8 = function T() {
                var1 = _closure1_slot22;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'type', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot17;
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
            var1 = {'no': 7, 'name': 'owning_experiment_id', 'kind': 'scalar', 'T': 6};
            var6[6] = var1;
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
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'id': 0, 'label': '', 'targetAllocation': 0, 'buckets': null, 'type': 0, 'owningExperimentId': '0'};
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
                if(!(var6 !== var5)) { _fun0009_ip = 193; continue _fun0009 }
case 194:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 193:
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
                if(!(var2 == var1)) { _fun0010_ip = 13; continue _fun0010 }
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
                if(!var2) { _fun0010_ip = 195; continue _fun0010 }
case 16:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0010_ip = 196; continue _fun0010 }
case 197:
                if(!(var7 !== var31)) { _fun0010_ip = 198; continue _fun0010 }
case 199:
                if(!(var8 !== var31)) { _fun0010_ip = 200; continue _fun0010 }
case 201:
                if(!(var9 !== var31)) { _fun0010_ip = 202; continue _fun0010 }
case 203:
                if(!(var10 !== var31)) { _fun0010_ip = 204; continue _fun0010 }
case 205:
                if(!(var11 !== var31)) { _fun0010_ip = 206; continue _fun0010 }
case 186:
                if(!(var16 !== var31)) { _fun0010_ip = 84; continue _fun0010 }
case 207:
                var25 = var21.readUnknownField;
                if(!(var12 !== var25)) { _fun0010_ip = 208; continue _fun0010 }
case 209:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var13 !== var25)) { _fun0010_ip = 210; continue _fun0010 }
case 211:
                var27 = var25;
                if(!(var14 === var25)) { _fun0010_ip = 20; continue _fun0010 }
case 212:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var15];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 20:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0010_ip = 210; continue _fun0010;
case 208:
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
case 84:
                var2 = var22.fixed64;
                var25 = var2.bind(var22)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var1['owningExperimentId'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 210; continue _fun0010;
case 206:
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
                _fun0010_ip = 210; continue _fun0010;
case 204:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['type'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 210; continue _fun0010;
case 202:
                var26 = var1.buckets;
                var25 = var26.push;
                var28 = _closure1_slot22;
                var27 = var28.internalBinaryRead;
                var2 = var22.uint32;
                var2 = var2.bind(var22)();
                var2 = var27.bind(var28)(var22, var2, var21);
                var2 = var25.bind(var26)(var2);
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 210; continue _fun0010;
case 200:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['targetAllocation'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 210; continue _fun0010;
case 198:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['label'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0010_ip = 210; continue _fun0010;
case 196:
                var2 = var22.int32;
                var2 = var2.bind(var22)();
                var1['id'] = var2;
                var24 = var4;
                var23 = var3;
case 210:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0010_ip = 16; continue _fun0010 }
case 195:
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
                var8 = 0;
                if(!(var8 !== var2)) { _fun0011_ip = 213; continue _fun0011 }
case 214:
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
case 213:
                var4 = var5.label;
                var2 = '';
                if(!(var2 !== var4)) { _fun0011_ip = 215; continue _fun0011 }
case 187:
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
case 215:
                var2 = var5.targetAllocation;
                if(!(var8 !== var2)) { _fun0011_ip = 216; continue _fun0011 }
case 207:
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
case 216:
                var2 = var5.buckets;
                var2 = var2.length;
                var6 = var8 < var2;
                var7 = 9;
                var4 = undefined;
                var10 = 4;
                var9 = 0;
                if(!var6) { _fun0011_ip = 217; continue _fun0011 }
case 218:
                var13 = _closure1_slot22;
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
                if(var9 < var6) { _fun0011_ip = 218; continue _fun0011 }
case 217:
                var6 = var5.type;
                if(!(var8 !== var6)) { _fun0011_ip = 219; continue _fun0011 }
case 220:
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
case 219:
                var6 = var5.configuration;
                if(!var6) { _fun0011_ip = 221; continue _fun0011 }
case 222:
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
case 221:
                var8 = var5.owningExperimentId;
                var6 = '0';
                if(!(var6 !== var8)) { _fun0011_ip = 223; continue _fun0011 }
case 224:
                var9 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Bit64;
                var6 = 7;
                var9 = var9.bind(var1)(var6, var8);
                var8 = var9.fixed64;
                var6 = var5.owningExperimentId;
                var6 = var8.bind(var9)(var6);
case 223:
                var3 = var3.writeUnknownFields;
                var6 = false;
                if(!(var6 !== var3)) { _fun0011_ip = 225; continue _fun0011 }
case 226:
                var6 = 1;
                if(!(var6 == var3)) { _fun0011_ip = 227; continue _fun0011 }
case 228:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 227:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 225:
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
    var30 = var5;
    var4 = new var30[var4](var29);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot21 = var5;
    var4 = var22[var2];
    var4 = var21.bind(var1)(var4);
    var23 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Bucket$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot24;
            var6 = new Array(3);
            var1 = {'no': 1, 'name': 'start', 'kind': 'scalar', 'T': 5};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'stop', 'kind': 'scalar', 'T': 5};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'type', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot18;
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
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                if(!(var6 !== var5)) { _fun0012_ip = 229; continue _fun0012 }
case 230:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 229:
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
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0013_ip = 13; continue _fun0013 }
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
                if(!var2) { _fun0013_ip = 231; continue _fun0013 }
case 172:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0013_ip = 232; continue _fun0013 }
case 174:
                if(!(var7 !== var27)) { _fun0013_ip = 175; continue _fun0013 }
case 176:
                if(!(var8 !== var27)) { _fun0013_ip = 177; continue _fun0013 }
case 178:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0013_ip = 179; continue _fun0013 }
case 180:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0013_ip = 233; continue _fun0013 }
case 80:
                var23 = var21;
                if(!(var11 === var21)) { _fun0013_ip = 182; continue _fun0013 }
case 183:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 182:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0013_ip = 233; continue _fun0013;
case 179:
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
case 177:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['type'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0013_ip = 233; continue _fun0013;
case 175:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['stop'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0013_ip = 233; continue _fun0013;
case 232:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['start'] = var2;
                var20 = var4;
                var19 = var3;
case 233:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0013_ip = 172; continue _fun0013 }
case 231:
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
                var2 = var5.start;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0014_ip = 184; continue _fun0014 }
case 185:
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
case 184:
                var2 = var5.stop;
                if(!(var3 !== var2)) { _fun0014_ip = 234; continue _fun0014 }
case 235:
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
case 234:
                var2 = var5.type;
                if(!(var3 !== var2)) { _fun0014_ip = 236; continue _fun0014 }
case 237:
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
case 236:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0014_ip = 238; continue _fun0014 }
case 239:
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
case 238:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var23);
    var23 = var4.prototype;
    var23 = Object.create(var23, {constructor: {value: var4}});
    var30 = var23;
    var4 = new var30[var4](var29);
    var4 = var4 instanceof Object ? var4 : var23;
    var _closure1_slot22 = var4;
    var2 = var22[var2];
    var2 = var21.bind(var1)(var2);
    var23 = var2.MessageType;
    var2 = function(arg1) {
        var4 = function DebugConfig$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot24;
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
                if(!(var6 !== var5)) { _fun0015_ip = 170; continue _fun0015 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 170:
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
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0016_ip = 13; continue _fun0016 }
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
                if(!var2) { _fun0016_ip = 242; continue _fun0016 }
case 243:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var7);
                var30 = var2[var5];
                var29 = var2[var6];
                if(!(var6 !== var30)) { _fun0016_ip = 244; continue _fun0016 }
case 245:
                if(!(var7 !== var30)) { _fun0016_ip = 246; continue _fun0016 }
case 247:
                if(!(var8 !== var30)) { _fun0016_ip = 248; continue _fun0016 }
case 17:
                if(!(var9 !== var30)) { _fun0016_ip = 249; continue _fun0016 }
case 250:
                if(!(var10 !== var30)) { _fun0016_ip = 251; continue _fun0016 }
case 252:
                if(!(var11 !== var30)) { _fun0016_ip = 253; continue _fun0016 }
case 215:
                var24 = var20.readUnknownField;
                if(!(var12 !== var24)) { _fun0016_ip = 254; continue _fun0016 }
case 207:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var29);
                var23 = var24;
                var22 = var2;
                if(!(var13 !== var24)) { _fun0016_ip = 255; continue _fun0016 }
case 256:
                var26 = var24;
                if(!(var14 === var24)) { _fun0016_ip = 257; continue _fun0016 }
case 258:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var15];
                var25 = var27.bind(var17)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 257:
                var35 = var19.typeName;
                var36 = undefined;
                var34 = var1;
                var33 = var30;
                var32 = var29;
                var31 = var2;
                var25 = var36[var26](var35, var34, var33, var32, var31, var30);
                var23 = var24;
                var22 = var2;
                _fun0016_ip = 255; continue _fun0016;
case 254:
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
case 253:
                var2 = var21.double;
                var2 = var2.bind(var21)();
                var1['decisionLogSampleRate'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0016_ip = 255; continue _fun0016;
case 251:
                var2 = var21.bool;
                var2 = var2.bind(var21)();
                var1['tagFilterMetrics'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0016_ip = 255; continue _fun0016;
case 249:
                var2 = var21.bool;
                var2 = var2.bind(var21)();
                var1['logRawHeaders'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0016_ip = 255; continue _fun0016;
case 248:
                var2 = var21.bool;
                var2 = var2.bind(var21)();
                var1['logContextOnFailure'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0016_ip = 255; continue _fun0016;
case 246:
                var2 = var21.double;
                var2 = var2.bind(var21)();
                var1['metricsSampleRate'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0016_ip = 255; continue _fun0016;
case 244:
                var2 = var21.bool;
                var2 = var2.bind(var21)();
                var1['enableDecisionLogging'] = var2;
                var23 = var4;
                var22 = var3;
case 255:
                var2 = var21.pos;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0016_ip = 243; continue _fun0016 }
case 242:
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
                var3 = var5.enableDecisionLogging;
                var2 = false;
                if(!(var2 !== var3)) { _fun0017_ip = 172; continue _fun0017 }
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
case 172:
                var3 = var5.metricsSampleRate;
                var4 = 0;
                if(!(var4 !== var3)) { _fun0017_ip = 259; continue _fun0017 }
case 16:
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
case 259:
                var3 = var5.logContextOnFailure;
                if(!(var2 !== var3)) { _fun0017_ip = 260; continue _fun0017 }
case 183:
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
case 260:
                var3 = var5.logRawHeaders;
                if(!(var2 !== var3)) { _fun0017_ip = 177; continue _fun0017 }
case 261:
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
case 177:
                var3 = var5.tagFilterMetrics;
                if(!(var2 !== var3)) { _fun0017_ip = 262; continue _fun0017 }
case 263:
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
case 262:
                var3 = var5.decisionLogSampleRate;
                if(!(var4 !== var3)) { _fun0017_ip = 264; continue _fun0017 }
case 265:
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
case 264:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0017_ip = 266; continue _fun0017 }
case 267:
                var2 = 1;
                if(!(var2 == var4)) { _fun0017_ip = 268; continue _fun0017 }
case 269:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 268:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 266:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var23);
    var23 = var2.prototype;
    var23 = Object.create(var23, {constructor: {value: var2}});
    var30 = var23;
    var2 = new var30[var2](var29);
    var2 = var2 instanceof Object ? var2 : var23;
    var _closure1_slot23 = var2;
    var20 = 10;
    var20 = var22[var20];
    var22 = var21.bind(var1)(var20);
    var21 = var22.fileFinishedImporting;
    var20 = '../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx';
    var20 = var21.bind(var22)(var20);
    var3['Experiment_NumberLineSettings_Mode'] = var19;
    var3['Experiment_UnitType'] = var18;
    var3['Experiment_Surface'] = var17;
    var3['Experiment_ExposureTracking'] = var16;
    var3['Experiment_AssignmentMode'] = var15;
    var3['Experiment_Type'] = var14;
    var3['Experiment_CustomUnitPrefix'] = var13;
    var3['Experiment_ExposurePointId'] = var12;
    var3['Experiment_EligibilityPersistence'] = var11;
    var3['Variation_Type'] = var10;
    var3['Bucket_Type'] = var9;
    var3['Phase'] = var8;
    var3['Experiment'] = var7;
    var3['Experiment_NumberLineSettings'] = var6;
    var3['Variation'] = var5;
    var3['Bucket'] = var4;
    var3['DebugConfig'] = var2;
    return var1;
})();
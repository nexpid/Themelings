// app/modules/guild_settings/audit_log/native/AuditLog.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function shouldNotRenderChangeDetail(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot2;
            var2 = _closure1_slot3;
            var1 = 15;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var2 = var1.NotRenderedChanges;
            var1 = arg1;
            var1 = var1.targetType;
            var3 = var2[var1];
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = arg2;
            var2 = var2.key;
            var3 = var3[var2];
            var2 = true;
            var1 = var2 === var3;
case 6:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function getUserAvatarSource(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = arg2;
            var9 = arg3;
            var3 = var7.action;
            var2 = _closure1_slot17;
            var2 = var2.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(var3 !== var2)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = var7.action;
            var2 = _closure1_slot17;
            var2 = var2.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(var3 !== var2)) { _fun0003_ip = 8; continue _fun0003 }
case 7:
            var3 = var7.action;
            var2 = _closure1_slot17;
            var2 = var2.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(var3 !== var2)) { _fun0003_ip = 8; continue _fun0003 }
case 10:
            var3 = var7.action;
            var2 = _closure1_slot17;
            var2 = var2.AUTO_MODERATION_QUARANTINE_USER;
            if(!(var3 !== var2)) { _fun0003_ip = 8; continue _fun0003 }
case 11:
            var2 = var7.options;
            var2 = var2.integration_type;
            var6 = null;
            if(!(var6 != var2)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var3 = _closure1_slot1;
            var4 = _closure1_slot3;
            var2 = 18;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.get;
            var2 = var7.options;
            var2 = var2.integration_type;
            var2 = var3.bind(var4)(var2);
            if(!(var6 == var2)) { _fun0003_ip = 14; continue _fun0003 }
case 12:
            var8 = var6 != var9;
            var3 = undefined;
            if(!var8) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var8 = var7.user;
            var6 = var6 == var8;
            var4 = undefined;
            if(var6) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var7 = var8.getAvatarSource;
            var6 = false;
            var4 = var7.bind(var8)(var9, var6);
case 17:
            var3 = var4;
case 15:
            return var3;
case 14:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 19;
            var3 = var6[var3];
            var6 = var4.bind(var5)(var3);
            var4 = var6.isThemeDark;
            var3 = arg1;
            var3 = var4.bind(var6)(var3);
            var2 = var2.icon;
            if(var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var4 = var2.lightPNG;
            _fun0003_ip = 21; continue _fun0003;
case 19:
            var4 = var2.darkPNG;
case 21:
            var3 = _closure1_slot0;
            var6 = _closure1_slot3;
            var2 = 17;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.makeSource;
            var2 = var2.bind(var3)(var4);
            return var2;
case 8:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 16;
            var2 = var8[var1];
            var6 = undefined;
            var3 = var7.bind(var6)(var2);
            var2 = var3.ensureAvatarSource;
            var4 = 17;
            var4 = var8[var4];
            var5 = var7.bind(var6)(var4);
            var4 = var5.makeSource;
            var1 = var8[var1];
            var6 = var7.bind(var6)(var1);
            var1 = var6.getAutomodAvatarURL;
            var1 = var1.bind(var6)();
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function ApplicationHook(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var3 = _closure1_slot0;
            var5 = _closure1_slot3;
            var1 = 20;
            var1 = var5[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.useGetOrFetchApplication;
            var6 = var1.bind(var3)(var4);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 7:
            var4 = _closure1_slot20;
            var3 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 21;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-md/normal', 'color': 'header-secondary'};
            var6 = var6.name;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 22:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var6[var7];
    var10 = var8.bind(var1)(var7);
    var _closure1_slot11 = var10;
    var14 = 8;
    var7 = var6[var14];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var15 = 10;
    var7 = var6[var15];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.AuditLogTargetTypes;
    var _closure1_slot15 = var9;
    var9 = var7.AuditLogActionTypes;
    var _closure1_slot16 = var9;
    var9 = var7.AuditLogActions;
    var _closure1_slot17 = var9;
    var9 = var7.NOOP;
    var _closure1_slot18 = var9;
    var13 = var7.Fonts;
    var7 = var7.AuditLogChangeKeys;
    var _closure1_slot19 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.jsx;
    var _closure1_slot20 = var9;
    var7 = var7.jsxs;
    var _closure1_slot21 = var7;
    var7 = 13;
    var7 = var6[var7];
    var11 = var5.bind(var1)(var7);
    var9 = var11.createLegacyClassComponentStyles;
    var7 = {};
    var12 = {'marginHorizontal': 8, 'marginVertical': 4, 'borderRadius': 3};
    var7['container'] = var12;
    var12 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center'};
    var7['rowContainer'] = var12;
    var12 = {'marginRight': 24, 'flex': 1};
    var7['titleContainer'] = var12;
    var12 = {};
    var12['marginHorizontal'] = var14;
    var7['title'] = var12;
    var12 = {'fontSize': 12, 'lineHeight': 30};
    var14 = 14;
    var16 = var6[var14];
    var16 = var8.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_400;
    var12['color'] = var16;
    var7['discriminator'] = var12;
    var12 = {'marginLeft': 10, 'height': 32, 'width': 32};
    var7['avatar'] = var12;
    var12 = {'fontSize': 12, 'marginHorizontal': 8, 'marginTop': 8};
    var16 = var6[var14];
    var16 = var8.bind(var1)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.PRIMARY_400;
    var12['color'] = var16;
    var7['timestamp'] = var12;
    var12 = {'height': 13, 'width': 8, 'marginRight': 8};
    var16 = var6[var14];
    var16 = var8.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.INTERACTIVE_NORMAL;
    var12['tintColor'] = var16;
    var7['arrow'] = var12;
    var12 = {};
    var17 = {};
    var16 = '90deg';
    var17['rotate'] = var16;
    var16 = new Array(1);
    var16[0] = var17;
    var12['transform'] = var16;
    var7['rotate90'] = var12;
    var12 = {};
    var16 = var6[var14];
    var16 = var8.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var12['marginTop'] = var16;
    var16 = var6[var14];
    var16 = var8.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var12['padding'] = var16;
    var16 = var6[var14];
    var16 = var8.bind(var1)(var16);
    var16 = var16.radii;
    var16 = var16.md;
    var12['borderRadius'] = var16;
    var16 = var6[var14];
    var16 = var8.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_MOD_FAINT;
    var12['backgroundColor'] = var16;
    var7['changesContainer'] = var12;
    var12 = {'flexDirection': 'row', 'flex': 1, 'alignItems': 'flex-start'};
    var7['changeRow'] = var12;
    var12 = {};
    var12['marginRight'] = var15;
    var15 = var13.CODE_BOLD;
    var12['fontFamily'] = var15;
    var7['changeNumberText'] = var12;
    var12 = {'color': null, 'alignItems': 'baseline', 'fontSize': 14};
    var15 = var6[var14];
    var15 = var8.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.PRIMARY_400;
    var12['color'] = var15;
    var7['changeItemText'] = var12;
    var12 = {'height': 10, 'width': 10, 'borderRadius': 5};
    var14 = var6[var14];
    var14 = var8.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.TRANSPARENT;
    var12['borderColor'] = var14;
    var7['colorHook'] = var12;
    var12 = {'display': 'flex', 'flexDirection': 'row', 'fontFamily': null, 'justifyContent': 'center', 'alignItems': 'center', 'marginTop': 4294967294};
    var13 = var13.PRIMARY_MEDIUM;
    var12['fontFamily'] = var13;
    var7['colorsHook'] = var12;
    var12 = {'flex': 1, 'alignItems': 'flex-start'};
    var7['changeItemContent'] = var12;
    var12 = {'alignItems': 'center', 'flexDirection': 'row'};
    var7['changeItemTextContainer'] = var12;
    var12 = {'height': 'auto', 'paddingVertical': 0, 'paddingHorizontal': 4};
    var7['forumTag'] = var12;
    var12 = {'height': 14, 'width': 14};
    var7['imageEmoji'] = var12;
    var12 = {'fontSize': 14, 'lineHeight': 16};
    var7['textEmoji'] = var12;
    var7 = var9.bind(var11)(var7);
    var _closure1_slot22 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function AuditLog() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot23;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 25; continue _fun0005;
case 23:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 25:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'hasChangesToRender';
        var5['key'] = var1;
        var1 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var4 = var1.log;
                var _closure3_slot0 = var4;
                var5 = var4.changes;
                var6 = var4.actionType;
                var1 = _closure1_slot16;
                var1 = var1.DELETE;
                var1 = var6 !== var1;
                if(var1) { _fun0006_ip = 6; continue _fun0006 }
case 26:
                var7 = var4.action;
                var6 = _closure1_slot17;
                var6 = var6.MEMBER_BAN_ADD;
                var1 = var7 === var6;
case 6:
                if(var1) { _fun0006_ip = 27; continue _fun0006 }
case 5:
                var7 = var4.action;
                var6 = _closure1_slot17;
                var6 = var6.MEMBER_KICK;
                var1 = var7 === var6;
case 27:
                if(var1) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var4 = var4.action;
                var2 = _closure1_slot17;
                var2 = var2.MEMBER_PRUNE;
                var1 = var4 === var2;
case 28:
                if(!var1) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                var2 = null;
                var2 = var2 != var5;
                if(!var2) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                var4 = var5.some;
                var3 = function(arg1) {
                    var4 = _closure1_slot24;
                    var3 = _closure3_slot0;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var4.bind(var2)(var3, var1);
                    var1 = !var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var3);
case 32:
                var1 = var2;
case 30:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'renderTitle';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = this;
                var3 = _closure1_slot22;
                var2 = var1.context;
                var5 = undefined;
                var6 = var3.bind(var5)(var2);
                var _closure3_slot0 = var6;
                var1 = var1.props;
                var3 = var1.log;
                var _closure3_slot1 = var3;
                var15 = var3.user;
                var _closure3_slot2 = var15;
                var13 = var3.target;
                var _closure3_slot3 = var13;
                var10 = var3.options;
                var _closure3_slot4 = var10;
                var2 = _closure1_slot2;
                var4 = _closure1_slot3;
                var1 = 15;
                var1 = var4[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.getChangeTitle;
                var9 = var1.bind(var2)(var3);
                var14 = null;
                var2 = var14 != var9;
                var1 = null;
                if(!var2) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                var4 = _closure1_slot20;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 21;
                var2 = var8[var2];
                var2 = var7.bind(var5)(var2);
                var3 = var2.Text;
                var2 = {'style': null, 'accessibilityRole': 'header', 'variant': 'text-md/medium', 'color': 'header-primary'};
                var6 = var6.title;
                var2['style'] = var6;
                var6 = 22;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var8 = var6.intl;
                var7 = var8.format;
                var6 = {};
                var6['user'] = var15;
                var6['target'] = var13;
                var13 = function userHook() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var2 = _closure3_slot2;
                        var4 = null;
                        if(!(var4 == var2)) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                        var2 = _closure3_slot4;
                        var2 = var2.integration_type;
                        if(!(var4 == var2)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var2 = 22;
                        var3 = var8[var2];
                        var6 = undefined;
                        var3 = var7.bind(var6)(var3);
                        var5 = var3.intl;
                        var3 = var5.string;
                        var2 = var8[var2];
                        var2 = var7.bind(var6)(var2);
                        var2 = var2.t;
                        var2 = var2.30mdIy;
                        var2 = var3.bind(var5)(var2);
                        return var2;
case 38:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 18;
                        var2 = var6[var2];
                        var6 = undefined;
                        var7 = var5.bind(var6)(var2);
                        var5 = var7.get;
                        var2 = _closure3_slot4;
                        var2 = var2.integration_type;
                        var5 = var5.bind(var7)(var2);
                        var7 = var4 == var5;
                        var2 = undefined;
                        if(var7) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                        var2 = var5.name;
case 40:
                        if(!(var4 == var2)) { _fun0008_ip = 42; continue _fun0008 }
case 43:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var4 = 22;
                        var5 = var9[var4];
                        var5 = var8.bind(var6)(var5);
                        var7 = var5.intl;
                        var5 = var7.string;
                        var4 = var9[var4];
                        var4 = var8.bind(var6)(var4);
                        var4 = var4.t;
                        var4 = var4.n+olu7;
                        var2 = var5.bind(var7)(var4);
case 42:
                        var5 = _closure1_slot20;
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var3 = 21;
                        var3 = var7[var3];
                        var3 = var4.bind(var6)(var3);
                        var4 = var3.Text;
                        var3 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        var3['children'] = var2;
                        var2 = _closure3_slot4;
                        var7 = var2.integration_type;
                        var2 = 'integration';
                        var2 = var2 + var7;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var2;
case 36:
                        var5 = _closure1_slot21;
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var2 = 21;
                        var2 = var9[var2];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.Text;
                        var2 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        var7 = _closure1_slot1;
                        var6 = 23;
                        var6 = var9[var6];
                        var10 = var7.bind(var4)(var6);
                        var7 = var10.getUserTag;
                        var9 = _closure3_slot2;
                        var6 = {};
                        var11 = 'username';
                        var6['mode'] = var11;
                        var7 = var7.bind(var10)(var9, var6);
                        var6 = new Array(2);
                        var6[0] = var7;
                        var7 = var9.hasUniqueUsername;
                        var7 = var7.bind(var9)();
                        var7 = !var7;
                        if(!var7) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                        var10 = _closure1_slot20;
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var8 = 24;
                        var8 = var11[var8];
                        var8 = var9.bind(var4)(var8);
                        var9 = var8.LegacyText;
                        var8 = {};
                        var11 = _closure3_slot0;
                        var11 = var11.discriminator;
                        var8['style'] = var11;
                        var11 = _closure3_slot2;
                        var12 = var11.discriminator;
                        var11 = '#';
                        var11 = var11 + var12;
                        var8['children'] = var11;
                        var7 = var10.bind(var4)(var9, var8);
case 44:
                        var6[1] = var7;
                        var2['children'] = var6;
                        var1 = _closure3_slot2;
                        var6 = var1.id;
                        var1 = 'user';
                        var1 = var1 + var6;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    }
                };
                var6['userHook'] = var13;
                var13 = function targetHook(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = _closure3_slot1;
                        var3 = var1.targetType;
                        var1 = _closure1_slot15;
                        var1 = var1.USER;
                        if(!(var3 === var1)) { _fun0009_ip = 46; continue _fun0009 }
case 39:
                        var3 = _closure3_slot3;
                        var1 = _closure1_slot12;
                        var1 = var3 instanceof var1;
                        if(var1) { _fun0009_ip = 47; continue _fun0009 }
case 46:
                        var1 = _closure3_slot1;
                        var3 = var1.targetType;
                        var1 = _closure1_slot15;
                        var1 = var1.GUILD;
                        if(!(var3 === var1)) { _fun0009_ip = 33; continue _fun0009 }
case 3:
                        var1 = _closure3_slot3;
                        var3 = 'object';
                        var1 = typeof var1;
                        if(!(var3 === var1)) { _fun0009_ip = 33; continue _fun0009 }
case 48:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 25;
                        var1 = var4[var1];
                        var7 = undefined;
                        var4 = var3.bind(var7)(var1);
                        var3 = var4.isGuildRecord;
                        var1 = _closure3_slot3;
                        var1 = var3.bind(var4)(var1);
                        if(var1) { _fun0009_ip = 49; continue _fun0009 }
case 33:
                        var6 = _closure1_slot20;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 21;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var3.bind(var5)(var1);
                        var4 = var1.Text;
                        var3 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        var1 = arg1;
                        var3['children'] = var1;
                        var1 = arg2;
                        var1 = var6.bind(var5)(var4, var3, var1);
                        _fun0009_ip = 50; continue _fun0009;
case 49:
                        var6 = _closure1_slot20;
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var3 = 21;
                        var3 = var5[var3];
                        var3 = var4.bind(var7)(var3);
                        var5 = var3.Text;
                        var4 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        var3 = _closure3_slot3;
                        var8 = var3.name;
                        var4['children'] = var8;
                        var8 = var3.id;
                        var3 = 'target';
                        var3 = var3 + var8;
                        var1 = var6.bind(var7)(var5, var4, var3);
case 50:
                        _fun0009_ip = 51; continue _fun0009;
case 47:
                        var6 = _closure1_slot21;
                        var4 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var3 = 21;
                        var3 = var10[var3];
                        var5 = undefined;
                        var3 = var4.bind(var5)(var3);
                        var4 = var3.Text;
                        var3 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                        var8 = _closure1_slot1;
                        var7 = 23;
                        var7 = var10[var7];
                        var11 = var8.bind(var5)(var7);
                        var10 = var11.getUserTag;
                        var8 = _closure3_slot3;
                        var7 = {};
                        var12 = 'username';
                        var7['mode'] = var12;
                        var10 = var10.bind(var11)(var8, var7);
                        var7 = new Array(2);
                        var7[0] = var10;
                        var10 = var8.discriminator;
                        var8 = '0';
                        var8 = var8 !== var10;
                        if(!var8) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                        var11 = _closure1_slot20;
                        var10 = _closure1_slot0;
                        var12 = _closure1_slot3;
                        var9 = 24;
                        var9 = var12[var9];
                        var9 = var10.bind(var5)(var9);
                        var10 = var9.LegacyText;
                        var9 = {};
                        var12 = _closure3_slot0;
                        var12 = var12.discriminator;
                        var9['style'] = var12;
                        var12 = _closure3_slot3;
                        var13 = var12.discriminator;
                        var12 = '#';
                        var12 = var12 + var13;
                        var9['children'] = var12;
                        var8 = var11.bind(var5)(var10, var9);
case 52:
                        var7[1] = var8;
                        var3['children'] = var7;
                        var2 = _closure3_slot3;
                        var7 = var2.id;
                        var2 = 'target';
                        var2 = var2 + var7;
                        var1 = var6.bind(var5)(var4, var3, var2);
case 51:
                        return var1;
                    }
                };
                var6['targetHook'] = var13;
                var13 = var10.count;
                var6['count'] = var13;
                var13 = var10.channel;
                if(!(var14 != var13)) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var13 = var10.channel;
                var14 = 'string';
                var13 = typeof var13;
                if(!(var14 !== var13)) { _fun0007_ip = 54; continue _fun0007 }
case 56:
                var14 = _closure1_slot0;
                var15 = _closure1_slot3;
                var13 = 26;
                var13 = var15[var13];
                var17 = var14.bind(var5)(var13);
                var16 = var17.computeChannelName;
                var21 = var10.channel;
                var20 = _closure1_slot14;
                var19 = _closure1_slot13;
                var18 = true;
                var22 = var17;
                var12 = var22[var16](var21, var20, var19, var18, var17);
                _fun0007_ip = 57; continue _fun0007;
case 54:
                var12 = var10.channel;
case 57:
                var6['channel'] = var12;
                var11 = function channelHook(arg1, arg2) {
                    var5 = _closure1_slot20;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 21;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
                    var1 = arg1;
                    var2['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var6['channelHook'] = var11;
                var10 = var10.subtarget;
                var6['subtarget'] = var10;
                var6 = var7.bind(var8)(var9, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 34:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'renderRoleUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arg1;
                var4 = var1.newValue;
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var2 = var1.bind(var2)(var4);
                var1 = null;
                if(!var2) { _fun0010_ip = 24; continue _fun0010 }
case 58:
                var3 = var4.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var5 = _closure1_slot20;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 21;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                    var6 = var1.name;
                    var2['children'] = var6;
                    var1 = var1.id;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'renderPermissionUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var1 = arg1;
                var4 = var1.newValue;
                var1 = global;
                var3 = var1.Array;
                var1 = var3.isArray;
                var3 = var1.bind(var3)(var4);
                var1 = null;
                if(!var3) { _fun0011_ip = 59; continue _fun0011 }
case 60:
                var3 = var4.map;
                var2 = function(arg1) {
                    var5 = arg1;
                    var4 = _closure1_slot20;
                    var2 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var1 = 21;
                    var1 = var8[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Text;
                    var1 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
                    var7 = _closure1_slot2;
                    var6 = 15;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.getStringForPermission;
                    var6 = _closure3_slot0;
                    var6 = var6.props;
                    var6 = var6.log;
                    var6 = var7.bind(var8)(var5, var6);
                    var1['children'] = var6;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'renderChangeDetails';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var2 = arg1;
                var _closure3_slot1 = var2;
                var6 = _closure1_slot22;
                var4 = var1.context;
                var5 = undefined;
                var7 = var6.bind(var5)(var4);
                var _closure3_slot2 = var7;
                var1 = var1.props;
                var4 = var1.log;
                var _closure3_slot3 = var4;
                var6 = var4.changes;
                var1 = null;
                if(!(var1 != var6)) { _fun0012_ip = 33; continue _fun0012 }
case 61:
                var6 = 0;
                var _closure3_slot4 = var6;
                var6 = var4.changes;
                var4 = var6.map;
                var3 = function(arg1, arg2) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var8 = arg1;
                        var2 = _closure1_slot24;
                        var1 = _closure3_slot3;
                        var6 = undefined;
                        var1 = var2.bind(var6)(var1, var8);
                        if(var1) { _fun0013_ip = 62; continue _fun0013 }
case 63:
                        var1 = _closure3_slot3;
                        var2 = var1.action;
                        var1 = _closure1_slot17;
                        var1 = var1.CHANNEL_UPDATE;
                        if(!(var2 !== var1)) { _fun0013_ip = 64; continue _fun0013 }
case 65:
                        var1 = _closure3_slot3;
                        var2 = var1.action;
                        var1 = _closure1_slot17;
                        var1 = var1.CHANNEL_CREATE;
                        if(!(var2 === var1)) { _fun0013_ip = 66; continue _fun0013 }
case 64:
                        var2 = var8.key;
                        var1 = _closure1_slot19;
                        var1 = var1.TYPE;
                        if(!(var2 !== var1)) { _fun0013_ip = 67; continue _fun0013 }
case 66:
                        var1 = _closure3_slot3;
                        var2 = var1.action;
                        var1 = _closure1_slot17;
                        var1 = var1.MEMBER_UPDATE;
                        if(!(var2 === var1)) { _fun0013_ip = 41; continue _fun0013 }
case 68:
                        var2 = var8.key;
                        var1 = _closure1_slot19;
                        var1 = var1.COMMUNICATION_DISABLED_UNTIL;
                        if(!(var2 !== var1)) { _fun0013_ip = 69; continue _fun0013 }
case 41:
                        var1 = _closure3_slot3;
                        var2 = var1.action;
                        var1 = _closure1_slot17;
                        var1 = var1.GUILD_UPDATE;
                        if(!(var2 === var1)) { _fun0013_ip = 70; continue _fun0013 }
case 71:
                        var2 = var8.key;
                        var1 = _closure1_slot19;
                        var1 = var1.OWNER_ID;
                        if(!(var2 !== var1)) { _fun0013_ip = 72; continue _fun0013 }
case 70:
                        var1 = {};
                        var2 = var8.oldValue;
                        var1['oldValue'] = var2;
                        var2 = var8.newValue;
                        var1['newValue'] = var2;
                        var2 = false;
                        var1['transformedValues'] = var2;
                        _fun0013_ip = 73; continue _fun0013;
case 72:
                        var2 = {};
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 23;
                        var9 = var5[var3];
                        var13 = var4.bind(var6)(var9);
                        var12 = var13.getUserTag;
                        var11 = var8.oldValue;
                        var9 = {};
                        var10 = 'username';
                        var9['mode'] = var10;
                        var9 = var12.bind(var13)(var11, var9);
                        var2['oldValue'] = var9;
                        var3 = var5[var3];
                        var9 = var4.bind(var6)(var3);
                        var5 = var9.getUserTag;
                        var4 = var8.newValue;
                        var3 = {};
                        var3['mode'] = var10;
                        var3 = var5.bind(var9)(var4, var3);
                        var2['newValue'] = var3;
                        var3 = true;
                        var2['transformedValues'] = var3;
                        var1 = var2;
case 73:
                        _fun0013_ip = 74; continue _fun0013;
case 69:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var2 = 28;
                        var2 = var4[var2];
                        var3 = var3.bind(var6)(var2);
                        var2 = var8.newValue;
                        var5 = var3.bind(var6)(var2);
                        var2 = {};
                        var3 = var8.oldValue;
                        var2['oldValue'] = var3;
                        var3 = var5.isValid;
                        var3 = var3.bind(var5)();
                        if(var3) { _fun0013_ip = 75; continue _fun0013 }
case 53:
                        var3 = var8.newValue;
                        _fun0013_ip = 76; continue _fun0013;
case 75:
                        var4 = var5.calendar;
                        var3 = var4.bind(var5)();
case 76:
                        var2['newValue'] = var3;
                        var3 = true;
                        var2['transformedValues'] = var3;
                        var1 = var2;
                        _fun0013_ip = 74; continue _fun0013;
case 67:
                        var2 = {};
                        var3 = var8.oldValue;
                        var4 = null;
                        if(!(var4 == var3)) { _fun0013_ip = 77; continue _fun0013 }
case 78:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var5 = 27;
                        var5 = var10[var5];
                        var10 = var9.bind(var6)(var5);
                        var9 = var10.channelTypeString;
                        var5 = {};
                        var11 = var8.oldValue;
                        var5['type'] = var11;
                        var3 = var9.bind(var10)(var5);
case 77:
                        var2['oldValue'] = var3;
                        var3 = var8.newValue;
                        if(!(var4 == var3)) { _fun0013_ip = 79; continue _fun0013 }
case 80:
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var4 = 27;
                        var4 = var9[var4];
                        var9 = var5.bind(var6)(var4);
                        var5 = var9.channelTypeString;
                        var4 = {};
                        var10 = var8.newValue;
                        var4['type'] = var10;
                        var3 = var5.bind(var9)(var4);
case 79:
                        var2['newValue'] = var3;
                        var3 = true;
                        var2['transformedValues'] = var3;
                        var1 = var2;
case 74:
                        var9 = var1.oldValue;
                        var _closure4_slot0 = var9;
                        var19 = var1.newValue;
                        var _closure4_slot1 = var19;
                        var16 = var1.transformedValues;
                        var1 = _closure3_slot3;
                        var2 = var1.action;
                        var1 = _closure1_slot17;
                        var1 = var1.MEMBER_ROLE_UPDATE;
                        if(!(var2 !== var1)) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                        var1 = _closure3_slot3;
                        var2 = var1.targetType;
                        var1 = _closure1_slot15;
                        var1 = var1.ROLE;
                        if(!(var2 !== var1)) { _fun0013_ip = 83; continue _fun0013 }
case 84:
                        var1 = _closure3_slot3;
                        var2 = var1.action;
                        var1 = _closure1_slot17;
                        var1 = var1.CHANNEL_OVERWRITE_CREATE;
                        if(!(var2 !== var1)) { _fun0013_ip = 83; continue _fun0013 }
case 85:
                        var1 = _closure3_slot3;
                        var2 = var1.action;
                        var1 = _closure1_slot17;
                        var1 = var1.CHANNEL_OVERWRITE_UPDATE;
                        var12 = null;
                        if(!(var2 === var1)) { _fun0013_ip = 86; continue _fun0013 }
case 83:
                        var2 = _closure3_slot0;
                        var1 = var2.renderPermissionUpdate;
                        var12 = var1.bind(var2)(var8);
case 86:
                        _fun0013_ip = 87; continue _fun0013;
case 81:
                        var2 = _closure3_slot0;
                        var1 = var2.renderRoleUpdate;
                        var12 = var1.bind(var2)(var8);
case 87:
                        var2 = _closure3_slot1;
                        var1 = var8.key;
                        var2 = var2[var1];
                        var1 = null;
                        var3 = var1 == var2;
                        var5 = undefined;
                        if(var3) { _fun0013_ip = 88; continue _fun0013 }
case 89:
                        var5 = var2.bind(var6)(var8);
case 88:
                        if(!(var1 != var5)) { _fun0013_ip = 90; continue _fun0013 }
case 91:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 22;
                        var2 = var4[var2];
                        var2 = var3.bind(var6)(var2);
                        var4 = var2.intl;
                        var3 = var4.format;
                        var2 = {};
                        var2['oldValue'] = var9;
                        var2['newValue'] = var19;
                        var9 = global;
                        var10 = var9.Array;
                        var9 = var10.isArray;
                        var10 = var9.bind(var10)(var19);
                        var9 = null;
                        if(!var10) { _fun0013_ip = 92; continue _fun0013 }
case 93:
                        var9 = var19.length;
case 92:
                        var2['count'] = var9;
                        var9 = _closure3_slot3;
                        var9 = var9.options;
                        var9 = var9.subtarget;
                        if(!(var1 == var9)) { _fun0013_ip = 94; continue _fun0013 }
case 95:
                        var9 = var8.subtarget;
case 94:
                        var10 = var1 != var9;
                        var8 = null;
                        if(!var10) { _fun0013_ip = 96; continue _fun0013 }
case 97:
                        var8 = var9;
case 96:
                        var2['subtarget'] = var8;
                        var8 = function newColorHook() {
                            var1 = null;
                            return var1;
                        };
                        var2['newColorHook'] = var8;
                        var8 = function newColorsHook(arg1, arg2) {
                            var2 = _closure4_slot1;
                            var8 = var2.primary_color;
                            var2 = _closure4_slot1;
                            var6 = var2.secondary_color;
                            var1 = _closure4_slot1;
                            var2 = var1.tertiary_color;
                            var5 = _closure1_slot20;
                            var4 = _closure1_slot10;
                            var3 = {};
                            var7 = _closure3_slot2;
                            var7 = var7.colorsHook;
                            var3['style'] = var7;
                            var7 = new Array(3);
                            var7[0] = var8;
                            var7[1] = var6;
                            var7[2] = var2;
                            var6 = var7.filter;
                            var8 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 29;
                            var1 = var2[var1];
                            var2 = undefined;
                            var1 = var8.bind(var2)(var1);
                            var1 = var1.isNotNullish;
                            var7 = var6.bind(var7)(var1);
                            var6 = var7.map;
                            var1 = function(arg1, arg2) {
                                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                                    var14 = arg1;
                                    var5 = arg2;
                                    var4 = _closure1_slot21;
                                    var1 = _closure1_slot9;
                                    var3 = var1.Fragment;
                                    var2 = {};
                                    var9 = _closure1_slot20;
                                    var8 = _closure1_slot0;
                                    var6 = _closure1_slot3;
                                    var1 = 21;
                                    var6 = var6[var1];
                                    var1 = undefined;
                                    var6 = var8.bind(var1)(var6);
                                    var8 = var6.Text;
                                    var6 = {};
                                    var10 = 'text-sm/bold';
                                    var6['variant'] = var10;
                                    var10 = 0;
                                    var10 = var5 > var10;
                                    var18 = '';
                                    var17 = var18;
                                    if(!var10) { _fun0014_ip = 98; continue _fun0014 }
case 99:
                                    var17 = ', ';
case 98:
                                    var13 = _closure1_slot0;
                                    var15 = _closure1_slot3;
                                    var12 = 30;
                                    var10 = var15[var12];
                                    var11 = var13.bind(var1)(var10);
                                    var10 = var11.int2hex;
                                    var11 = var10.bind(var11)(var14);
                                    var10 = var11.toUpperCase;
                                    var16 = var10.bind(var11)();
                                    var10 = global;
                                    var10 = var10.HermesInternal;
                                    var11 = var10.concat;
                                    var10 = ' ';
                                    var10 = var11.bind(var18)(var17, var16, var10);
                                    var6['children'] = var10;
                                    var8 = var9.bind(var1)(var8, var6);
                                    var6 = new Array(2);
                                    var6[0] = var8;
                                    var9 = _closure1_slot20;
                                    var8 = _closure1_slot10;
                                    var7 = {};
                                    var10 = _closure3_slot2;
                                    var11 = var10.colorHook;
                                    var10 = new Array(2);
                                    var10[0] = var11;
                                    var11 = {};
                                    var12 = var15[var12];
                                    var13 = var13.bind(var1)(var12);
                                    var12 = var13.int2hex;
                                    var12 = var12.bind(var13)(var14);
                                    var11['backgroundColor'] = var12;
                                    var10[1] = var11;
                                    var7['style'] = var10;
                                    var7 = var9.bind(var1)(var8, var7);
                                    var6[1] = var7;
                                    var2['children'] = var6;
                                    var1 = var4.bind(var1)(var3, var2, var5);
                                    return var1;
                                }
                            };
                            var1 = var6.bind(var7)(var1);
                            var3['children'] = var1;
                            var1 = arg2;
                            var1 = var5.bind(var2)(var4, var3, var1);
                            return var1;
                        };
                        var2['newColorsHook'] = var8;
                        var8 = function oldColorHook() {
                            var1 = null;
                            return var1;
                        };
                        var2['oldColorHook'] = var8;
                        var8 = function oldTagHook(arg1, arg2) {
                            var5 = _closure1_slot20;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 31;
                            var1 = var3[var1];
                            var4 = undefined;
                            var1 = var2.bind(var4)(var1);
                            var3 = var1.AppliedForumTagPill;
                            var2 = {};
                            var1 = _closure4_slot0;
                            var2['tag'] = var1;
                            var1 = _closure3_slot2;
                            var1 = var1.forumTag;
                            var2['containerStyle'] = var1;
                            var1 = arg2;
                            var1 = var5.bind(var4)(var3, var2, var1);
                            return var1;
                        };
                        var2['oldTagHook'] = var8;
                        var8 = function newTagHook(arg1, arg2) {
                            var5 = _closure1_slot20;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 31;
                            var1 = var3[var1];
                            var4 = undefined;
                            var1 = var2.bind(var4)(var1);
                            var3 = var1.AppliedForumTagPill;
                            var2 = {};
                            var1 = _closure4_slot1;
                            var2['tag'] = var1;
                            var1 = _closure3_slot2;
                            var1 = var1.forumTag;
                            var2['containerStyle'] = var1;
                            var1 = arg2;
                            var1 = var5.bind(var4)(var3, var2, var1);
                            return var1;
                        };
                        var2['newTagHook'] = var8;
                        var8 = function oldEmojiHook(arg1, arg2) {
                            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                                var3 = _closure4_slot0;
                                var2 = null;
                                var2 = var2 != var3;
                                var5 = undefined;
                                var6 = undefined;
                                if(!var2) { _fun0015_ip = 100; continue _fun0015 }
case 101:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var2 = 17;
                                var2 = var4[var2];
                                var4 = var3.bind(var5)(var2);
                                var3 = var4.getEmojiURL;
                                var2 = {'id': null, 'animated': false, 'size': 24};
                                var7 = _closure4_slot0;
                                var2['id'] = var7;
                                var6 = var3.bind(var4)(var2);
case 100:
                                var4 = _closure1_slot20;
                                var3 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var2 = 32;
                                var2 = var7[var2];
                                var3 = var3.bind(var5)(var2);
                                var2 = {};
                                var2['src'] = var6;
                                var1 = _closure4_slot0;
                                var2['name'] = var1;
                                var1 = _closure3_slot2;
                                var6 = var1.textEmoji;
                                var2['textEmojiStyle'] = var6;
                                var1 = var1.imageEmoji;
                                var2['fastImageStyle'] = var1;
                                var1 = arg2;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var1;
                            }
                        };
                        var2['oldEmojiHook'] = var8;
                        var8 = function newEmojiHook(arg1, arg2) {
                            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                                var3 = _closure4_slot1;
                                var2 = null;
                                var2 = var2 != var3;
                                var5 = undefined;
                                var6 = undefined;
                                if(!var2) { _fun0016_ip = 100; continue _fun0016 }
case 101:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var2 = 17;
                                var2 = var4[var2];
                                var4 = var3.bind(var5)(var2);
                                var3 = var4.getEmojiURL;
                                var2 = {'id': null, 'animated': false, 'size': 24};
                                var7 = _closure4_slot1;
                                var2['id'] = var7;
                                var6 = var3.bind(var4)(var2);
case 100:
                                var4 = _closure1_slot20;
                                var3 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var2 = 32;
                                var2 = var7[var2];
                                var3 = var3.bind(var5)(var2);
                                var2 = {};
                                var2['src'] = var6;
                                var1 = _closure4_slot1;
                                var2['name'] = var1;
                                var1 = _closure3_slot2;
                                var6 = var1.textEmoji;
                                var2['textEmojiStyle'] = var6;
                                var1 = var1.imageEmoji;
                                var2['fastImageStyle'] = var1;
                                var1 = arg2;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var1;
                            }
                        };
                        var2['newEmojiHook'] = var8;
                        var7 = function applicationHook(arg1, arg2) {
                            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                var5 = _closure1_slot20;
                                var4 = _closure1_slot26;
                                var3 = {};
                                var1 = _closure4_slot0;
                                var8 = null;
                                var6 = var8 == var1;
                                var2 = undefined;
                                var1 = undefined;
                                if(var6) { _fun0017_ip = 102; continue _fun0017 }
case 63:
                                var6 = _closure4_slot0;
                                var1 = var6.application_id;
case 102:
                                if(!(var8 == var1)) { _fun0017_ip = 103; continue _fun0017 }
case 104:
                                var6 = _closure4_slot1;
                                var8 = var8 == var6;
                                var6 = undefined;
                                if(var8) { _fun0017_ip = 105; continue _fun0017 }
case 106:
                                var7 = _closure4_slot1;
                                var6 = var7.application_id;
case 105:
                                var1 = var6;
case 103:
                                var3['applicationId'] = var1;
                                var1 = arg2;
                                var1 = var5.bind(var2)(var4, var3, var1);
                                return var1;
                            }
                        };
                        var2['applicationHook'] = var7;
                        var18 = var3.bind(var4)(var5, var2);
                        if(!(var1 != var18)) { _fun0013_ip = 107; continue _fun0013 }
case 108:
                        var2 = _closure3_slot3;
                        var3 = var2.actionType;
                        var2 = _closure1_slot16;
                        var2 = var2.CREATE;
                        if(!(var2 !== var3)) { _fun0013_ip = 109; continue _fun0013 }
case 110:
                        var2 = _closure1_slot16;
                        var2 = var2.UPDATE;
                        if(!(var2 !== var3)) { _fun0013_ip = 111; continue _fun0013 }
case 112:
                        var2 = _closure1_slot16;
                        var2 = var2.DELETE;
                        var10 = undefined;
                        if(!(var2 === var3)) { _fun0013_ip = 113; continue _fun0013 }
case 114:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var2 = 14;
                        var2 = var4[var2];
                        var2 = var3.bind(var6)(var2);
                        var2 = var2.unsafe_rawColors;
                        var10 = var2.RED_400;
                        _fun0013_ip = 113; continue _fun0013;
case 111:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var2 = 14;
                        var2 = var4[var2];
                        var2 = var3.bind(var6)(var2);
                        var2 = var2.unsafe_rawColors;
                        var10 = var2.YELLOW_300;
                        _fun0013_ip = 113; continue _fun0013;
case 109:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var2 = 14;
                        var2 = var4[var2];
                        var2 = var3.bind(var6)(var2);
                        var2 = var2.unsafe_rawColors;
                        var10 = var2.GREEN_360;
case 113:
                        var2 = _closure3_slot4;
                        var2 = var2 + 1;
                        _closure3_slot4 = var2;
                        var5 = _closure1_slot21;
                        var4 = _closure1_slot10;
                        var3 = {};
                        var8 = _closure3_slot2;
                        var2 = var8.changeRow;
                        var3['style'] = var2;
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var20 = 21;
                        var2 = var2[var20];
                        var2 = var7.bind(var6)(var2);
                        var7 = var2.Text;
                        var2 = {};
                        var9 = 'text-sm/bold';
                        var2['variant'] = var9;
                        var9 = var8.changeNumberText;
                        var8 = new Array(2);
                        var8[0] = var9;
                        var9 = {};
                        var9['color'] = var10;
                        var8[1] = var9;
                        var2['style'] = var8;
                        var9 = _closure3_slot4;
                        var8 = 10;
                        var8 = var9 < var8;
                        var9 = null;
                        if(!var8) { _fun0013_ip = 115; continue _fun0013 }
case 116:
                        var9 = '0';
case 115:
                        var8 = new Array(3);
                        var8[0] = var9;
                        var9 = _closure3_slot4;
                        var8[1] = var9;
                        var9 = ' —';
                        var8[2] = var9;
                        var2['children'] = var8;
                        var7 = var5.bind(var6)(var7, var2);
                        var2 = new Array(2);
                        var2[0] = var7;
                        var9 = _closure1_slot21;
                        var8 = _closure1_slot10;
                        var7 = {};
                        var11 = _closure3_slot2;
                        var10 = var11.changeItemContent;
                        var7['style'] = var10;
                        var10 = {};
                        var11 = var11.changeItemTextContainer;
                        var10['style'] = var11;
                        var15 = _closure1_slot20;
                        var13 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var11 = var11[var20];
                        var11 = var13.bind(var6)(var11);
                        var13 = var11.Text;
                        var11 = {};
                        var20 = 'text-sm/normal';
                        var11['variant'] = var20;
                        var11['children'] = var18;
                        var13 = var15.bind(var6)(var13, var11);
                        var11 = new Array(2);
                        var11[0] = var13;
                        var15 = var1 != var19;
                        var13 = null;
                        if(!var15) { _fun0013_ip = 117; continue _fun0013 }
case 118:
                        var15 = true;
                        var13 = null;
                        if(!(var15 !== var16)) { _fun0013_ip = 117; continue _fun0013 }
case 119:
                        var16 = _closure1_slot20;
                        var15 = _closure1_slot10;
                        var14 = {};
                        var17 = _closure3_slot2;
                        var18 = var17.colorHook;
                        var17 = new Array(2);
                        var17[0] = var18;
                        var18 = {};
                        var18['backgroundColor'] = var19;
                        var17[1] = var18;
                        var14['style'] = var17;
                        var13 = var16.bind(var6)(var15, var14);
case 117:
                        var11[1] = var13;
                        var10['children'] = var11;
                        var11 = var9.bind(var6)(var8, var10);
                        var10 = new Array(2);
                        var10[0] = var11;
                        var13 = var1 != var12;
                        var11 = null;
                        if(!var13) { _fun0013_ip = 120; continue _fun0013 }
case 121:
                        var11 = var12;
case 120:
                        var10[1] = var11;
                        var7['children'] = var10;
                        var7 = var9.bind(var6)(var8, var7);
                        var2[1] = var7;
                        var3['children'] = var2;
                        var2 = arg2;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var2;
case 107:
                        return var1;
case 90:
                        return var1;
case 62:
                        var1 = null;
                        return var1;
                    }
                };
                var6 = var4.bind(var6)(var3);
                var4 = _closure1_slot20;
                var3 = _closure1_slot10;
                var2 = {};
                var7 = var7.changesContainer;
                var2['style'] = var7;
                var2['children'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var2;
case 33:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'renderChangeSummary';
        var5['key'] = var7;
        var7 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = this;
                var2 = var3.props;
                var1 = var2.expanded;
                var2 = var2.log;
                if(!var1) { _fun0018_ip = 122; continue _fun0018 }
case 123:
                var5 = var2.targetType;
                var4 = _closure1_slot15;
                var4 = var4.GUILD;
                if(!(var4 !== var5)) { _fun0018_ip = 124; continue _fun0018 }
case 26:
                var4 = _closure1_slot15;
                var4 = var4.CHANNEL;
                if(!(var4 !== var5)) { _fun0018_ip = 125; continue _fun0018 }
case 23:
                var4 = _closure1_slot15;
                var4 = var4.CHANNEL_OVERWRITE;
                if(!(var4 !== var5)) { _fun0018_ip = 125; continue _fun0018 }
case 126:
                var4 = _closure1_slot15;
                var4 = var4.USER;
                if(!(var4 !== var5)) { _fun0018_ip = 127; continue _fun0018 }
case 128:
                var4 = _closure1_slot15;
                var4 = var4.ROLE;
                if(!(var4 !== var5)) { _fun0018_ip = 129; continue _fun0018 }
case 130:
                var4 = _closure1_slot15;
                var4 = var4.INVITE;
                if(!(var4 !== var5)) { _fun0018_ip = 131; continue _fun0018 }
case 132:
                var4 = _closure1_slot15;
                var4 = var4.WEBHOOK;
                if(!(var4 !== var5)) { _fun0018_ip = 133; continue _fun0018 }
case 134:
                var4 = _closure1_slot15;
                var4 = var4.EMOJI;
                if(!(var4 !== var5)) { _fun0018_ip = 135; continue _fun0018 }
case 136:
                var4 = _closure1_slot15;
                var4 = var4.INTEGRATION;
                if(!(var4 !== var5)) { _fun0018_ip = 137; continue _fun0018 }
case 70:
                var4 = _closure1_slot15;
                var4 = var4.STAGE_INSTANCE;
                if(!(var4 !== var5)) { _fun0018_ip = 138; continue _fun0018 }
case 139:
                var4 = _closure1_slot15;
                var4 = var4.GUILD_SCHEDULED_EVENT;
                if(!(var4 !== var5)) { _fun0018_ip = 140; continue _fun0018 }
case 141:
                var4 = _closure1_slot15;
                var4 = var4.GUILD_SCHEDULED_EVENT_EXCEPTION;
                if(!(var4 !== var5)) { _fun0018_ip = 88; continue _fun0018 }
case 142:
                var4 = _closure1_slot15;
                var4 = var4.THREAD;
                if(!(var4 !== var5)) { _fun0018_ip = 143; continue _fun0018 }
case 144:
                var4 = _closure1_slot15;
                var4 = var4.STICKER;
                if(!(var4 !== var5)) { _fun0018_ip = 85; continue _fun0018 }
case 145:
                var4 = _closure1_slot15;
                var4 = var4.APPLICATION_COMMAND;
                if(!(var4 !== var5)) { _fun0018_ip = 146; continue _fun0018 }
case 147:
                var4 = _closure1_slot15;
                var4 = var4.AUTO_MODERATION_RULE;
                if(!(var4 !== var5)) { _fun0018_ip = 148; continue _fun0018 }
case 149:
                var4 = _closure1_slot15;
                var4 = var4.GUILD_SOUNDBOARD;
                if(!(var4 !== var5)) { _fun0018_ip = 150; continue _fun0018 }
case 73:
                var4 = _closure1_slot15;
                var4 = var4.VOICE_CHANNEL_STATUS;
                if(!(var4 !== var5)) { _fun0018_ip = 151; continue _fun0018 }
case 152:
                var4 = _closure1_slot15;
                var4 = var4.GUILD_MEMBER_VERIFICATION;
                if(!(var4 !== var5)) { _fun0018_ip = 153; continue _fun0018 }
case 154:
                var4 = _closure1_slot15;
                var4 = var4.GUILD_PROFILE;
                if(!(var4 !== var5)) { _fun0018_ip = 155; continue _fun0018 }
case 122:
                var4 = null;
                return var4;
case 155:
                var5 = var3.renderChangeDetails;
                var7 = _closure1_slot2;
                var6 = _closure1_slot3;
                var4 = 15;
                var6 = var6[var4];
                var4 = undefined;
                var6 = var7.bind(var4)(var6);
                var4 = var6.GuildProfileChangeStrings;
                var4 = var4.bind(var6)();
                var4 = var5.bind(var3)(var4);
                return var4;
case 153:
                var5 = var3.renderChangeDetails;
                var7 = _closure1_slot2;
                var6 = _closure1_slot3;
                var4 = 15;
                var6 = var6[var4];
                var4 = undefined;
                var6 = var7.bind(var4)(var6);
                var4 = var6.MemberVerificationChangeStrings;
                var4 = var4.bind(var6)();
                var4 = var5.bind(var3)(var4);
                return var4;
case 151:
                var5 = var3.renderChangeDetails;
                var7 = _closure1_slot2;
                var6 = _closure1_slot3;
                var4 = 15;
                var6 = var6[var4];
                var4 = undefined;
                var6 = var7.bind(var4)(var6);
                var4 = var6.VoiceChannelStatusStrings;
                var4 = var4.bind(var6)();
                var4 = var5.bind(var3)(var4);
                return var4;
case 150:
                var5 = var3.renderChangeDetails;
                var7 = _closure1_slot2;
                var6 = _closure1_slot3;
                var4 = 15;
                var6 = var6[var4];
                var4 = undefined;
                var6 = var7.bind(var4)(var6);
                var4 = var6.GuildSoundboardChangeStrings;
                var4 = var4.bind(var6)();
                var4 = var5.bind(var3)(var4);
                return var4;
case 148:
                var5 = var3.renderChangeDetails;
                var7 = _closure1_slot2;
                var6 = _closure1_slot3;
                var4 = 15;
                var6 = var6[var4];
                var4 = undefined;
                var6 = var7.bind(var4)(var6);
                var4 = var6.AutoModerationRuleChangeStrings;
                var4 = var4.bind(var6)();
                var4 = var5.bind(var3)(var4);
                return var4;
case 146:
                var4 = var3.renderChangeDetails;
                var7 = _closure1_slot2;
                var6 = _closure1_slot3;
                var5 = 15;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.CommandPermissionChangeStrings;
                var2 = var2.changes;
                var2 = var5.bind(var6)(var2);
                var2 = var4.bind(var3)(var2);
                return var2;
case 85:
                var4 = var3.renderChangeDetails;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 15;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.StickerChangeStrings;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                return var2;
case 143:
                var4 = var3.renderChangeDetails;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 15;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.ThreadChangeStrings;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                return var2;
case 88:
                var4 = var3.renderChangeDetails;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 15;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.GuildScheduledEventExceptionChangeStrings;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                return var2;
case 140:
                var4 = var3.renderChangeDetails;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 15;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.GuildScheduledEventChangeStrings;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                return var2;
case 138:
                var4 = var3.renderChangeDetails;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 15;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.StageInstanceChangeStrings;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                return var2;
case 137:
                var4 = var3.renderChangeDetails;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 15;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.IntegrationChangeStrings;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                return var2;
case 135:
                var4 = var3.renderChangeDetails;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 15;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.EmojiChangeStrings;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                return var2;
case 133:
                var4 = var3.renderChangeDetails;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 15;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.WebhookChangeStrings;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                return var2;
case 131:
                var4 = var3.renderChangeDetails;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 15;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.InviteChangeStrings;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                return var2;
case 129:
                var4 = var3.renderChangeDetails;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 15;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.RoleChangeStrings;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                return var2;
case 127:
                var4 = var3.renderChangeDetails;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 15;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.UserChangeStrings;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                return var2;
case 125:
                var4 = var3.renderChangeDetails;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 15;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.ChannelChangeStrings;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var3)(var2);
                return var2;
case 124:
                var2 = var3.renderChangeDetails;
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var1 = 15;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var1 = var4.GuildChangeStrings;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var8 = this;
                var2 = _closure1_slot22;
                var1 = var8.context;
                var4 = undefined;
                var19 = var2.bind(var4)(var1);
                var2 = var8.props;
                var31 = var2.log;
                var _closure3_slot0 = var31;
                var7 = var2.expanded;
                var1 = var2.onHeaderClick;
                var30 = var2.guildId;
                var3 = var2.channel;
                var _closure3_slot1 = var3;
                var9 = var2.containerStyle;
                var29 = var2.theme;
                var15 = var31.user;
                var _closure3_slot2 = var15;
                var2 = var8.hasChangesToRender;
                var14 = var2.bind(var8)();
                var3 = var31.timestampStart;
                var2 = var3.calendar;
                var6 = var2.bind(var3)();
                var3 = var31.timestampEnd;
                var2 = var3.calendar;
                var11 = var2.bind(var3)();
                if(!(var6 !== var11)) { _fun0019_ip = 156; continue _fun0019 }
case 157:
                var5 = _closure1_slot21;
                var3 = _closure1_slot0;
                var10 = _closure1_slot3;
                var2 = 24;
                var2 = var10[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.LegacyText;
                var2 = {};
                var10 = var19.timestamp;
                var2['style'] = var10;
                var10 = new Array(3);
                var10[0] = var6;
                var12 = '—';
                var10[1] = var12;
                var10[2] = var11;
                var2['children'] = var10;
                var18 = var5.bind(var4)(var3, var2);
                _fun0019_ip = 158; continue _fun0019;
case 156:
                var5 = _closure1_slot20;
                var3 = _closure1_slot0;
                var10 = _closure1_slot3;
                var2 = 24;
                var2 = var10[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.LegacyText;
                var2 = {};
                var10 = var19.timestamp;
                var2['style'] = var10;
                var2['children'] = var6;
                var18 = var5.bind(var4)(var3, var2);
case 158:
                if(var14) { _fun0019_ip = 50; continue _fun0019 }
case 159:
                var1 = _closure1_slot18;
case 50:
                var _closure3_slot3 = var1;
                var6 = null;
                var20 = null;
                if(!var7) { _fun0019_ip = 160; continue _fun0019 }
case 161:
                var20 = var19.rotate90;
case 160:
                var3 = _closure1_slot21;
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 33;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Card;
                var1 = {};
                var5 = false;
                var1['accessible'] = var5;
                var10 = var19.container;
                var5 = new Array(2);
                var5[0] = var10;
                var5[1] = var9;
                var1['style'] = var5;
                var5 = 'secondary';
                if(!var7) { _fun0019_ip = 154; continue _fun0019 }
case 162:
                var5 = 'primary';
case 154:
                var1['variant'] = var5;
                var5 = 'none';
                if(!var7) { _fun0019_ip = 163; continue _fun0019 }
case 164:
                var5 = 'strong';
case 163:
                var1['border'] = var5;
                var5 = function onPress() {
                    var3 = _closure3_slot3;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['onPress'] = var5;
                var10 = _closure1_slot21;
                var9 = _closure1_slot10;
                var5 = {};
                var11 = var19.rowContainer;
                var5['style'] = var11;
                var16 = _closure1_slot20;
                var12 = _closure1_slot1;
                var28 = _closure1_slot3;
                var11 = 34;
                var11 = var28[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var21 = var31.action;
                var11['action'] = var21;
                var12 = var16.bind(var4)(var12, var11);
                var11 = new Array(4);
                var11[0] = var12;
                var24 = _closure1_slot20;
                var27 = _closure1_slot0;
                var22 = 35;
                var12 = var28[var22];
                var12 = var27.bind(var4)(var12);
                var23 = var12.PressableOpacity;
                var16 = {};
                var21 = 'button';
                var16['accessibilityRole'] = var21;
                var12 = 22;
                var25 = var28[var12];
                var25 = var27.bind(var4)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var12 = var28[var12];
                var12 = var27.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.iXAna2;
                var12 = var25.bind(var26)(var12);
                var16['accessibilityLabel'] = var12;
                var25 = var6 == var15;
                var12 = undefined;
                if(var25) { _fun0019_ip = 165; continue _fun0019 }
case 166:
                var12 = var15.username;
case 165:
                var16['accessibilityHint'] = var12;
                var12 = function onPress() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 36;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.hideActionSheet;
                        var3 = var3.bind(var4)();
                        var5 = _closure3_slot2;
                        var3 = null;
                        if(!(var3 != var5)) { _fun0020_ip = 66; continue _fun0020 }
case 46:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var2 = 37;
                        var2 = var5[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var5 = _closure3_slot2;
                        var5 = var5.id;
                        var2['userId'] = var5;
                        var4 = _closure3_slot1;
                        var4 = var4.id;
                        var2['channelId'] = var4;
                        var2 = var3.bind(var1)(var2);
case 66:
                        return var1;
                    }
                };
                var16['onPress'] = var12;
                var27 = _closure1_slot20;
                var25 = _closure1_slot1;
                var12 = _closure1_slot3;
                var28 = 38;
                var15 = var12[var28];
                var26 = var25.bind(var4)(var15);
                var25 = {};
                var15 = var19.avatar;
                var25['style'] = var15;
                var15 = _closure1_slot25;
                var15 = var15.bind(var4)(var29, var31, var30);
                var25['source'] = var15;
                var15 = _closure1_slot0;
                var28 = var12[var28];
                var28 = var15.bind(var4)(var28);
                var28 = var28.AvatarSizes;
                var28 = var28.SMALL;
                var25['size'] = var28;
                var25 = var27.bind(var4)(var26, var25);
                var16['children'] = var25;
                var16 = var24.bind(var4)(var23, var16);
                var11[1] = var16;
                var16 = _closure1_slot21;
                var12 = var12[var22];
                var12 = var15.bind(var4)(var12);
                var15 = var12.PressableOpacity;
                var12 = {};
                var12['accessibilityRole'] = var21;
                var21 = {};
                var21['expanded'] = var7;
                var22 = !var14;
                var21['disabled'] = var22;
                var12['accessibilityState'] = var21;
                var17 = function onPress() {
                    var3 = _closure3_slot3;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var12['onPress'] = var17;
                var17 = var19.titleContainer;
                var12['style'] = var17;
                var17 = !var14;
                var12['disabled'] = var17;
                var17 = var8.renderTitle;
                var21 = var17.bind(var8)();
                var17 = new Array(2);
                var17[0] = var21;
                var17[1] = var18;
                var12['children'] = var17;
                var12 = var16.bind(var4)(var15, var12);
                var11[2] = var12;
                var12 = null;
                if(!var14) { _fun0019_ip = 167; continue _fun0019 }
case 140:
                var15 = _closure1_slot20;
                var17 = _closure1_slot1;
                var18 = _closure1_slot3;
                var16 = 39;
                var13 = var18[var16];
                var14 = var17.bind(var4)(var13);
                var13 = {};
                var21 = var19.arrow;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var20;
                var13['style'] = var19;
                var16 = var18[var16];
                var16 = var17.bind(var4)(var16);
                var16 = var16.Sizes;
                var16 = var16.CUSTOM;
                var13['size'] = var16;
                var16 = 40;
                var16 = var18[var16];
                var16 = var17.bind(var4)(var16);
                var13['source'] = var16;
                var12 = var15.bind(var4)(var14, var13);
case 167:
                var11[3] = var12;
                var5['children'] = var11;
                var9 = var10.bind(var4)(var9, var5);
                var5 = new Array(2);
                var5[0] = var9;
                var6 = null;
                if(!var7) { _fun0019_ip = 168; continue _fun0019 }
case 169:
                var7 = var8.renderChangeSummary;
                var6 = var7.bind(var8)();
case 168:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var7);
    var7 = 41;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.ThemeContext;
    var4['contextType'] = var7;
    var7 = 42;
    var7 = var6[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.connectStores;
    var7 = new Array(1);
    var7[0] = var10;
    var2 = function() {
        var1 = {};
        var2 = _closure1_slot11;
        var2 = var2.theme;
        var1['theme'] = var2;
        return var1;
    };
    var2 = var8.bind(var9)(var7, var2);
    var2 = var2.bind(var1)(var4);
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/audit_log/native/AuditLog.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
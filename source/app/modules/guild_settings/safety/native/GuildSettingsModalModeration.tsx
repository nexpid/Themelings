// app/modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
            _closure1_slot21 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot8 = var4;
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.GuildFeatures;
    var _closure1_slot11 = var8;
    var8 = var7.HelpdeskArticles;
    var _closure1_slot12 = var8;
    var8 = var7.Permissions;
    var _closure1_slot13 = var8;
    var7 = var7.GuildNSFWContentLevel;
    var _closure1_slot14 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.TitleStyleType;
    var _closure1_slot15 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot16 = var8;
    var8 = var7.jsxs;
    var _closure1_slot17 = var8;
    var7 = var7.Fragment;
    var _closure1_slot18 = var7;
    var7 = function GuildSettingsOwnerConfiguredContentLevel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.guild;
            var8 = var2.guildId;
            var5 = var1.nsfwLevel;
            var3 = null;
            if(!(var3 == var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot14;
            var5 = var2.DEFAULT;
case 6:
            var11 = var1.ownerConfiguredContentLevel;
            if(!(var3 == var11)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = _closure1_slot14;
            var11 = var1.DEFAULT;
case 8:
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var1 = var7[var1];
            var6 = undefined;
            var2 = var4.bind(var6)(var1);
            var1 = var2.useUserIsTeen;
            var2 = var1.bind(var2)();
            var1 = 12;
            var1 = var7[var1];
            var7 = var4.bind(var6)(var1);
            var4 = var7.useIsGuildContentLevelSettingEnabled;
            var1 = {};
            var1['guildId'] = var8;
            var8 = 'guild-settings-modal-moderation';
            var1['location'] = var8;
            var4 = var4.bind(var7)(var1);
            var1 = _closure1_slot14;
            var1 = var1.AGE_RESTRICTED;
            var8 = var5 === var1;
            if(!var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = _closure1_slot14;
            var1 = var1.AGE_RESTRICTED;
            var8 = var11 !== var1;
case 10:
            var9 = _closure1_slot8;
            var7 = var9.useCallback;
            var5 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.updateGuild;
                    var2 = {};
                    var6 = _closure1_slot14;
                    var5 = arg1;
                    if(var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                    var5 = var6.DEFAULT;
                    _fun0003_ip = 14; continue _fun0003;
case 12:
                    var5 = var6.AGE_RESTRICTED;
case 14:
                    var2['ownerConfiguredContentLevel'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = new Array(0);
            var9 = var7.bind(var9)(var5, var1);
            var1 = null;
            if(!var4) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = null;
            if(var2) { _fun0002_ip = 15; continue _fun0002 }
case 17:
            var5 = _closure1_slot16;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 14;
            var3 = var16[var2];
            var3 = var15.bind(var6)(var3);
            var4 = var3.FormSection;
            var3 = {};
            var12 = 15;
            var7 = var16[var12];
            var7 = var15.bind(var6)(var7);
            var14 = var7.intl;
            var13 = var14.string;
            var7 = var16[var12];
            var7 = var15.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.YJlvBA;
            var7 = var13.bind(var14)(var7);
            var3['title'] = var7;
            var7 = var16[var2];
            var7 = var15.bind(var6)(var7);
            var14 = var7.FormHint;
            var13 = {};
            var7 = var16[var12];
            var7 = var15.bind(var6)(var7);
            var19 = var7.intl;
            var18 = var19.format;
            var7 = var16[var12];
            var7 = var15.bind(var6)(var7);
            var7 = var7.t;
            var17 = var7.iyQQ6+;
            var7 = {};
            var21 = _closure1_slot1;
            var20 = 16;
            var20 = var16[var20];
            var22 = var21.bind(var6)(var20);
            var21 = var22.getArticleURL;
            var20 = _closure1_slot12;
            var20 = var20.NSFW_SERVER_AGE_RESTRICTION;
            var20 = var21.bind(var22)(var20);
            var7['helpArticleLink'] = var20;
            var7 = var18.bind(var19)(var17, var7);
            var13['children'] = var7;
            var7 = 'filter-hint';
            var7 = var5.bind(var6)(var14, var13, var7);
            var3['hint'] = var7;
            var2 = var16[var2];
            var2 = var15.bind(var6)(var2);
            var7 = var2.FormSwitchRow;
            var2 = {};
            var13 = var16[var12];
            var13 = var15.bind(var6)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var12 = var16[var12];
            var12 = var15.bind(var6)(var12);
            var12 = var12.t;
            var12 = var12.N9xEJC;
            var12 = var13.bind(var14)(var12);
            var2['label'] = var12;
            var10 = _closure1_slot14;
            var10 = var10.AGE_RESTRICTED;
            var10 = var11 === var10;
            var2['value'] = var10;
            var2['onValueChange'] = var9;
            var2['disabled'] = var8;
            var2 = var5.bind(var6)(var7, var2);
            var3['children'] = var2;
            var2 = 'filter-section';
            var1 = var5.bind(var6)(var4, var3, var2);
case 15:
            return var1;
        }
    };
    var _closure1_slot19 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function GuildSettingsModalModeration(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot21;
                var1 = var1.bind(var4)();
                if(var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0004_ip = 20; continue _fun0004;
case 18:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 20:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var6 = var1.guild;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.saveGuild;
                    var3 = var6.id;
                    var2 = {};
                    var7 = var6.verificationLevel;
                    var2['verificationLevel'] = var7;
                    var7 = var6.explicitContentFilter;
                    var2['explicitContentFilter'] = var7;
                    var6 = var6.ownerConfiguredContentLevel;
                    var2['ownerConfiguredContentLevel'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleSaveChanges'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var1 = var2.updateNavigation;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.updateNavigation;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'updateNavigation';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var1 = var1.props;
                var7 = var1.submitting;
                var6 = var1.hasChanges;
                var3 = var1.navigation;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var4 = var2.submitting;
                var1 = var7 === var4;
case 21:
                if(!var1) { _fun0005_ip = 23; continue _fun0005 }
case 14:
                var2 = var2.hasChanges;
                var1 = var6 === var2;
case 23:
                if(var1) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var2 = var3.setOptions;
                var1 = {};
                var8 = undefined;
                if(!var7) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var8 = function() {
                    var1 = null;
                    return var1;
                };
case 26:
                var1['headerLeft'] = var8;
                if(var7) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var4 = undefined;
                if(!var6) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var4 = function() {
                    var4 = _closure1_slot16;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 18;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = _closure3_slot0;
                    var5 = var5.handleSaveChanges;
                    var1['onPress'] = var5;
                    var5 = 15;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.R3BPHx;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
case 30:
                _fun0005_ip = 32; continue _fun0005;
case 28:
                var4 = function() {
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.HeaderSubmittingIndicator;
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
case 32:
                var1['headerRight'] = var4;
                var1 = var2.bind(var3)(var1);
case 24:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'renderVerificationLevelSection';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = var1.props;
            var3 = var1.guild;
            var _closure3_slot1 = var3;
            var1 = new Array(0);
            var _closure3_slot2 = var1;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 19;
            var4 = var10[var4];
            var5 = undefined;
            var6 = var9.bind(var5)(var4);
            var4 = var6.generateVerificationLevelOptions;
            var11 = var3.features;
            var8 = var11.has;
            var3 = _closure1_slot11;
            var3 = var3.COMMUNITY;
            var3 = var8.bind(var11)(var3);
            var4 = var4.bind(var6)(var3);
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var16 = var1.name;
                    var8 = var1.desc;
                    var19 = var1.color;
                    var9 = var1.value;
                    var _closure4_slot0 = var9;
                    var7 = var1.disabled;
                    var5 = _closure3_slot2;
                    var4 = var5.push;
                    var13 = _closure1_slot16;
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 14;
                    var11 = var14[var10];
                    var1 = undefined;
                    var11 = var15.bind(var1)(var11);
                    var12 = var11.FormRow;
                    var11 = {};
                    var14 = var14[var10];
                    var14 = var15.bind(var1)(var14);
                    var14 = var14.FormRow;
                    var15 = var14.Label;
                    var14 = {};
                    var17 = null;
                    var18 = var17 != var19;
                    if(!var18) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var18 = {};
                    var18['color'] = var19;
                    var17 = var18;
case 33:
                    var14['style'] = var17;
                    var14['text'] = var16;
                    var14 = var13.bind(var1)(var15, var14);
                    var11['label'] = var14;
                    var11['subLabel'] = var8;
                    var3 = function onPress() {
                        var3 = _closure3_slot0;
                        var2 = var3.handleVerificationLevelChange;
                        var1 = _closure4_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var11['onPress'] = var3;
                    var3 = _closure3_slot0;
                    var3 = var3.props;
                    var3 = var3.canManageGuild;
                    var3 = !var3;
                    if(var3) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                    var3 = var7;
case 35:
                    var11['disabled'] = var3;
                    var3 = 'radio';
                    var11['accessibilityRole'] = var3;
                    var3 = {};
                    var14 = _closure3_slot1;
                    var6 = var14.verificationLevel;
                    var6 = var9 === var6;
                    var3['selected'] = var6;
                    var11['accessibilityState'] = var3;
                    var8 = _closure1_slot16;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = var6[var10];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.FormRow;
                    var3 = var2.Radio;
                    var2 = {};
                    var14 = var14.verificationLevel;
                    var14 = var9 === var14;
                    var2['selected'] = var14;
                    var2 = var8.bind(var1)(var3, var2);
                    var11['leading'] = var2;
                    var2 = global;
                    var3 = var2.HermesInternal;
                    var14 = var3.concat;
                    var3 = 'level-';
                    var3 = var14.bind(var3)(var9);
                    var3 = var13.bind(var1)(var12, var11, var3);
                    var6 = var6[var10];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.FormDivider;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = 'level-divider-';
                    var6 = var6.bind(var2)(var9);
                    var2 = {};
                    var2 = var8.bind(var1)(var7, var2, var6);
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var2 = var1.pop;
            var2 = var2.bind(var1)();
            var4 = _closure1_slot16;
            var6 = 14;
            var2 = var10[var6];
            var2 = var9.bind(var5)(var2);
            var3 = var2.FormSection;
            var2 = {};
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var12 = var6.FormHint;
            var11 = {};
            var6 = 15;
            var8 = var10[var6];
            var8 = var9.bind(var5)(var8);
            var15 = var8.intl;
            var14 = var15.format;
            var8 = var10[var6];
            var8 = var9.bind(var5)(var8);
            var8 = var8.t;
            var13 = var8.iuRk2t;
            var8 = {};
            var8 = var14.bind(var15)(var13, var8);
            var11['children'] = var8;
            var8 = 'level-hint';
            var8 = var4.bind(var5)(var12, var11, var8);
            var2['hint'] = var8;
            var7 = _closure1_slot15;
            var7 = var7.ANDROID_NO_BORDER;
            var2['titleStyleType'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var5)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.DpRdYG;
            var6 = var7.bind(var8)(var6);
            var2['title'] = var6;
            var2['children'] = var1;
            var1 = 'level-section';
            var2 = var4.bind(var5)(var3, var2, var1);
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'renderExplicitContentFilter';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = var1.props;
            var3 = var1.guild;
            var _closure3_slot1 = var3;
            var1 = new Array(0);
            var _closure3_slot2 = var1;
            var9 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 19;
            var4 = var15[var4];
            var5 = undefined;
            var6 = var9.bind(var5)(var4);
            var4 = var6.generateContentFilterOptions;
            var8 = var3.features;
            var7 = var8.has;
            var3 = _closure1_slot11;
            var3 = var3.COMMUNITY;
            var3 = var7.bind(var8)(var3);
            var4 = var4.bind(var6)(var3);
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = arg1;
                    var14 = var1.name;
                    var8 = var1.desc;
                    var9 = var1.value;
                    var _closure4_slot0 = var9;
                    var7 = var1.disabled;
                    var5 = _closure3_slot2;
                    var4 = var5.push;
                    var13 = _closure1_slot16;
                    var12 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var10 = 14;
                    var11 = var1[var10];
                    var1 = undefined;
                    var11 = var12.bind(var1)(var11);
                    var12 = var11.FormRow;
                    var11 = {};
                    var11['label'] = var14;
                    var11['subLabel'] = var8;
                    var3 = function onPress() {
                        var3 = _closure3_slot0;
                        var2 = var3.handleExplicitContentFilterChange;
                        var1 = _closure4_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var11['onPress'] = var3;
                    var3 = _closure3_slot0;
                    var3 = var3.props;
                    var3 = var3.canManageGuild;
                    var3 = !var3;
                    if(var3) { _fun0007_ip = 37; continue _fun0007 }
case 20:
                    var3 = var7;
case 37:
                    var11['disabled'] = var3;
                    var3 = 'radio';
                    var11['accessibilityRole'] = var3;
                    var3 = {};
                    var14 = _closure3_slot1;
                    var6 = var14.explicitContentFilter;
                    var6 = var9 === var6;
                    var3['selected'] = var6;
                    var11['accessibilityState'] = var3;
                    var8 = _closure1_slot16;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = var6[var10];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.FormRow;
                    var3 = var2.Radio;
                    var2 = {};
                    var14 = var14.explicitContentFilter;
                    var14 = var9 === var14;
                    var2['selected'] = var14;
                    var2 = var8.bind(var1)(var3, var2);
                    var11['leading'] = var2;
                    var2 = global;
                    var3 = var2.HermesInternal;
                    var14 = var3.concat;
                    var3 = 'filter-';
                    var3 = var14.bind(var3)(var9);
                    var3 = var13.bind(var1)(var12, var11, var3);
                    var6 = var6[var10];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.FormDivider;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var2 = 'filter-divider-';
                    var6 = var6.bind(var2)(var9);
                    var2 = {};
                    var2 = var8.bind(var1)(var7, var2, var6);
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            var2 = var1.pop;
            var2 = var2.bind(var1)();
            var4 = _closure1_slot16;
            var7 = 14;
            var2 = var15[var7];
            var2 = var9.bind(var5)(var2);
            var3 = var2.FormSection;
            var2 = {};
            var6 = 15;
            var8 = var15[var6];
            var8 = var9.bind(var5)(var8);
            var11 = var8.intl;
            var10 = var11.string;
            var8 = var15[var6];
            var8 = var9.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.bPgfJy;
            var8 = var10.bind(var11)(var8);
            var2['title'] = var8;
            var7 = var15[var7];
            var7 = var9.bind(var5)(var7);
            var8 = var7.FormHint;
            var7 = {};
            var10 = var15[var6];
            var10 = var9.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var6 = var15[var6];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var9 = var6.BI4ukJ;
            var6 = {};
            var14 = _closure1_slot1;
            var13 = 16;
            var13 = var15[var13];
            var14 = var14.bind(var5)(var13);
            var13 = var14.getArticleURL;
            var12 = _closure1_slot12;
            var12 = var12.SAFE_DIRECT_MESSAGING;
            var12 = var13.bind(var14)(var12);
            var6['helpdeskArticle'] = var12;
            var6 = var10.bind(var11)(var9, var6);
            var7['children'] = var6;
            var6 = 'filter-hint';
            var6 = var4.bind(var5)(var8, var7, var6);
            var2['hint'] = var6;
            var2['children'] = var1;
            var1 = 'filter-section';
            var2 = var4.bind(var5)(var3, var2, var1);
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var11 = this;
                var1 = var11.props;
                var9 = var1.canManageGuild;
                var14 = var1.guild;
                var13 = var1.hasChanges;
                var4 = _closure1_slot17;
                var3 = _closure1_slot18;
                var2 = {};
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 14;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var7.bind(var1)(var5);
                var7 = var5.Form;
                var5 = {};
                var8 = var11.props;
                var8 = var8.contentContainerStyle;
                var5['contentContainerStyle'] = var8;
                var8 = var11.renderVerificationLevelSection;
                var10 = var8.bind(var11)();
                var8 = new Array(3);
                var8[0] = var10;
                var10 = var11.renderExplicitContentFilter;
                var10 = var10.bind(var11)();
                var8[1] = var10;
                if(!var9) { _fun0008_ip = 38; continue _fun0008 }
case 37:
                var12 = _closure1_slot16;
                var11 = _closure1_slot19;
                var10 = {};
                var10['guild'] = var14;
                var14 = var14.id;
                var10['guildId'] = var14;
                var10['hasChanges'] = var13;
                var9 = var12.bind(var1)(var11, var10);
case 38:
                var8[2] = var9;
                var5['children'] = var8;
                var7 = var4.bind(var1)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot16;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 20;
                var6 = var9[var6];
                var6 = var7.bind(var1)(var6);
                var7 = var6.NavScrim;
                var6 = {};
                var6 = var8.bind(var1)(var7, var6);
                var5[1] = var6;
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = this;
                var2 = var1.props;
                var2 = var2.hasChanges;
                if(!var2) { _fun0009_ip = 39; continue _fun0009 }
case 40:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.cancelChanges;
                var1 = var1.props;
                var1 = var1.guild;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
case 39:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleVerificationLevelChange';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.updateGuild;
            var2 = {};
            var5 = arg1;
            var2['verificationLevel'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'handleExplicitContentFilterChange';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.updateGuild;
            var2 = {};
            var5 = arg1;
            var2['explicitContentFilter'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var7);
    var _closure1_slot20 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedGuildSettingsModalModeration(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var8 = var2.contentContainerStyle;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 21;
            var2 = var4[var2];
            var5 = undefined;
            var7 = var3.bind(var5)(var2);
            var2 = var7.useNavigation;
            var13 = var2.bind(var7)();
            var2 = 22;
            var7 = var4[var2];
            var11 = var3.bind(var5)(var7);
            var10 = var11.useStateFromStoresObject;
            var7 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var7;
            var7 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getProps;
                var4 = var1.bind(var2)();
                var3 = var4.submitting;
                var2 = var4.hasChanges;
                var1 = {};
                var4 = var4.guild;
                var1['guild'] = var4;
                var1['submitting'] = var3;
                var1['hasChanges'] = var2;
                return var1;
            };
            var7 = var10.bind(var11)(var9, var7);
            var12 = var7.guild;
            var _closure2_slot0 = var12;
            var11 = var7.submitting;
            var10 = var7.hasChanges;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStores;
            var7 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var4 = _closure1_slot9;
                var3 = var4.can;
                var1 = _closure1_slot13;
                var2 = var1.MANAGE_GUILD;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var9 = var3.bind(var4)(var2, var1);
            var1 = null;
            var2 = var1 != var12;
            if(!var2) { _fun0010_ip = 41; continue _fun0010 }
case 42:
            var4 = _closure1_slot16;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 23;
            var2 = var7[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.RedesignCompat;
            var2 = {};
            var7 = _closure1_slot20;
            var6 = {};
            var6['navigation'] = var13;
            var6['guild'] = var12;
            var6['submitting'] = var11;
            var6['hasChanges'] = var10;
            var6['canManageGuild'] = var9;
            var6['contentContainerStyle'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 41:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
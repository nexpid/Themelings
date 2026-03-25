// app/modules/integration_settings/native/IntegrationsSettingsEditWebhook.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.Endpoints;
    var _closure1_slot12 = var8;
    var8 = var7.NON_USER_BOT_DISCRIMINATOR;
    var _closure1_slot13 = var8;
    var8 = var7.Permissions;
    var _closure1_slot14 = var8;
    var7 = var7.WebhookTypes;
    var _closure1_slot15 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot16 = var8;
    var8 = var7.jsxs;
    var _closure1_slot17 = var8;
    var7 = var7.Fragment;
    var _closure1_slot18 = var7;
    var7 = 12;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var11 = 13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWER;
    var10['backgroundColor'] = var13;
    var7['form'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.modules;
    var11 = var11.mobile;
    var11 = var11.TABLE_ROW_PADDING;
    var10['padding'] = var11;
    var7['row'] = var10;
    var10 = {'height': 16, 'width': 16, 'opacity': 0.6};
    var7['channelIcon'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot19 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function EditWebhook(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 8:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {'avatar': null, 'name': null, 'channel': null, 'hasChanges': false, 'submitting': false, 'copied': false};
                var4 = var1.props;
                var4 = var4.avatar;
                var3['avatar'] = var4;
                var4 = var1.props;
                var4 = var4.name;
                var3['name'] = var4;
                var4 = var1.props;
                var4 = var4.channel;
                var3['channel'] = var4;
                var1['state'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var3 = var3.state;
                        var3 = var3.hasChanges;
                        if(!var3) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var7 = _closure3_slot0;
                        var3 = var7.state;
                        var2 = var3.avatar;
                        var8 = var3.name;
                        var3 = var3.channel;
                        var4 = var7.props;
                        var6 = var4.guildId;
                        var5 = var4.webhookId;
                        var4 = var4.navigation;
                        var _closure4_slot0 = var4;
                        var4 = {};
                        var4['name'] = var8;
                        var3 = var3.id;
                        var4['channel_id'] = var3;
                        var4['avatar'] = var2;
                        var3 = var7.setState;
                        var2 = {};
                        var8 = true;
                        var2['submitting'] = var8;
                        var2 = var3.bind(var7)(var2);
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 14;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var7.bind(var2)(var3);
                        var2 = var3.update;
                        var4 = var2.bind(var3)(var6, var5, var4);
                        var3 = var4.then;
                        var2 = function() {
                            var2 = _closure4_slot0;
                            var1 = var2.pop;
                            var1 = var1.bind(var2)();
                            var1 = undefined;
                            return var1;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.catch;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var4 = var1.body;
                            var3 = _closure3_slot0;
                            var2 = var3.setState;
                            var1 = {};
                            var1['errors'] = var4;
                            var4 = false;
                            var1['submitting'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
case 9:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSave'] = var3;
                var3 = function(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var4 = arg1;
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var6 = var2.avatar;
                        if(!(var4 === var6)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var5 = _closure3_slot0;
                        var3 = var5.setState;
                        var2 = {};
                        var7 = false;
                        var2['hasChanges'] = var7;
                        var2['avatar'] = var6;
                        var2 = var3.bind(var5)(var2);
                        _fun0004_ip = 13; continue _fun0004;
case 11:
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var5 = true;
                        var1['hasChanges'] = var5;
                        var1['avatar'] = var4;
                        var1 = var2.bind(var3)(var1);
case 13:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleGuildIconUpload'] = var3;
                var3 = function(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var4 = arg1;
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var6 = var2.name;
                        if(!(var4 === var6)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                        var5 = _closure3_slot0;
                        var3 = var5.setState;
                        var2 = {};
                        var7 = false;
                        var2['hasChanges'] = var7;
                        var2['name'] = var6;
                        var2 = var3.bind(var5)(var2);
                        _fun0005_ip = 16; continue _fun0005;
case 14:
                        var3 = _closure3_slot0;
                        var2 = var3.setState;
                        var1 = {};
                        var5 = true;
                        var1['hasChanges'] = var5;
                        var1['name'] = var4;
                        var1 = var2.bind(var3)(var1);
case 16:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleNameChange'] = var3;
                var3 = function() {
                    var7 = _closure3_slot0;
                    var1 = var7.props;
                    var5 = var1.channel;
                    var _closure4_slot0 = var5;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var7 = var7.props;
                    var7 = var7.guildId;
                    var2['guildId'] = var7;
                    var6 = _closure1_slot8;
                    var2['channelType'] = var6;
                    var6 = function filterFn(arg1) {
                        var1 = arg1;
                        var4 = var1.channel;
                        var3 = _closure1_slot9;
                        var2 = var3.can;
                        var1 = _closure1_slot14;
                        var1 = var1.MANAGE_WEBHOOKS;
                        var1 = var2.bind(var3)(var1, var4);
                        return var1;
                    };
                    var2['filterFn'] = var6;
                    var2['selectedChannel'] = var5;
                    var4 = function onSelect(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var4 = arg1;
                            var2 = var4.id;
                            var1 = _closure4_slot0;
                            var1 = var1.id;
                            if(!(var2 === var1)) { _fun0006_ip = 17; continue _fun0006 }
case 15:
                            var3 = _closure3_slot0;
                            var2 = var3.setState;
                            var1 = {};
                            var6 = false;
                            var1['hasChanges'] = var6;
                            var5 = _closure4_slot0;
                            var1['channel'] = var5;
                            var1 = var2.bind(var3)(var1);
                            _fun0006_ip = 18; continue _fun0006;
case 17:
                            var3 = _closure3_slot0;
                            var2 = var3.setState;
                            var1 = {};
                            var5 = true;
                            var1['hasChanges'] = var5;
                            var1['channel'] = var4;
                            var1 = var2.bind(var3)(var1);
case 18:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2['onSelect'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['handleChannelChange'] = var3;
                var3 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var8 = var1.token;
                        var6 = var1.webhookId;
                        var1 = null;
                        if(!(var1 != var8)) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 16;
                        var4 = var5[var2];
                        var2 = undefined;
                        var9 = var3.bind(var2)(var4);
                        var7 = var9.getAPIBaseURL;
                        var4 = false;
                        var7 = var7.bind(var9)(var4);
                        var4 = _closure1_slot12;
                        var1 = var4.WEBHOOK_INTEGRATION;
                        var6 = var1.bind(var4)(var6, var8);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var1 = '';
                        var4 = var4.bind(var1)(var7, var6);
                        var1 = 17;
                        var1 = var5[var1];
                        var3 = var3.bind(var2)(var1);
                        var2 = var3.copy;
                        var1 = function() {
                            var3 = _closure3_slot0;
                            var2 = var3.setState;
                            var1 = {};
                            var4 = true;
                            var1['copied'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var4, var1);
case 19:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCopyUrl'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var6 = var1.guildId;
                    var5 = var1.webhookId;
                    var1 = var1.navigation;
                    var _closure4_slot0 = var1;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.delete;
                    var5 = var3.bind(var4)(var6, var5);
                    var4 = var5.then;
                    var3 = function() {
                        var2 = _closure4_slot0;
                        var1 = var2.pop;
                        var1 = var1.bind(var2)();
                        var1 = undefined;
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function() {
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 18;
                        var2 = var9[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var5 = 19;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var10 = var6.intl;
                        var7 = var10.string;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var6 = var6.t;
                        var6 = var6.N5riYn;
                        var6 = var7.bind(var10)(var6);
                        var2['title'] = var6;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5["/4TwKf"];
                        var5 = var6.bind(var7)(var5);
                        var2['body'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleConfirmDeleteWebhook'] = var3;
                var3 = function() {
                    var5 = _closure3_slot0;
                    var1 = var5.props;
                    var14 = var1.name;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 18;
                    var2 = var7[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var8 = 19;
                    var9 = var7[var8];
                    var9 = var11.bind(var1)(var9);
                    var13 = var9.intl;
                    var12 = var13.formatToPlainString;
                    var9 = var7[var8];
                    var9 = var11.bind(var1)(var9);
                    var9 = var9.t;
                    var10 = var9.QVFjHh;
                    var9 = {};
                    var9['name'] = var14;
                    var9 = var12.bind(var13)(var10, var9);
                    var2['title'] = var9;
                    var9 = var7[var8];
                    var9 = var11.bind(var1)(var9);
                    var13 = var9.intl;
                    var12 = var13.format;
                    var9 = var7[var8];
                    var9 = var11.bind(var1)(var9);
                    var9 = var9.t;
                    var10 = var9.rIWe+5;
                    var9 = {};
                    var9['name'] = var14;
                    var9 = var12.bind(var13)(var10, var9);
                    var2['body'] = var9;
                    var9 = var7[var8];
                    var9 = var11.bind(var1)(var9);
                    var12 = var9.intl;
                    var10 = var12.string;
                    var9 = var7[var8];
                    var9 = var11.bind(var1)(var9);
                    var9 = var9.t;
                    var9 = var9.gm1Vej;
                    var9 = var10.bind(var12)(var9);
                    var2['cancelText'] = var9;
                    var9 = var7[var8];
                    var9 = var11.bind(var1)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var7[var8];
                    var8 = var11.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.p89ACt;
                    var8 = var9.bind(var10)(var8);
                    var2['confirmText'] = var8;
                    var5 = var5.handleConfirmDeleteWebhook;
                    var2['onConfirm'] = var5;
                    var5 = 20;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.Colors;
                    var5 = var5.RED;
                    var2['confirmColor'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleDeleteWebhook'] = var3;
                var2 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {'avatar': null, 'name': null, 'channel': null, 'hasChanges': false, 'submitting': false, 'copied': false};
                    var4 = var3.props;
                    var4 = var4.avatar;
                    var1['avatar'] = var4;
                    var4 = var3.props;
                    var4 = var4.name;
                    var1['name'] = var4;
                    var4 = var3.props;
                    var4 = var4.channel;
                    var1['channel'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleCancelChanges'] = var2;
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
        var1 = 'componentDidUpdate';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var2 = var1.props;
                var3 = var2.navigation;
                var1 = var1.state;
                var5 = var1.submitting;
                var1 = var1.hasChanges;
                var2 = true;
                if(!(var2 === var5)) { _fun0008_ip = 21; continue _fun0008 }
case 22:
                var2 = arg2;
                var2 = var2.submitting;
                if(var2) { _fun0008_ip = 21; continue _fun0008 }
case 23:
                var5 = var3.setOptions;
                var2 = {};
                var6 = function headerRight() {
                    var4 = _closure1_slot16;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.HeaderSubmittingIndicator;
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2['headerRight'] = var6;
                var6 = function headerLeft() {
                    var1 = null;
                    return var1;
                };
                var2['headerLeft'] = var6;
                var2 = var5.bind(var3)(var2);
                _fun0008_ip = 24; continue _fun0008;
case 21:
                if(!var1) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                if(var1) { _fun0008_ip = 27; continue _fun0008 }
case 25:
                var2 = var3.setOptions;
                var1 = {};
                var5 = undefined;
                var1['headerRight'] = var5;
                var1['headerLeft'] = var5;
                var1 = var2.bind(var3)(var1);
                _fun0008_ip = 24; continue _fun0008;
case 27:
                var2 = var3.setOptions;
                var1 = {};
                var5 = function headerRight() {
                    var4 = _closure1_slot16;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 22;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = _closure3_slot0;
                    var5 = var5.handleSave;
                    var1['onPress'] = var5;
                    var5 = 19;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.R3BPH+;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerRight'] = var5;
                var4 = function headerLeft() {
                    var4 = _closure1_slot16;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 22;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = _closure3_slot0;
                    var5 = var5.handleCancelChanges;
                    var1['onPress'] = var5;
                    var5 = 19;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.ETE/oC;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerLeft'] = var4;
                var1 = var2.bind(var3)(var1);
case 24:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var15 = this;
                var2 = _closure1_slot19;
                var1 = var15.context;
                var4 = undefined;
                var26 = var2.bind(var4)(var1);
                var1 = var15.props;
                var25 = var1.webhookId;
                var _closure3_slot0 = var25;
                var12 = var1.webhookType;
                var23 = var1.token;
                var1 = var15.state;
                var22 = var1.avatar;
                var14 = var1.name;
                var29 = var1.channel;
                var5 = var1.copied;
                var16 = var1.errors;
                var3 = _closure1_slot16;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 23;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {'variant': 'text-sm/medium', 'color': 'text-link'};
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var18 = 19;
                var7 = var6[var18];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var18];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                if(var5) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                var5 = var6.OpuAlK;
                var5 = var7.bind(var8)(var5);
                _fun0009_ip = 30; continue _fun0009;
case 28:
                var6 = var6.t5VZ88;
                var5 = var7.bind(var8)(var6);
case 30:
                var1['children'] = var5;
                var20 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot16;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 24;
                var1 = var11[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.Form;
                var1 = {};
                var5 = var26.form;
                var1['style'] = var5;
                var7 = {};
                var24 = 16;
                var7['paddingTop'] = var24;
                var5 = new Array(2);
                var5[0] = var7;
                var7 = var15.props;
                var7 = var7.contentContainerStyle;
                var5[1] = var7;
                var1['contentContainerStyle'] = var5;
                var7 = _closure1_slot17;
                var5 = 25;
                var5 = var11[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Stack;
                var5 = {};
                var9 = _closure1_slot1;
                var8 = 13;
                var8 = var11[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_24;
                var5['spacing'] = var8;
                var8 = {};
                var9 = var26.row;
                var9 = var9.padding;
                var8['paddingHorizontal'] = var9;
                var5['style'] = var8;
                var8 = _closure1_slot15;
                var8 = var8.CHANNEL_FOLLOWER;
                var11 = null;
                var9 = null;
                if(!(var12 !== var8)) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                var13 = _closure1_slot16;
                var12 = _closure1_slot1;
                var17 = _closure1_slot2;
                var8 = 26;
                var8 = var17[var8];
                var12 = var12.bind(var4)(var8);
                var8 = {};
                var19 = {};
                var27 = var15.handleGuildIconUpload;
                var19['onUpload'] = var27;
                var27 = 'avatar';
                var19['type'] = var27;
                var19['icon'] = var22;
                var19['name'] = var14;
                var21 = function makeURL(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getUserAvatarURL;
                    var1 = {};
                    var5 = _closure3_slot0;
                    var1['id'] = var5;
                    var5 = arg1;
                    var1['avatar'] = var5;
                    var4 = _closure1_slot13;
                    var1['discriminator'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var19['makeURL'] = var21;
                var21 = false;
                var19['disabled'] = var21;
                var8['iconProps'] = var19;
                var22 = _closure1_slot0;
                var19 = var17[var18];
                var19 = var22.bind(var4)(var19);
                var21 = var19.intl;
                var19 = var21.string;
                var17 = var17[var18];
                var17 = var22.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17["7+5GQa"];
                var17 = var19.bind(var21)(var17);
                var8['label'] = var17;
                var9 = var13.bind(var4)(var12, var8);
case 31:
                var8 = new Array(5);
                var8[0] = var9;
                var13 = _closure1_slot16;
                var22 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 28;
                var9 = var17[var9];
                var9 = var22.bind(var4)(var9);
                var12 = var9.TextInput;
                var9 = {};
                var19 = var17[var18];
                var19 = var22.bind(var4)(var19);
                var21 = var19.intl;
                var19 = var21.string;
                var17 = var17[var18];
                var17 = var22.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.ukdxuo;
                var17 = var19.bind(var21)(var17);
                var9['label'] = var17;
                var9['value'] = var14;
                var14 = var15.handleNameChange;
                var9['onChange'] = var14;
                var14 = undefined;
                if(!(var4 !== var16)) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                var17 = var16.name;
                var14 = undefined;
                if(!(var14 !== var17)) { _fun0009_ip = 33; continue _fun0009 }
case 35:
                var17 = var16.name;
                var16 = 0;
                var14 = var17[var16];
case 33:
                var9['errorMessage'] = var14;
                var9 = var13.bind(var4)(var12, var9);
                var8[1] = var9;
                var16 = _closure1_slot16;
                var28 = _closure1_slot0;
                var30 = _closure1_slot2;
                var9 = 29;
                var12 = var30[var9];
                var12 = var28.bind(var4)(var12);
                var14 = var12.TableRowGroup;
                var13 = {};
                var12 = var30[var18];
                var12 = var28.bind(var4)(var12);
                var19 = var12.intl;
                var17 = var19.string;
                var12 = var30[var18];
                var12 = var28.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.GK18KJ;
                var12 = var17.bind(var19)(var12);
                var13['title'] = var12;
                var12 = 30;
                var17 = var30[var12];
                var17 = var28.bind(var4)(var17);
                var19 = var17.TableRow;
                var17 = {};
                var21 = 31;
                var21 = var30[var21];
                var31 = var28.bind(var4)(var21);
                var27 = var31.computeChannelName;
                var22 = _closure1_slot11;
                var21 = _closure1_slot10;
                var21 = var27.bind(var31)(var29, var22, var21);
                var17['label'] = var21;
                var21 = true;
                var17['arrow'] = var21;
                var21 = var15.handleChannelChange;
                var17['onPress'] = var21;
                var31 = _closure1_slot1;
                var27 = 32;
                var21 = var30[var27];
                var22 = var31.bind(var4)(var21);
                var21 = {};
                var27 = var30[var27];
                var27 = var31.bind(var4)(var27);
                var27 = var27.Sizes;
                var27 = var27.CUSTOM;
                var21['size'] = var27;
                var27 = 33;
                var27 = var30[var27];
                var28 = var28.bind(var4)(var27);
                var27 = var28.getChannelIcon;
                var27 = var27.bind(var28)(var29);
                var21['source'] = var27;
                var26 = var26.channelIcon;
                var21['style'] = var26;
                var21 = var16.bind(var4)(var22, var21);
                var17['icon'] = var21;
                var17 = var16.bind(var4)(var19, var17);
                var13['children'] = var17;
                var13 = var16.bind(var4)(var14, var13);
                var8[2] = var13;
                var13 = var11 != var23;
                var11 = null;
                if(!var13) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                var16 = _closure1_slot16;
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var13 = var21[var9];
                var13 = var22.bind(var4)(var13);
                var14 = var13.TableRowGroup;
                var13 = {};
                var17 = var21[var18];
                var17 = var22.bind(var4)(var17);
                var26 = var17.intl;
                var19 = var26.string;
                var17 = var21[var18];
                var17 = var22.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.SFdvF1;
                var17 = var19.bind(var26)(var17);
                var13['title'] = var17;
                var17 = var21[var12];
                var17 = var22.bind(var4)(var17);
                var19 = var17.TableRow;
                var17 = {};
                var21 = var21[var24];
                var24 = var22.bind(var4)(var21);
                var22 = var24.getAPIBaseURL;
                var21 = false;
                var24 = var22.bind(var24)(var21);
                var22 = _closure1_slot12;
                var21 = var22.WEBHOOK_INTEGRATION;
                var23 = var21.bind(var22)(var25, var23);
                var21 = global;
                var21 = var21.HermesInternal;
                var22 = var21.concat;
                var21 = '';
                var21 = var22.bind(var21)(var24, var23);
                var17['label'] = var21;
                var21 = var15.handleCopyUrl;
                var17['onPress'] = var21;
                var17['trailing'] = var20;
                var17 = var16.bind(var4)(var19, var17);
                var13['children'] = var17;
                var11 = var16.bind(var4)(var14, var13);
case 36:
                var8[3] = var11;
                var11 = _closure1_slot16;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = var14[var9];
                var9 = var17.bind(var4)(var9);
                var10 = var9.TableRowGroup;
                var9 = {};
                var12 = var14[var12];
                var12 = var17.bind(var4)(var12);
                var13 = var12.TableRow;
                var12 = {};
                var16 = 'danger';
                var12['variant'] = var16;
                var15 = var15.handleDeleteWebhook;
                var12['onPress'] = var15;
                var15 = var14[var18];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.oyYWHE;
                var14 = var15.bind(var16)(var14);
                var12['label'] = var14;
                var12 = var11.bind(var4)(var13, var12);
                var9['children'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[4] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var4.bind(var1)(var7);
    var _closure1_slot20 = var7;
    var4 = 34;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/integration_settings/native/IntegrationsSettingsEditWebhook.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedEditWebhook(arg1) {
        var7 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 35;
        var1 = var9[var1];
        var4 = undefined;
        var2 = var7.bind(var4)(var1);
        var1 = var2.useNavigation;
        var10 = var1.bind(var2)();
        var3 = _closure1_slot17;
        var2 = _closure1_slot18;
        var1 = {};
        var8 = _closure1_slot16;
        var6 = _closure1_slot20;
        var5 = {};
        var5['navigation'] = var10;
        var11 = arg1;
        var12 = var5;
        var10 = copyDataProperties(var12, var11);
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = 36;
        var6 = var9[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.NavScrim;
        var6 = {};
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
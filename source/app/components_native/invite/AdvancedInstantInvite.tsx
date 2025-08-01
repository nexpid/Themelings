// app/components_native/invite/AdvancedInstantInvite.tsx
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
 0:
 2: // try_start_0
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.Permissions;
    var _closure1_slot12 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var5 = function AdvancedInstantInviteContainer(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
                var1 = _closure1_slot15;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var4 = var1.props;
                var4 = var4.channel;
                var3['cachedChannel'] = var4;
                var1['state'] = var3;
                var3 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.close;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var1['handlePressCancel'] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var6 = var2.channel;
                        var2 = null;
                        if(!(var2 != var6)) { _fun0003_ip = 58; continue _fun0003 }
 23:
                        var5 = _closure1_slot11;
                        var4 = var5.can;
                        var3 = _closure1_slot12;
                        var3 = var3.CREATE_INSTANT_INVITE;
                        var3 = var4.bind(var5)(var3, var6);
                        if(var3) { _fun0003_ip = 226; continue _fun0003 }
 58:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 13;
                        var3 = var9[var3];
                        var7 = undefined;
                        var5 = var8.bind(var7)(var3);
                        var4 = var5.show;
                        var3 = {};
                        var12 = _closure1_slot0;
                        var6 = 14;
                        var10 = var9[var6];
                        var10 = var12.bind(var7)(var10);
                        var13 = var10.intl;
                        var11 = var13.string;
                        var10 = var9[var6];
                        var10 = var12.bind(var7)(var10);
                        var10 = var10.t;
                        var10 = var10.VINpSE;
                        var10 = var11.bind(var13)(var10);
                        var3['title'] = var10;
                        var10 = var9[var6];
                        var10 = var12.bind(var7)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var6 = var9[var6];
                        var6 = var12.bind(var7)(var6);
                        var6 = var6.t;
                        var6 = var6.RiiKV1;
                        var6 = var10.bind(var11)(var6);
                        var3['body'] = var6;
                        var6 = 12;
                        var6 = var9[var6];
                        var6 = var8.bind(var7)(var6);
                        var6 = var6.close;
                        var3['onConfirm'] = var6;
                        var3 = var4.bind(var5)(var3);
                        _fun0003_ip = 279; continue _fun0003;
 226:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 12;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.createInvite;
                        var2 = 'IOS Regenerate';
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure3_slot0;
                        var1 = var2.handlePressCancel;
                        var1 = var1.bind(var2)();
 279:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handlePressSave'] = var3;
                var2 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var3 = var1.navigation;
                    var2 = var3.setOptions;
                    var1 = {};
                    var5 = function headerLeft(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var1 = _closure3_slot0;
                            var3 = var1.props;
                            var4 = var3.navigation;
                            var3 = var4.getState;
                            var3 = var3.bind(var4)();
                            var1 = var1.props;
                            var1 = var1.changed;
                            if(var1) { _fun0004_ip = 60; continue _fun0004 }
 42:
                            var3 = var3.routes;
                            var4 = var3.length;
                            var3 = 1;
                            var1 = var3 === var4;
 60:
                            if(!var1) { _fun0004_ip = 117; continue _fun0004 }
 63:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 15;
                            var3 = var4[var3];
                            var4 = undefined;
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.getHeaderCloseButton;
                            var2 = _closure3_slot0;
                            var2 = var2.handlePressCancel;
                            var3 = var3.bind(var5)(var2);
                            var2 = arg1;
                            var1 = var3.bind(var4)(var2);
 117:
                            return var1;
                        }
                    };
                    var1['headerLeft'] = var5;
                    var4 = function headerRight() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = _closure3_slot0;
                            var1 = var1.props;
                            var2 = var1.changed;
                            var5 = undefined;
                            var1 = undefined;
                            if(!var2) { _fun0005_ip = 131; continue _fun0005 }
 25:
                            var4 = _closure1_slot13;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 16;
                            var2 = var10[var2];
                            var2 = var9.bind(var5)(var2);
                            var3 = var2.HeaderActionButton;
                            var2 = {};
                            var6 = _closure3_slot0;
                            var6 = var6.handlePressSave;
                            var2['onPress'] = var6;
                            var6 = 14;
                            var7 = var10[var6];
                            var7 = var9.bind(var5)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var10[var6];
                            var6 = var9.bind(var5)(var6);
                            var6 = var6.t;
                            var6 = var6.R3BPHx;
                            var6 = var7.bind(var8)(var6);
                            var2['text'] = var6;
                            var1 = var4.bind(var5)(var3, var2);
 131:
                            return var1;
                        }
                    };
                    var1['headerRight'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['updateHeader'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot7;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot4;
        var6 = {};
        var2 = 'componentDidMount';
        var6['key'] = var2;
        var2 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = this;
                var1 = var2.props;
                var1 = var1.channel;
                var3 = null;
                if(!(var3 == var1)) { _fun0006_ip = 301; continue _fun0006 }
 22:
                var5 = _closure1_slot9;
                var4 = var5.getGuildId;
                var7 = var4.bind(var5)();
                var4 = var3 != var7;
                var5 = null;
                if(!var4) { _fun0006_ip = 81; continue _fun0006 }
 48:
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 17;
                var6 = var6[var4];
                var4 = undefined;
                var6 = var8.bind(var4)(var6);
                var4 = var6.getInvitableChannelForGuild;
                var5 = var4.bind(var6)(var7);
 81:
                if(!(var3 == var5)) { _fun0006_ip = 252; continue _fun0006 }
 88:
                var4 = _closure1_slot1;
                var12 = _closure1_slot2;
                var3 = 13;
                var3 = var12[var3];
                var11 = undefined;
                var6 = var4.bind(var11)(var3);
                var4 = var6.show;
                var3 = {};
                var10 = _closure1_slot0;
                var7 = 14;
                var8 = var12[var7];
                var8 = var10.bind(var11)(var8);
                var13 = var8.intl;
                var9 = var13.string;
                var8 = var12[var7];
                var8 = var10.bind(var11)(var8);
                var8 = var8.t;
                var8 = var8.VINpSE;
                var8 = var9.bind(var13)(var8);
                var3['title'] = var8;
                var8 = var12[var7];
                var8 = var10.bind(var11)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var12[var7];
                var7 = var10.bind(var11)(var7);
                var7 = var7.t;
                var7 = var7.kQ6fio;
                var7 = var8.bind(var9)(var7);
                var3['body'] = var7;
                var7 = var2.props;
                var7 = var7.navigation;
                var7 = var7.pop;
                var3['onConfirm'] = var7;
                var3 = var4.bind(var6)(var3);
                _fun0006_ip = 301; continue _fun0006;
 252:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.updateSettings;
                var1 = {};
                var5 = var5.channel;
                var5 = var5.id;
                var1['channelId'] = var5;
                var1 = var3.bind(var4)(var1);
 301:
                var1 = var2.updateHeader;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(8);
        var2[0] = var6;
        var6 = {};
        var7 = 'componentDidUpdate';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = this;
                var1 = var2.props;
                var3 = var1.changed;
                var1 = arg1;
                var1 = var1.changed;
                if(!(var3 !== var1)) { _fun0007_ip = 37; continue _fun0007 }
 27:
                var1 = var2.updateHeader;
                var1 = var1.bind(var2)();
 37:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'componentWillUnmount';
        var6['key'] = var7;
        var7 = function value() {
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 18;
            var2 = var6[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var2);
            var3 = var4.wait;
            var2 = 12;
            var2 = var6[var2];
            var2 = var5.bind(var1)(var2);
            var2 = var2.resetSettings;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'handleChangeMaxUses';
        var6['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.updateSettings;
            var2 = {};
            var5 = arg1;
            var2['maxUses'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var7;
        var2[3] = var6;
        var6 = {};
        var7 = 'handleChangeMaxAge';
        var6['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.updateSettings;
            var2 = {};
            var5 = arg1;
            var2['maxAge'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var7;
        var2[4] = var6;
        var6 = {};
        var7 = 'handleChangeTemporary';
        var6['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.updateSettings;
            var2 = {};
            var5 = arg1;
            var2['temporary'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var7;
        var2[5] = var6;
        var6 = {};
        var7 = 'handleChangeFlags';
        var6['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.updateSettings;
            var2 = {};
            var5 = arg1;
            var2['flags'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var6['value'] = var7;
        var2[6] = var6;
        var6 = {};
        var7 = 'render';
        var6['key'] = var7;
        var7 = function value() {
            var5 = this;
            var4 = _closure1_slot13;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 19;
            var1 = var7[var1];
            var3 = undefined;
            var2 = var6.bind(var3)(var1);
            var1 = {};
            var10 = var5.props;
            var11 = var1;
            var8 = copyDataProperties(var11, var10);
            var8 = var5.state;
            var9 = var8.cachedChannel;
            var8 = 'channel';
            var1[var8] = var9;
            var9 = var5.handleChangeMaxUses;
            var8 = 'onChangeMaxUses';
            var1[var8] = var9;
            var9 = var5.handleChangeMaxAge;
            var8 = 'onChangeMaxAge';
            var1[var8] = var9;
            var9 = var5.handleChangeTemporary;
            var8 = 'onChangeTemporary';
            var1[var8] = var9;
            var8 = var5.handleChangeFlags;
            var5 = 'onChangeFlags';
            var1[var5] = var8;
            var5 = 20;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var6 = var5.getMaxUsesOptions;
            var5 = 'maxUsesOptions';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var6['value'] = var7;
        var2[7] = var6;
        var6 = {};
        var7 = 'getDerivedStateFromProps';
        var6['key'] = var7;
        var1 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = arg1;
                var5 = var3.channel;
                var1 = arg2;
                var2 = var1.cachedChannel;
                var4 = null;
                var1 = null;
                if(!(var5 !== var2)) { _fun0008_ip = 54; continue _fun0008 }
 25:
                var2 = var3.channel;
                var2 = var4 != var2;
                var1 = null;
                if(!var2) { _fun0008_ip = 54; continue _fun0008 }
 39:
                var2 = {};
                var3 = var3.channel;
                var2['cachedChannel'] = var3;
                var1 = var2;
 54:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var7);
    var _closure1_slot14 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/invite/AdvancedInstantInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 21;
        var2 = var6[var2];
        var4 = undefined;
        var8 = var3.bind(var4)(var2);
        var7 = var8.useStateFromStoresObject;
        var2 = _closure1_slot8;
        var5 = new Array(3);
        var5[0] = var2;
        var2 = _closure1_slot9;
        var5[1] = var2;
        var2 = _closure1_slot10;
        var5[2] = var2;
        var2 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var9 = _closure1_slot9;
                var1 = var9.getPendingSettings;
                var5 = var1.bind(var9)();
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 22;
                var4 = var8[var3];
                var1 = undefined;
                var11 = var6.bind(var1)(var4);
                var7 = null;
                var10 = var7 != var5;
                var4 = 'Received null pending invite settings';
                var4 = var11.bind(var1)(var10, var4);
                var4 = var9.getInviteSettings;
                var4 = var4.bind(var9)();
                var3 = var8[var3];
                var8 = var6.bind(var1)(var3);
                var6 = var7 != var4;
                var3 = 'Received null invite settings';
                var3 = var8.bind(var1)(var6, var3);
                var8 = _closure1_slot8;
                var6 = var8.getChannel;
                var3 = var5.channelId;
                var3 = var6.bind(var8)(var3);
                var6 = _closure1_slot10;
                var2 = var6.getGuild;
                var7 = var7 == var3;
                if(var7) { _fun0009_ip = 137; continue _fun0009 }
 127:
                var7 = var3.getGuildId;
                var1 = var7.bind(var3)();
 137:
                var2 = var2.bind(var6)(var1);
                var1 = {};
                var1['settings'] = var5;
                var1['inviteSettings'] = var4;
                var1['channel'] = var3;
                var1['guild'] = var2;
                return var1;
            }
        };
        var2 = var7.bind(var8)(var5, var2);
        var5 = var2.settings;
        var9 = var2.inviteSettings;
        var8 = var2.channel;
        var7 = var2.guild;
        var10 = _closure1_slot1;
        var2 = 23;
        var2 = var6[var2];
        var2 = var10.bind(var4)(var2);
        var2 = var2.bind(var4)(var5, var9);
        var9 = !var2;
        var2 = 24;
        var2 = var6[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useNavigation;
        var6 = var2.bind(var3)();
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var1 = {};
        var1['changed'] = var9;
        var1['channel'] = var8;
        var1['guild'] = var7;
        var1['navigation'] = var6;
        var12 = var1;
        var11 = var5;
        var5 = copyDataProperties(var12, var11);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
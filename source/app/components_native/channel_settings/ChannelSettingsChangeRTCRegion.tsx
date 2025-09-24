// app/components_native/channel_settings/ChannelSettingsChangeRTCRegion.tsx
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
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
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot11 = var7;
    var7 = 10;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var11 = 11;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['paddingHorizontal'] = var11;
    var7['form'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot12 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function ChannelSettingsChangeRTCRegion(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var3 = undefined;
                var8 = var8.bind(var3)(var5, var4);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var3)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var4.bind(var3)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = {'regions': null, 'submitting': false, 'selectedRegionId': 'AUTOMATIC_RTC_REGION'};
                        var2 = new Array(0);
                        var1['regions'] = var2;
                        var3 = 'AUTOMATIC_RTC_REGION';
                        var7 = _closure1_slot10;
                        var5 = var7.getRegions;
                        var4 = _closure3_slot0;
                        var4 = var4.props;
                        var8 = var4.channel;
                        var4 = var8.getGuildId;
                        var4 = var4.bind(var8)();
                        var8 = var5.bind(var7)(var4);
                        var5 = {'id': 'AUTOMATIC_RTC_REGION', 'name': null, 'sample_hostname': '', 'sample_port': 0, 'vip': false, 'deprecated': false, 'optimal': false, 'hidden': false};
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var2 = 12;
                        var7 = var11[var2];
                        var4 = undefined;
                        var7 = var10.bind(var4)(var7);
                        var9 = var7.intl;
                        var7 = var9.string;
                        var2 = var11[var2];
                        var2 = var10.bind(var4)(var2);
                        var2 = var2.t;
                        var2 = var2.JEmsam;
                        var2 = var7.bind(var9)(var2);
                        var5['name'] = var2;
                        var2 = new Array(1);
                        var2[0] = var5;
                        var5 = null;
                        if(!(var5 != var8)) { _fun0003_ip = 259; continue _fun0003 }
 164:
                        var9 = var2.push;
                        var10 = var8.filter;
                        var7 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                var2 = arg1;
                                var1 = var2.deprecated;
                                var1 = !var1;
                                if(!var1) { _fun0004_ip = 24; continue _fun0004 }
 15:
                                var2 = var2.hidden;
                                var1 = !var2;
 24:
                                return var1;
                            }
                        };
                        var13 = var10.bind(var8)(var7);
                        var7 = new Array(0);
                        var14 = var7;
                        var12 = 0;
                        var10 = arraySpread(var14, var13, var12);
                        var14 = var9;
                        var13 = var7;
                        var12 = var2;
                        var7 = apply(var14, var13, var12);
                        var7 = var8.find;
                        var6 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.id;
                            var1 = _closure3_slot0;
                            var1 = var1.props;
                            var1 = var1.channel;
                            var1 = var1.rtcRegion;
                            var1 = var2 === var1;
                            return var1;
                        };
                        var6 = var7.bind(var8)(var6);
                        var7 = var5 == var6;
                        var4 = undefined;
                        if(var7) { _fun0003_ip = 243; continue _fun0003 }
 238:
                        var4 = var6.id;
 243:
                        var5 = var5 != var4;
                        if(!var5) { _fun0003_ip = 253; continue _fun0003 }
 250:
                        var3 = var4;
 253:
                        var1['selectedRegionId'] = var3;
 259:
                        var1['regions'] = var2;
                        return var1;
                    }
                };
                var2 = var2.bind(var3)();
                var1['state'] = var2;
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
        var1 = 'handleSetRegion';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var7 = arg1;
                var5 = this;
                var _closure3_slot0 = var5;
                var _closure3_slot1 = var7;
                var6 = var5.state;
                var1 = null;
                var8 = var1 != var7;
                var3 = 'AUTOMATIC_RTC_REGION';
                var4 = var3;
                if(!var8) { _fun0005_ip = 42; continue _fun0005 }
 39:
                var4 = var7;
 42:
                var6['selectedRegionId'] = var4;
                if(!(var7 === var3)) { _fun0005_ip = 58; continue _fun0005 }
 52:
                _closure3_slot1 = var1;
                var7 = null;
 58:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.updateChannel;
                var3 = {};
                var3['rtcRegion'] = var7;
                var3 = var4.bind(var6)(var3);
                var4 = var5.setState;
                var3 = {};
                var6 = true;
                var3['submitting'] = var6;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.saveChannel;
                    var2 = _closure3_slot0;
                    var2 = var2.props;
                    var2 = var2.channel;
                    var3 = var2.id;
                    var2 = {};
                    var6 = _closure3_slot1;
                    var2['rtcRegion'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'renderRegion';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var5 = _closure1_slot11;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.TableRadioRow;
            var2 = {};
            var6 = var1.name;
            var2['label'] = var6;
            var6 = var1.id;
            var2['value'] = var6;
            var1 = var1.id;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'renderRegions';
        var5['key'] = var7;
        var7 = function value() {
            var7 = this;
            var _closure3_slot0 = var7;
            var3 = _closure1_slot3;
            var2 = var7.state;
            var2 = var2.regions;
            var4 = undefined;
            var5 = var3.bind(var4)(var2);
            var3 = var5.slice;
            var2 = 0;
            var5 = var3.bind(var5)(var2);
            var3 = var5.map;
            var2 = var7.renderRegion;
            var5 = var3.bind(var5)(var2, var7);
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 15;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRadioGroup;
            var1 = {};
            var7 = var7.state;
            var7 = var7.selectedRegionId;
            var1['defaultValue'] = var7;
            var6 = function onChange(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.handleSetRegion;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['onChange'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            var6 = this;
            var3 = _closure1_slot12;
            var2 = var6.context;
            var4 = undefined;
            var5 = var3.bind(var4)(var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 16;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Form;
            var1 = {};
            var5 = var5.form;
            var1['style'] = var5;
            var5 = var6.renderRegions;
            var5 = var5.bind(var6)();
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var4.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/channel_settings/ChannelSettingsChangeRTCRegion.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedChannelSettingsChangeRTCRegion(arg1) {
        var1 = arg1;
        var1 = var1.channelId;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 18;
        var3 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var3);
        var5 = var7.useStateFromStores;
        var8 = _closure1_slot9;
        var3 = new Array(1);
        var3[0] = var8;
        var2 = function() {
            var3 = _closure1_slot9;
            var2 = var3.getChannel;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var5.bind(var7)(var3, var2);
        var3 = _closure1_slot1;
        var2 = 19;
        var2 = var6[var2];
        var6 = var3.bind(var4)(var2);
        var2 = null;
        var3 = var2 != var5;
        var2 = 'ConnectedChannelSettingsChangeRTCRegion: channel cannot be undefined';
        var2 = var6.bind(var4)(var3, var2);
        var3 = _closure1_slot11;
        var2 = _closure1_slot13;
        var1 = {};
        var1['channel'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
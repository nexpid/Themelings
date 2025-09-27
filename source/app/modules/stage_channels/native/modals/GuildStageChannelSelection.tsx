// app/modules/stage_channels/native/modals/GuildStageChannelSelection.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginTop': 8, 'flexDirection': 'row'};
    var4['channelText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/modals/GuildStageChannelSelection.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildStageChannelSelection(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.guild;
            var3 = var1.channel;
            var _closure2_slot0 = var3;
            var1 = var1.onChangeChannel;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var1 = function handleSelectChannel() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var5 = _closure1_slot2;
                    var13 = _closure1_slot3;
                    var1 = 7;
                    var4 = var13[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.dismissGlobalKeyboard;
                    var4 = var4.bind(var5)();
                    var6 = _closure2_slot2;
                    var5 = var6.map;
                    var4 = function(arg1) {
                        var7 = arg1;
                        var1 = {};
                        var2 = var7.id;
                        var1['value'] = var2;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var3 = 6;
                        var4 = var4[var3];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.computeChannelName;
                        var10 = _closure1_slot5;
                        var9 = _closure1_slot4;
                        var8 = true;
                        var12 = var6;
                        var11 = var7;
                        var2 = var12[var5](var11, var10, var9, var8, var7);
                        var1['label'] = var2;
                        return var1;
                    };
                    var7 = var5.bind(var6)(var4);
                    var5 = _closure1_slot1;
                    var4 = 8;
                    var4 = var13[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var12 = _closure1_slot0;
                    var3 = 10;
                    var3 = var13[var3];
                    var9 = var12.bind(var1)(var3);
                    var3 = 9;
                    var4 = var13[var3];
                    var3 = var13.paths;
                    var4 = var9.bind(var1)(var4, var3);
                    var3 = {};
                    var9 = 11;
                    var10 = var13[var9];
                    var10 = var12.bind(var1)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var1)(var9);
                    var9 = var9.t;
                    var9 = var9.bxw/f3;
                    var9 = var10.bind(var11)(var9);
                    var3['title'] = var9;
                    var3['items'] = var7;
                    var2 = function onItemSelect(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var1 = arg1;
                            var _closure4_slot0 = var1;
                            var4 = _closure2_slot2;
                            var3 = var4.find;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = _closure4_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 != var3)) { _fun0003_ip = 51; continue _fun0003 }
 40:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
 51:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                            return var1;
                        }
                    };
                    var3['onItemSelect'] = var2;
                    var7 = _closure2_slot0;
                    var2 = null;
                    var9 = var2 == var7;
                    var7 = undefined;
                    if(var9) { _fun0002_ip = 213; continue _fun0002 }
 204:
                    var8 = _closure2_slot0;
                    var7 = var8.id;
 213:
                    var8 = var2 != var7;
                    var2 = undefined;
                    if(!var8) { _fun0002_ip = 225; continue _fun0002 }
 222:
                    var2 = var7;
 225:
                    var3['selectedItem'] = var2;
                    var2 = 'SelectUpdatesChannel';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var _closure2_slot3 = var1;
            var11 = function renderChannelHook(arg1, arg2) {
                var5 = _closure1_slot6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 12;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'variant': 'text-sm/bold', 'color': 'header-primary'};
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var1 = _closure1_slot7;
            var7 = var1.bind(var4)();
            var5 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 5;
            var1 = var8[var1];
            var2 = var5.bind(var4)(var1);
            var1 = var2.useChannelsUserCanStartStageIn;
            var1 = var1.bind(var2)(var9);
            _closure2_slot2 = var1;
            var2 = var1.length;
            var1 = 1;
            var1 = var2 > var1;
            var9 = _closure1_slot1;
            var2 = 6;
            var2 = var8[var2];
            var2 = var9.bind(var4)(var2);
            var12 = var2.bind(var4)(var3);
            var3 = _closure1_slot6;
            var2 = 12;
            var2 = var8[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.Text;
            var5 = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var7 = var7.channelText;
            var5['style'] = var7;
            var7 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 11;
            var8 = var13[var6];
            var8 = var7.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            if(var1) { _fun0001_ip = 261; continue _fun0001 }
 226:
            var7 = var6.S+9O7u;
            var1 = {};
            var1['stageName'] = var12;
            var1['stageHook'] = var11;
            var1 = var8.bind(var9)(var7, var1);
            var5['children'] = var1;
            var1 = var5;
            _fun0001_ip = 308; continue _fun0001;
 261:
            var7 = var6.AkzLcX;
            var6 = {};
            var6['stageName'] = var12;
            var6['stageHook'] = var11;
            var10 = function changeHook(arg1, arg2) {
                var5 = _closure1_slot6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 12;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {'onPress': null, 'variant': 'text-xs/medium', 'color': 'text-link'};
                var1 = _closure2_slot3;
                var2['onPress'] = var1;
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var6['changeHook'] = var10;
            var6 = var8.bind(var9)(var7, var6);
            var5['children'] = var6;
            var1 = var5;
 308:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/guilds_bar/native/GuildsBarHubsButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function handleHubsPress() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function _handleHubsPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 122; continue _fun0001 }
 7:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 6;
                    var5 = var2[var3];
                    var3 = undefined;
                    var6 = var6.bind(var3)(var5);
                    var5 = 5;
                    var5 = var2[var5];
                    var2 = var2.paths;
                    var2 = var6.bind(var3)(var5, var2);
                    SaveGenerator(address=54);
 52:
                    return var2;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 119; continue _fun0001 }
 60:
                    var5 = var2.default;
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 7;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.acknowledgeTooltip;
                    var4 = _closure1_slot4;
                    var4 = var4.HUB_DISCOVERY_TOOLTIP;
                    var4 = var6.bind(var7)(var4);
                    var4 = var5.open;
                    var4 = var4.bind(var5)();
                    return var3;
 119:
                    return var2;
 122:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var11 = 0;
    var4 = var6[var11];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.StyleSheet;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TooltipNames;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var8 = var9.create;
    var4 = {};
    var10 = {};
    var10['marginTop'] = var11;
    var4['marginOverrides'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function GuildsBarHubsButton() {
        var4 = _closure1_slot5;
        var7 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 8;
        var1 = var10[var1];
        var3 = undefined;
        var2 = var7.bind(var3)(var1);
        var1 = {};
        var6 = 9;
        var6 = var10[var6];
        var6 = var7.bind(var3)(var6);
        var1['iconSource'] = var6;
        var6 = _closure1_slot7;
        var1['onPress'] = var6;
        var9 = _closure1_slot0;
        var6 = 10;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.jjUTLy;
        var6 = var7.bind(var8)(var6);
        var1['accessibilityLabel'] = var6;
        var5 = _closure1_slot6;
        var5 = var5.marginOverrides;
        var1['style'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guilds_bar/native/GuildsBarHubsButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
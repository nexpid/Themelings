// app/modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'height': '100%'};
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['circle'] = var9;
    var9 = {'position': 'absolute', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'height': '100%'};
    var4['iconContainer'] = var9;
    var9 = {'width': 24, 'height': 24};
    var4['icon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/buttons/VoicePanelScreenshareButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ScreenshareButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.props;
            var12 = var1.wrapperSpecs;
            var10 = _closure1_slot3;
            var3 = var10.useContext;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var4 = undefined;
            var1 = var7.bind(var4)(var1);
            var1 = var3.bind(var10)(var1);
            var1 = var1.channelId;
            var _closure2_slot0 = var1;
            var1 = _closure1_slot9;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var1 = 8;
            var1 = var8[var1];
            var6 = var3.bind(var4)(var1);
            var1 = var6.useVoicePanelButtonStyles;
            var6 = var1.bind(var6)(var12);
            var1 = 9;
            var1 = var8[var1];
            var13 = var3.bind(var4)(var1);
            var12 = var13.useStateFromStores;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var12.bind(var13)(var3, var1);
            var1 = 10;
            var1 = var8[var1];
            var13 = var7.bind(var4)(var1);
            var1 = null;
            var12 = var1 != var3;
            var1 = 'null channel in VoicePanelScreenshareButton';
            var1 = var13.bind(var4)(var12, var1);
            var1 = 11;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var3 = var1.bind(var4)(var3);
            var7 = var3.isActive;
            var _closure2_slot1 = var7;
            var1 = var3.isFeatureEnabled;
            var _closure2_slot2 = var1;
            var13 = var3.onPress;
            var _closure2_slot3 = var13;
            var12 = var3.imgSource;
            var8 = var10.useCallback;
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var1;
            var3[2] = var13;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var4 = var4[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.track;
                    var3 = _closure1_slot6;
                    var4 = var3.VOICE_PANEL_SCREENSHARE_BUTTON_TAPPED;
                    var3 = {};
                    var7 = 'connected button';
                    var3['source'] = var7;
                    var7 = _closure2_slot1;
                    var3['was_active'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var2)();
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var8.bind(var10)(var2, var3);
            var8 = !var1;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var6.iconFill;
            var13 = var1.color;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var1 = var6.iconFillMuted;
            var13 = var1.color;
case 6:
            if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var1 = var6.iconBg;
            var17 = var1.backgroundColor;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var1 = var6.iconBgSelected;
            var17 = var1.backgroundColor;
case 9:
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var1 = var6.iconFillSelected;
            var13 = var1.color;
case 10:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 13;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['onPress'] = var10;
            var1['disabled'] = var8;
            var1['props'] = var5;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 14;
            var10 = var15[var5];
            var10 = var8.bind(var4)(var10);
            var14 = var10.intl;
            var10 = var14.string;
            var5 = var15[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.t;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5 = var8.fjBNo1;
            var5 = var10.bind(var14)(var5);
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var8 = var8.CpkXwZ;
            var5 = var10.bind(var14)(var8);
case 14:
            var1['accessibilityLabel'] = var5;
            var5 = undefined;
            if(!var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = var6.iconBgSelected;
case 15:
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 15;
            var5 = var10[var6];
            var14 = var7.bind(var4)(var5);
            var5 = {};
            var16 = var11.circle;
            var15 = new Array(2);
            var15[0] = var16;
            var16 = {};
            var16['backgroundColor'] = var17;
            var15[1] = var16;
            var5['style'] = var15;
            var14 = var8.bind(var4)(var14, var5);
            var5 = new Array(2);
            var5[0] = var14;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var10 = var11.iconContainer;
            var6['style'] = var10;
            var10 = _closure1_slot4;
            var9 = {};
            var9['source'] = var12;
            var12 = var11.icon;
            var11 = new Array(2);
            var11[0] = var12;
            var12 = {};
            var12['tintColor'] = var13;
            var11[1] = var12;
            var9['style'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
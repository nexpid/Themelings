// app/modules/voice_panel/native/utils/PanelSizeUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var4 = var4.VOICE_PANEL_DRAWER_MAX_WIDTH;
    var _closure1_slot0 = var4;
    var4 = {};
    var5 = 'function getMaxPanelWidth_PanelSizeUtilsTsx1({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeAreaLeft,safeAreaRight:safeAreaRight}){const{VOICE_PANEL_DRAWER_MAX_WIDTH}=this.__closure;return Math.min(windowWidth,connected?windowWidth:Math.min(VOICE_PANEL_DRAWER_MAX_WIDTH,windowWidth-safeAreaLeft-safeAreaRight));}';
    var4['code'] = var5;
    var _closure1_slot1 = var4;
    var4 = function() {
        var1 = function getMaxPanelWidth(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var4 = var1.windowWidth;
                var7 = var1.connected;
                var5 = var1.safeAreaLeft;
                var9 = var1.safeAreaRight;
                var6 = global;
                var3 = var6.Math;
                var2 = var3.min;
                var1 = var4;
                if(var7) { _fun0001_ip = 78; continue _fun0001 }
 46:
                var8 = var6.Math;
                var7 = var8.min;
                var6 = _closure1_slot0;
                var5 = var4 - var5;
                var5 = var5 - var9;
                var1 = var7.bind(var8)(var6, var5);
 78:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot0;
        var3['VOICE_PANEL_DRAWER_MAX_WIDTH'] = var4;
        var1['__closure'] = var3;
        var3 = 6813992446153.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot1;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var5 = {};
    var8 = 'function getPanelX_PanelSizeUtilsTsx2(windowWidth,width){return(windowWidth-width)/2;}';
    var5['code'] = var8;
    var _closure1_slot2 = var5;
    var2 = function() {
        var1 = function getPanelX(arg1, arg2) {
            var2 = arg1;
            var1 = arg2;
            var2 = var2 - var1;
            var1 = 2;
            var1 = var2 / var1;
            return var1;
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 6050807520832.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot2;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/utils/PanelSizeUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getMaxPanelWidth'] = var4;
    var3['getPanelX'] = var2;
    return var1;
})();
// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function useCallActivityData(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 8;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var7 = _closure1_slot3;
        var3 = new Array(3);
        var3[0] = var7;
        var7 = _closure1_slot4;
        var3[1] = var7;
        var2 = _closure1_slot5;
        var3[2] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                var3 = null;
                if(!(var3 != var1)) { _fun0001_ip = 169; continue _fun0001 }
 16:
                var5 = _closure1_slot4;
                var2 = var5.getAllApplicationStreamsForChannel;
                var1 = _closure2_slot0;
                var6 = var2.bind(var5)(var1);
                var1 = var6.length;
                var5 = 0;
                var1 = var1 > var5;
                if(!var1) { _fun0001_ip = 75; continue _fun0001 }
 52:
                var8 = var6.find;
                var2 = function(arg1) {
                    var3 = _closure1_slot5;
                    var2 = var3.isFriend;
                    var1 = arg1;
                    var1 = var1.ownerId;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var8.bind(var6)(var2);
                if(!(var3 == var2)) { _fun0001_ip = 160; continue _fun0001 }
 75:
                var9 = _closure1_slot3;
                var8 = var9.getEmbeddedActivitiesForChannel;
                var7 = _closure2_slot0;
                var8 = var8.bind(var9)(var7);
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var7 = undefined;
                var4 = var9.bind(var7)(var4);
                var4 = var4.bind(var7)(var8);
                if(!(var3 == var4)) { _fun0001_ip = 148; continue _fun0001 }
 125:
                if(var1) { _fun0001_ip = 132; continue _fun0001 }
 128:
                var1 = {};
                _fun0001_ip = 146; continue _fun0001;
 132:
                var3 = {};
                var5 = var6[var5];
                var3['stream'] = var5;
                var1 = var3;
 146:
                _fun0001_ip = 158; continue _fun0001;
 148:
                var3 = {};
                var3['activity'] = var4;
                var1 = var3;
 158:
                return var1;
 160:
                var1 = {};
                var1['stream'] = var2;
                return var1;
 169:
                var1 = {};
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = native4;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot6 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function HappeningNowCardUnifiedVC(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var9 = var1.guildId;
            var10 = var1.index;
            var15 = var1.voiceState;
            var7 = var1.fullwidth;
            var13 = var1.userId;
            var12 = var1.cardKey;
            var6 = var1.panelVariant;
            var5 = undefined;
            if(!(var6 === var5)) { _fun0002_ip = 50; continue _fun0002 }
 48:
            var6 = false;
 50:
            var3 = _closure1_slot7;
            var1 = var15.channelId;
            var1 = var3.bind(var5)(var1);
            var8 = var1.stream;
            var14 = var1.activity;
            var1 = null;
            if(!(var1 == var8)) { _fun0002_ip = 220; continue _fun0002 }
 88:
            if(!(var1 == var14)) { _fun0002_ip = 149; continue _fun0002 }
 92:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 7;
            var1 = var11[var1];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['index'] = var10;
            var1['voiceState'] = var15;
            var1['fullwidth'] = var7;
            var1['guildId'] = var9;
            var1['panelVariant'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0002_ip = 218; continue _fun0002;
 149:
            var11 = _closure1_slot6;
            var4 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 6;
            var3 = var16[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['index'] = var10;
            var3['voiceState'] = var15;
            var3['fullwidth'] = var7;
            var3['guildId'] = var9;
            var3['activity'] = var14;
            var3['userId'] = var13;
            var3['cardKey'] = var12;
            var3['panelVariant'] = var6;
            var1 = var11.bind(var5)(var4, var3);
 218:
            _fun0002_ip = 285; continue _fun0002;
 220:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 5;
            var2 = var11[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['index'] = var10;
            var10 = var8.ownerId;
            var2['userId'] = var10;
            var2['guildId'] = var9;
            var2['stream'] = var8;
            var2['fullwidth'] = var7;
            var2['panelVariant'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 285:
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useCallActivityData'] = var2;
    return var1;
})();
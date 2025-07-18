// app/modules/action_sheet/native/components/PublishModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.ActivityIndicator;
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
    var9 = {};
    var10 = 16;
    var9['paddingTop'] = var10;
    var4['alertContainer'] = var9;
    var9 = {'paddingTop': 62, 'paddingBottom': 46};
    var4['alertLoading'] = var9;
    var9 = {'marginBottom': 16, 'fontSize': 16, 'lineHeight': 24};
    var10 = 5;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.DARK_PRIMARY_300_LIGHT_PRIMARY_400;
    var9['color'] = var10;
    var4['alertBodyText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/components/PublishModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PublishModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var1 = _closure1_slot7;
            var4 = undefined;
            var6 = var1.bind(var4)();
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.bind(var4)(var2);
            var2 = _closure1_slot3;
            var1 = 2;
            var3 = var2.bind(var4)(var3, var1);
            var2 = 0;
            var15 = var3[var2];
            var1 = 1;
            var1 = var3[var1];
            if(var1) { _fun0001_ip = 330; continue _fun0001 }
 78:
            var14 = null;
            var3 = var14 == var15;
            var1 = undefined;
            if(var3) { _fun0001_ip = 95; continue _fun0001 }
 89:
            var1 = var15.guildsFollowing;
 95:
            var7 = var14 != var1;
            if(!var7) { _fun0001_ip = 121; continue _fun0001 }
 102:
            var3 = var14 == var15;
            var1 = undefined;
            if(var3) { _fun0001_ip = 117; continue _fun0001 }
 111:
            var1 = var15.guildsFollowing;
 117:
            var7 = var1 > var2;
 121:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var6.alertContainer;
            var1['style'] = var8;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 7;
            var8 = var10[var8];
            var8 = var9.bind(var4)(var8);
            var8 = var8.LegacyText;
            var9 = {};
            var10 = var6.alertBodyText;
            var9['style'] = var10;
            var11 = _closure1_slot0;
            var16 = _closure1_slot2;
            var10 = 8;
            var12 = var16[var10];
            var12 = var11.bind(var4)(var12);
            var13 = var12.intl;
            if(var7) { _fun0001_ip = 248; continue _fun0001 }
 207:
            var12 = var13.string;
            var7 = var16[var10];
            var7 = var11.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.8FpqOj;
            var7 = var12.bind(var13)(var7);
            var9['children'] = var7;
            var7 = var9;
            _fun0001_ip = 312; continue _fun0001;
 248:
            var12 = var13.format;
            var10 = var16[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.t;
            var11 = var10.GCGrND;
            var10 = {};
            var16 = var14 == var15;
            var14 = undefined;
            if(var16) { _fun0001_ip = 292; continue _fun0001 }
 286:
            var14 = var15.guildsFollowing;
 292:
            var10['numGuildsFollowing'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var9['children'] = var10;
            var7 = var9;
 312:
            var7 = var3.bind(var4)(var8, var7);
            var1['children'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 330:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var6.alertLoading;
            var1['style'] = var6;
            var6 = _closure1_slot5;
            var5 = {};
            var7 = true;
            var5['animating'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
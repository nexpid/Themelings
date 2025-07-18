// app/modules/saved_messages/native/ForLaterCardReminderHeader.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'borderTopLeftRadius': null, 'borderTopRightRadius': null, 'overflow': 'hidden', 'gap': 8, 'marginHorizontal': 4294967280, 'marginTop': 4294967280, 'paddingHorizontal': 16, 'paddingVertical': 12};
    var10 = 3;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOBILE_PRIMARY;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9['borderTopLeftRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9['borderTopRightRadius'] = var12;
    var4['container'] = var9;
    var9 = {'width': 24, 'height': 24, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.CARD_PRIMARY_BG;
    var9['backgroundColor'] = var10;
    var4['icon'] = var9;
    var9 = {'marginVertical': 4294967292, 'marginLeft': 'auto'};
    var4['actionsContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/saved_messages/native/ForLaterCardReminderHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForLaterCardReminderHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.savedMessage;
            var8 = var1.throttledNow;
            var9 = var1.actions;
            var1 = _closure1_slot6;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var12 = 4;
            var1 = var1[var12];
            var6 = var3.bind(var5)(var1);
            var4 = var6.useDueInString;
            var3 = {};
            var1 = null;
            var13 = var1 == var2;
            var11 = undefined;
            if(var13) { _fun0001_ip = 85; continue _fun0001 }
 73:
            var13 = var2.saveData;
            var11 = var13.dueAt;
 85:
            var3['dueAt'] = var11;
            var3['now'] = var8;
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var12];
            var8 = var11.bind(var5)(var8);
            var8 = var8.DueInStringTypes;
            var8 = var8.SHORT;
            var3['type'] = var8;
            var3 = var4.bind(var6)(var3);
            var12 = var3.dueInText;
            var3 = var3.isOverdue;
            var2 = var2.saveData;
            var2 = var2.dueAt;
            if(!(var1 != var2)) { _fun0001_ip = 401; continue _fun0001 }
 163:
            var13 = 'header-primary';
            if(!var3) { _fun0001_ip = 178; continue _fun0001 }
 172:
            var13 = 'text-danger';
 178:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 3;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.colors;
            if(var3) { _fun0001_ip = 214; continue _fun0001 }
 206:
            var16 = var2.INTERACTIVE_NORMAL;
            _fun0001_ip = 220; continue _fun0001;
 214:
            var16 = var2.TEXT_DANGER;
 220:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var10.container;
            var2['style'] = var6;
            var8 = _closure1_slot4;
            var6 = {};
            var11 = var10.icon;
            var6['style'] = var11;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 5;
            var7 = var14[var7];
            var7 = var11.bind(var5)(var7);
            var15 = var7.ClockIcon;
            var7 = {};
            var17 = 'xxs';
            var7['size'] = var17;
            var7['color'] = var16;
            var7 = var8.bind(var5)(var15, var7);
            var6['children'] = var7;
            var7 = var8.bind(var5)(var3, var6);
            var6 = new Array(3);
            var6[0] = var7;
            var7 = 6;
            var7 = var14[var7];
            var7 = var11.bind(var5)(var7);
            var11 = var7.Text;
            var7 = {};
            var14 = 'text-md/semibold';
            var7['variant'] = var14;
            var7['color'] = var13;
            var7['children'] = var12;
            var7 = var8.bind(var5)(var11, var7);
            var6[1] = var7;
            var7 = {};
            var10 = var10.actionsContainer;
            var7['style'] = var10;
            var7['children'] = var9;
            var7 = var8.bind(var5)(var3, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 401:
            return var1;
        }
    };
    var3['ForLaterCardReminderHeader'] = var2;
    return var1;
})();
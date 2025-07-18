// app/modules/user_profile/native/UserProfileNote.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'space-between';
    var9['justifyContent'] = var10;
    var4['title'] = var9;
    var9 = {};
    var10 = 4;
    var9['marginBottom'] = var10;
    var4['heading'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileNote.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileNote(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.userId;
            var _closure2_slot0 = var2;
            var14 = var1.style;
            var1 = var1.onBack;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot4;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 3;
            var1 = var6[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useUserProfileAnalyticsContext;
            var1 = var1.bind(var3)();
            var1 = var1.trackUserProfileAction;
            var _closure2_slot2 = var1;
            var3 = _closure1_slot1;
            var1 = 4;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var2);
            var12 = var1.note;
            var6 = null;
            var8 = var6 != var12;
            if(!var8) { _fun0001_ip = 126; continue _fun0001 }
 118:
            var1 = '';
            var8 = var1 !== var12;
 126:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            if(var8) { _fun0001_ip = 157; continue _fun0001 }
 137:
            var1 = 6;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var13 = var1.PaperPlusIcon;
            _fun0001_ip = 175; continue _fun0001;
 157:
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var13 = var1.PaperIcon;
 175:
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 7;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var7 = 'button';
            var1['accessibilityRole'] = var7;
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var17 = 8;
            var15 = var7[var17];
            var15 = var11.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var7 = var7[var17];
            var7 = var11.bind(var4)(var7);
            var11 = var7.t;
            if(var8) { _fun0001_ip = 277; continue _fun0001 }
 262:
            var7 = var11.1ZZttr;
            var7 = var15.bind(var16)(var7);
            _fun0001_ip = 290; continue _fun0001;
 277:
            var11 = var11.gs+qcH;
            var7 = var15.bind(var16)(var11);
 290:
            var1['accessibilityHint'] = var7;
            var7 = var6 != var12;
            var6 = undefined;
            if(!var7) { _fun0001_ip = 307; continue _fun0001 }
 304:
            var6 = var12;
 307:
            var1['accessibilityLabel'] = var6;
            var5 = function onPress() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 9;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.hideActionSheet;
                var2 = var2.bind(var5)();
                var2 = 10;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure2_slot0;
                var2['userId'] = var5;
                var4 = _closure2_slot1;
                var2['onBack'] = var4;
                var4 = function onSave() {
                    var3 = _closure2_slot2;
                    var2 = {};
                    var1 = 'SET_NOTE';
                    var2['action'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onSave'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var7 = _closure1_slot3;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 11;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['style'] = var14;
            var16 = _closure1_slot0;
            var14 = var11[var17];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var11 = var11[var17];
            var11 = var16.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.mQKv+v;
            var11 = var14.bind(var15)(var11);
            var5['title'] = var11;
            var11 = var10.title;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = !var8;
            if(var8) { _fun0001_ip = 432; continue _fun0001 }
 421:
            var14 = {};
            var15 = 0;
            var14['marginBottom'] = var15;
            var11 = var14;
 432:
            var10[1] = var11;
            var5['titleStyle'] = var10;
            var11 = _closure1_slot3;
            var10 = {'size': 'xs', 'color': 'interactive-normal'};
            var10 = var11.bind(var4)(var13, var10);
            var5['titleIcon'] = var10;
            if(!var8) { _fun0001_ip = 526; continue _fun0001 }
 473:
            var11 = _closure1_slot3;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 12;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-md/normal', 'color': 'text-normal'};
            var9['children'] = var12;
            var8 = var11.bind(var4)(var10, var9);
 526:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
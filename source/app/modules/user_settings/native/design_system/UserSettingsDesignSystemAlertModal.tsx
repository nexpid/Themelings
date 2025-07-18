// app/modules/user_settings/native/design_system/UserSettingsDesignSystemAlertModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function DemoModal() {
        var5 = _closure1_slot3;
        var3 = var5.useCallback;
        var2 = _closure1_slot2;
        var4 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 62; continue _fun0001 }
 7:
                    var2 = global;
                    var4 = var2.Promise;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var5 = function(arg1) {
                        var1 = global;
                        var4 = var1.setTimeout;
                        var3 = undefined;
                        var2 = arg1;
                        var1 = 2000;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var6 = var3;
                    var2 = new var6[var4](var5, var4);
                    var2 = var2 instanceof Object ? var2 : var3;
                    SaveGenerator(address=48);
 46:
                    return var2;
 48:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 59; continue _fun0001 }
 54:
                    var3 = undefined;
                    return var3;
 59:
                    return var2;
 62:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var1 = new Array(0);
        var6 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot6;
        var8 = _closure1_slot0;
        var10 = _closure1_slot1;
        var7 = 4;
        var1 = var10[var7];
        var1 = var8.bind(var4)(var1);
        var2 = var1.AlertModal;
        var1 = {'title': 'Are you sure?', 'content': 'This will clear 3 incoming friend requests. The users who sent them won’t be informed.'};
        var13 = _closure1_slot6;
        var5 = var10[var7];
        var5 = var8.bind(var4)(var5);
        var12 = var5.AlertActionButton;
        var11 = {'variant': 'destructive', 'onPress': null, 'text': 'Clear'};
        var11['onPress'] = var6;
        var5 = 'clear';
        var11 = var13.bind(var4)(var12, var11, var5);
        var5 = new Array(2);
        var5[0] = var11;
        var9 = _closure1_slot6;
        var7 = var10[var7];
        var7 = var8.bind(var4)(var7);
        var8 = var7.AlertActionButton;
        var7 = {'variant': 'secondary', 'onPress': null, 'text': 'Cancel'};
        var7['onPress'] = var6;
        var6 = 'cancel';
        var6 = var9.bind(var4)(var8, var7, var6);
        var5[1] = var6;
        var1['actions'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function openDemoModal() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.openAlert;
        var6 = _closure1_slot6;
        var3 = _closure1_slot8;
        var2 = {};
        var3 = var6.bind(var1)(var3, var2);
        var2 = 'demo-1';
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'padding': 16, 'flex': 1, 'alignItems': 'center'};
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/design_system/UserSettingsDesignSystemAlertModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSettingsDesignSystemAlertModal() {
        var1 = _closure1_slot7;
        var4 = undefined;
        var7 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var2 = _closure1_slot5;
        var1 = {};
        var6 = _closure1_slot4;
        var5 = {};
        var7 = var7.container;
        var5['style'] = var7;
        var9 = _closure1_slot6;
        var8 = _closure1_slot0;
        var11 = _closure1_slot1;
        var7 = 7;
        var7 = var11[var7];
        var7 = var8.bind(var4)(var7);
        var8 = var7.Button;
        var7 = {};
        var10 = _closure1_slot9;
        var7['onPress'] = var10;
        var10 = 'Show Alert';
        var7['text'] = var10;
        var7 = var9.bind(var4)(var8, var7);
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
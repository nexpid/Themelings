// app/modules/instant_invite/native/components/InviteButton.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteSendStates;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'minWidth': 66, 'flexDirection': 'row'};
    var4['buttonWrapper'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.sendState;
            var7 = var1.disabled;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 22; continue _fun0001 }
 20:
            var7 = false;
 22:
            var9 = var1.onPressSend;
            var1 = _closure1_slot5;
            var6 = var1.bind(var4)();
            var10 = _closure1_slot0;
            var1 = _closure1_slot1;
            var12 = 5;
            var3 = var1[var12];
            var3 = var10.bind(var4)(var3);
            var8 = var3.intl;
            var3 = var8.string;
            var1 = var1[var12];
            var1 = var10.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.jYnGPD;
            var1 = var3.bind(var8)(var1);
            var1 = _closure1_slot3;
            var1 = var1.SENDING;
            if(!(var1 !== var2)) { _fun0001_ip = 321; continue _fun0001 }
 111:
            var1 = _closure1_slot3;
            var1 = var1.SENT;
            if(!(var1 !== var2)) { _fun0001_ip = 261; continue _fun0001 }
 128:
            var1 = _closure1_slot3;
            var1 = var1.ERROR;
            if(!(var1 !== var2)) { _fun0001_ip = 201; continue _fun0001 }
 142:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var2 = var1[var12];
            var2 = var8.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var12];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.jYnGPD;
            var10 = var2.bind(var3)(var1);
            var8 = false;
            _fun0001_ip = 377; continue _fun0001;
 201:
            var11 = _closure1_slot0;
            var1 = _closure1_slot1;
            var2 = var1[var12];
            var2 = var11.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var12];
            var1 = var11.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.wNcfpa;
            var10 = var2.bind(var3)(var1);
            var8 = false;
            var7 = false;
            _fun0001_ip = 377; continue _fun0001;
 261:
            var11 = _closure1_slot0;
            var1 = _closure1_slot1;
            var2 = var1[var12];
            var2 = var11.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var12];
            var1 = var11.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.dVT14+;
            var10 = var2.bind(var3)(var1);
            var8 = false;
            var7 = true;
            _fun0001_ip = 377; continue _fun0001;
 321:
            var11 = _closure1_slot0;
            var1 = _closure1_slot1;
            var2 = var1[var12];
            var2 = var11.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var12];
            var1 = var11.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.jYnGPD;
            var10 = var2.bind(var3)(var1);
            var8 = true;
            var7 = false;
 377:
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {};
            var6 = var6.buttonWrapper;
            var1['style'] = var6;
            var6 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 6;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Button;
            var5 = {'accessibilityRole': 'none', 'size': 'sm', 'variant': 'secondary'};
            var5['text'] = var10;
            var5['onPress'] = var9;
            if(var7) { _fun0001_ip = 451; continue _fun0001 }
 448:
            var7 = var8;
 451:
            var5['disabled'] = var7;
            var7 = true;
            var5['grow'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/native/components/InviteButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
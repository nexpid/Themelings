// app/modules/guild_scheduled_events/native/components/DeleteEventAlert.tsx
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
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'center';
    var9['textAlign'] = var10;
    var4['contentText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/DeleteEventAlert.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DeleteEventAlert(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.eventId;
            var _closure2_slot0 = var1;
            var1 = var2.guildId;
            var _closure2_slot1 = var1;
            var1 = var2.recurrenceId;
            var _closure2_slot2 = var1;
            var2 = var2.eventException;
            var _closure2_slot3 = var2;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var2 = function _handleConfirmClick() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 153; continue _fun0002 }
 10:
                            var5 = _closure2_slot4;
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 6;
                            var6 = var6[var3];
                            var3 = undefined;
                            var9 = var7.bind(var3)(var6);
                            if(var5) { _fun0002_ip = 78; continue _fun0002 }
 45:
                            var7 = var9.deleteGuildEvent;
                            var6 = _closure2_slot0;
                            var5 = _closure2_slot1;
                            var5 = var7.bind(var9)(var6, var5);
                            SaveGenerator(address=69);
 67:
                            return var5;
 69:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(!var6) { _fun0002_ip = 117; continue _fun0002 }
 75:
                            return var5;
 78:
                            var8 = var9.deleteRecurrence;
                            var13 = _closure2_slot1;
                            var12 = _closure2_slot0;
                            var11 = _closure2_slot2;
                            var10 = _closure2_slot3;
                            var14 = var9;
                            var2 = var14[var8](var13, var12, var11, var10, var9);
                            SaveGenerator(address=111);
 109:
                            return var2;
 111:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 150; continue _fun0002 }
 117:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 7;
                            var4 = var6[var4];
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.hideActionSheet;
                            var4 = var4.bind(var5)();
                            return var3;
 150:
                            return var2;
 153:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot5 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot5 = var2;
            var2 = _closure1_slot6;
            var17 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getGuildScheduledEvent;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var5.bind(var7)(var3, var2);
            var9 = null;
            var5 = var9 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 139; continue _fun0001 }
 133:
            var2 = var3.recurrence_rule;
 139:
            var11 = var9 != var2;
            var5 = var9 != var1;
            _closure2_slot4 = var5;
            var3 = _closure1_slot5;
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 8;
            var1 = var8[var7];
            var1 = var15.bind(var4)(var1);
            var2 = var1.AlertModal;
            var1 = {};
            var14 = _closure1_slot0;
            var10 = _closure1_slot2;
            var13 = 9;
            var16 = var10[var13];
            var16 = var14.bind(var4)(var16);
            var18 = var16.intl;
            var16 = var18.string;
            var10 = var10[var13];
            var10 = var14.bind(var4)(var10);
            var14 = var10.t;
            if(var5) { _fun0001_ip = 259; continue _fun0001 }
 230:
            if(var11) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var10 = var14.B9sJLS;
            var10 = var16.bind(var18)(var10);
            _fun0001_ip = 257; continue _fun0001;
 246:
            var19 = var14.wr33ra;
            var10 = var16.bind(var18)(var19);
 257:
            _fun0001_ip = 270; continue _fun0001;
 259:
            var14 = var14.tqCll5;
            var10 = var16.bind(var18)(var14);
 270:
            var1['title'] = var10;
            var10 = var8[var13];
            var10 = var15.bind(var4)(var10);
            var14 = var10.intl;
            var10 = var14.string;
            var8 = var8[var13];
            var8 = var15.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.v2GWNT;
            var8 = var10.bind(var14)(var8);
            var1['content'] = var8;
            var8 = null;
            if(!var11) { _fun0001_ip = 446; continue _fun0001 }
 329:
            var8 = null;
            if(var5) { _fun0001_ip = 446; continue _fun0001 }
 334:
            var14 = _closure1_slot5;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 10;
            var9 = var15[var9];
            var9 = var16.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-md/medium', 'color': 'header-secondary'};
            var17 = var17.contentText;
            var9['style'] = var17;
            var17 = var15[var13];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var15 = var15[var13];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.ZcpcyM;
            var15 = {};
            var15 = var17.bind(var18)(var16, var15);
            var9['children'] = var15;
            var8 = var14.bind(var4)(var10, var9);
 446:
            var1['extraContent'] = var8;
            var10 = _closure1_slot5;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var7];
            var8 = var9.bind(var4)(var8);
            var9 = var8.AlertActionButton;
            var8 = {};
            var14 = 'destructive';
            var8['variant'] = var14;
            var12 = function handleConfirmClick() {
                var1 = undefined;
                var4 = _closure2_slot5;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var8['onPress'] = var12;
            if(!var11) { _fun0001_ip = 563; continue _fun0001 }
 504:
            if(var5) { _fun0001_ip = 563; continue _fun0001 }
 507:
            var14 = _closure1_slot0;
            var5 = _closure1_slot2;
            var11 = var5[var13];
            var11 = var14.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var5 = var5[var13];
            var5 = var14.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.8ZsNv7;
            var5 = var11.bind(var12)(var5);
            _fun0001_ip = 615; continue _fun0001;
 563:
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = var11[var13];
            var12 = var15.bind(var4)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var11 = var11[var13];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.B9sJLS;
            var5 = var12.bind(var14)(var11);
 615:
            var8['text'] = var5;
            var5 = 'delete';
            var8 = var10.bind(var4)(var9, var8, var5);
            var5 = new Array(2);
            var5[0] = var8;
            var9 = _closure1_slot5;
            var12 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = var6[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.AlertActionButton;
            var7 = {};
            var10 = 'secondary';
            var7['variant'] = var10;
            var10 = var6[var13];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var6 = var6[var13];
            var6 = var12.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.oEAioK;
            var6 = var10.bind(var11)(var6);
            var7['text'] = var6;
            var6 = 'cancel';
            var6 = var9.bind(var4)(var8, var7, var6);
            var5[1] = var6;
            var1['actions'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
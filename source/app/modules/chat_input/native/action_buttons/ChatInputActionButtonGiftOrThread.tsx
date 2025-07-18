// app/modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function renderChatInputActionButtonGiftAndThread(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg2;
            var13 = var2.canStartThreads;
            var16 = var2.channel;
            var12 = var2.disabled;
            var15 = var2.onPress;
            var _closure2_slot0 = var15;
            var1 = var2.shouldShowThread;
            var9 = var2.styleButton;
            var14 = var2.styleButtonWrapper;
            var5 = _closure1_slot6;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var6 = arg4;
            var2['cleanup'] = var6;
            var6 = arg3;
            var2['state'] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var18 = _closure1_slot2;
            if(var1) { _fun0001_ip = 155; continue _fun0001 }
 109:
            var1 = 9;
            var1 = var18[var1];
            var6 = var7.bind(var4)(var1);
            var1 = {};
            var1['channel'] = var16;
            var1['disabled'] = var12;
            var1['onPress'] = var15;
            var1['style'] = var14;
            var1['styleButton'] = var9;
            var1 = var8.bind(var4)(var6, var1);
            _fun0001_ip = 286; continue _fun0001;
 155:
            var6 = 6;
            var6 = var18[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var17 = _closure1_slot0;
            var14 = 7;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.4WNcpq;
            var14 = var15.bind(var16)(var14);
            var6['accessibilityLabel'] = var14;
            if(var12) { _fun0001_ip = 230; continue _fun0001 }
 227:
            var12 = !var13;
 230:
            var6['disabled'] = var12;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 8;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.ThreadPlusIcon;
            var6['IconComponent'] = var11;
            var10 = function onPress(arg1) {
                var4 = _closure2_slot0;
                var1 = _closure1_slot5;
                var3 = var1.THREAD;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var6['onPress'] = var10;
            var6['style'] = var9;
            var1 = var8.bind(var4)(var7, var6);
 286:
            var2['children'] = var1;
            var1 = arg1;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getChatInputActionButtonGiftAndThreadKey(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.shouldShowThread;
            var1 = 'gift';
            if(!var2) { _fun0002_ip = 20; continue _fun0002 }
 16:
            var1 = 'thread';
 20:
            return var1;
        }
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
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.CHAT_INPUT_ACTION_BUTTON_SIZE;
    var12 = var4.CHAT_INPUT_ACTION_BUTTON_WIDTH;
    var4 = var4.ChatInputActionType;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['width'] = var12;
    var10['height'] = var11;
    var4['container'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function ChatInputActionButtonGiftOrThread(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var2 = _closure1_slot7;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var6 = _closure1_slot3;
        var3 = var6.useMemo;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() {
            var2 = _closure2_slot0;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var9 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot6;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var5.container;
        var1['style'] = var5;
        var7 = _closure1_slot6;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 10;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.TransitionGroup;
        var5 = {};
        var5['items'] = var9;
        var9 = _closure1_slot8;
        var5['renderItem'] = var9;
        var8 = _closure1_slot9;
        var5['getItemKey'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
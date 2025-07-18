// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot5 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginTop': 2, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['cardDetails'] = var9;
    var9 = {};
    var9['marginRight'] = var11;
    var4['cardDetailsIcon'] = var9;
    var9 = {};
    var11 = 6;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_NORMAL;
    var9['color'] = var11;
    var4['cardDetailsIconColor'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var4['cardDetailsText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function HappeningNowVoiceCardSubtitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var2 = var2.voiceState;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot7;
            var4 = undefined;
            var8 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 7;
            var2 = var10[var2];
            var5 = var6.bind(var4)(var2);
            var3 = var5.useStateFromStores;
            var7 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var3.bind(var5)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var7 = var1.bind(var4)(var11);
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var8.cardDetails;
            var1['style'] = var5;
            var5 = 9;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.HappeningNowCardSubtitle;
            var5 = {};
            var8 = var8.cardDetailsText;
            var5['style'] = var8;
            var8 = 1;
            var5['lineClamp'] = var8;
            var8 = null;
            var10 = var8 != var11;
            var8 = undefined;
            if(!var10) { _fun0001_ip = 199; continue _fun0001 }
 168:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 10;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['channel'] = var11;
            var8 = var10.bind(var4)(var9);
 199:
            var5['accessibilityLabel'] = var8;
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowVoiceCardSubtitle'] = var4;
    var2 = function HappeningNowActivityCardSubtitle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.activity;
            var5 = var1.stream;
            var2 = _closure1_slot7;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var2 = null;
            if(!(var2 != var3)) { _fun0002_ip = 56; continue _fun0002 }
 34:
            var8 = var3.type;
            var7 = _closure1_slot5;
            var7 = var7.CUSTOM_STATUS;
            if(!(var8 !== var7)) { _fun0002_ip = 349; continue _fun0002 }
 56:
            if(!(var2 == var5)) { _fun0002_ip = 259; continue _fun0002 }
 63:
            var7 = var2 == var3;
            var5 = undefined;
            if(var7) { _fun0002_ip = 77; continue _fun0002 }
 72:
            var5 = var3.name;
 77:
            var7 = var2 == var5;
            var5 = null;
            if(var7) { _fun0002_ip = 257; continue _fun0002 }
 89:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 12;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.bind(var4)(var3);
            if(var7) { _fun0002_ip = 214; continue _fun0002 }
 117:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 13;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var7 = var7.bind(var4)(var3);
            if(!var7) { _fun0002_ip = 164; continue _fun0002 }
 145:
            var7 = var3.details;
            if(!(var2 != var7)) { _fun0002_ip = 164; continue _fun0002 }
 155:
            var7 = var3.state;
            if(!(var2 == var7)) { _fun0002_ip = 171; continue _fun0002 }
 164:
            var7 = var3.name;
            _fun0002_ip = 212; continue _fun0002;
 171:
            var12 = var3.details;
            var11 = var3.state;
            var8 = global;
            var8 = var8.HermesInternal;
            var10 = var8.concat;
            var9 = '';
            var8 = ' - ';
            var7 = var10.bind(var9)(var12, var8, var11);
 212:
            _fun0002_ip = 254; continue _fun0002;
 214:
            var8 = var3.details;
            if(!(var2 != var8)) { _fun0002_ip = 238; continue _fun0002 }
 224:
            var9 = var3.details;
            var8 = '';
            if(!(var8 === var9)) { _fun0002_ip = 245; continue _fun0002 }
 238:
            var8 = var3.name;
            _fun0002_ip = 251; continue _fun0002;
 245:
            var8 = var3.details;
 251:
            var7 = var8;
 254:
            var5 = var7;
 257:
            _fun0002_ip = 347; continue _fun0002;
 259:
            if(!(var2 != var3)) { _fun0002_ip = 289; continue _fun0002 }
 263:
            var8 = var3.type;
            var7 = _closure1_slot5;
            var7 = var7.PLAYING;
            if(!(var8 === var7)) { _fun0002_ip = 289; continue _fun0002 }
 282:
            var7 = var3.name;
            _fun0002_ip = 344; continue _fun0002;
 289:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 11;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.eXan7O;
            var7 = var9.bind(var10)(var8);
 344:
            var5 = var7;
 347:
            _fun0002_ip = 381; continue _fun0002;
 349:
            var7 = var3.state;
            var7 = var2 != var7;
            var2 = null;
            if(!var7) { _fun0002_ip = 378; continue _fun0002 }
 363:
            var7 = var3.state;
            var3 = var7.trim;
            var2 = var3.bind(var7)();
 378:
            var5 = var2;
 381:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.HappeningNowCardSubtitle;
            var1 = {};
            var6 = var6.cardDetailsText;
            var1['style'] = var6;
            var6 = 1;
            var1['lineClamp'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowActivityCardSubtitle'] = var2;
    return var1;
})();
// app/modules/oauth2/native/ApplicationDetails.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ApplicationDetailsEntry(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.iconComponent;
            var9 = var1.text;
            var1 = _closure1_slot6;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var10.entry;
            var1['style'] = var5;
            var7 = null;
            var5 = var7 != var8;
            if(!var5) { _fun0001_ip = 73; continue _fun0001 }
 56:
            var5 = {};
            var11 = var10.entryIcon;
            var5['style'] = var11;
            var7 = var8.bind(var4)(var5);
 73:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot4;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 18;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            var10 = var10.entryText;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'column', 'gap': 16};
    var4['applicationDetails'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    var4['entry'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['entryText'] = var9;
    var9 = {'width': 16, 'height': 16};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var9['tintColor'] = var10;
    var4['entryIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/ApplicationDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ApplicationDetails(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var19 = var2.application;
            var10 = var2.scopes;
            var7 = var2.redirectUri;
            var1 = var7;
            var18 = var2.approximateGuildCount;
            var3 = var2.isEmbeddedFlow;
            var9 = var2.disclosures;
            var4 = undefined;
            var20 = undefined;
            var2 = _closure1_slot6;
            var5 = var2.bind(var4)();
            var2 = global;
            var13 = var2.Date;
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 8;
            var6 = var11[var6];
            var14 = var8.bind(var4)(var6);
            var8 = var14.extractTimestamp;
            var6 = var19.id;
            var24 = var8.bind(var14)(var6);
            var8 = var13.prototype;
            var8 = Object.create(var8, {constructor: {value: var13}});
            var25 = var8;
            var6 = new var25[var13](var24, var23);
            var22 = var6 instanceof Object ? var6 : var8;
            var8 = _closure1_slot0;
            var6 = 9;
            var6 = var11[var6];
            var8 = var8.bind(var4)(var6);
            var6 = var8.getSecurityMessage;
            var11 = var6.bind(var8)(var10);
            var6 = null;
            var20 = null;
            if(!(var6 != var7)) { _fun0002_ip = 240; continue _fun0002 }
 155:
            if(var3) { _fun0002_ip = 240; continue _fun0002 }
 158: // try_start_0
            var7 = var2.URL;
            var24 = var1;
            var3 = var7.prototype;
            var3 = Object.create(var3, {constructor: {value: var7}});
            var25 = var3;
            var2 = new var25[var7](var24, var23);
            var2 = var2 instanceof Object ? var2 : var3;
            var3 = var2.href;
            var2 = var3.split;
            var7 = '/';
            var13 = var2.bind(var3)(var7);
            var8 = var13.slice;
            var3 = 0;
            var2 = 3;
            var3 = var8.bind(var13)(var3, var2);
            var2 = var3.join;
            var20 = var2.bind(var3)(var7);
 233: // try_end0
            _fun0002_ip = 240; continue _fun0002;
 235: // catch_target0
            CatchBlockStart(arg_register=1);
            var20 = var1;
 240:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var5.applicationDetails;
            var1['style'] = var5;
            var5 = var20;
            var5 = var6 != var5;
            var7 = null;
            if(!var5) { _fun0002_ip = 380; continue _fun0002 }
 272:
            var13 = _closure1_slot4;
            var8 = _closure1_slot7;
            var5 = {};
            var15 = _closure1_slot0;
            var21 = _closure1_slot2;
            var14 = 10;
            var14 = var21[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.LinkIcon;
            var5['iconComponent'] = var14;
            var14 = 11;
            var16 = var21[var14];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var14 = var21[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.5k5OKC;
            var14 = {};
            var14['origin'] = var20;
            var14 = var16.bind(var17)(var15, var14);
            var5['text'] = var14;
            var7 = var13.bind(var4)(var8, var5);
 380:
            var5 = new Array(6);
            var5[0] = var7;
            var8 = _closure1_slot4;
            var15 = _closure1_slot7;
            var7 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var16 = 12;
            var16 = var14[var16];
            var16 = var13.bind(var4)(var16);
            var16 = var16.LockIcon;
            var7['iconComponent'] = var16;
            var16 = 13;
            var16 = var14[var16];
            var17 = var13.bind(var4)(var16);
            var16 = var17.getApplicationDetailsText;
            var16 = var16.bind(var17)(var19);
            var7['text'] = var16;
            var7 = var8.bind(var4)(var15, var7);
            var5[1] = var7;
            var8 = _closure1_slot4;
            var7 = {};
            var16 = 14;
            var16 = var14[var16];
            var16 = var13.bind(var4)(var16);
            var16 = var16.ClockIcon;
            var7['iconComponent'] = var16;
            var19 = 11;
            var16 = var14[var19];
            var16 = var13.bind(var4)(var16);
            var21 = var16.intl;
            var20 = var21.formatToPlainString;
            var16 = var14[var19];
            var16 = var13.bind(var4)(var16);
            var16 = var16.t;
            var17 = var16.+1bjc3;
            var16 = {};
            var16['date'] = var22;
            var16 = var20.bind(var21)(var17, var16);
            var7['text'] = var16;
            var7 = var8.bind(var4)(var15, var7);
            var5[2] = var7;
            var8 = var10.includes;
            var7 = 15;
            var7 = var14[var7];
            var7 = var13.bind(var4)(var7);
            var7 = var7.OAuth2Scopes;
            var7 = var7.BOT;
            var8 = var8.bind(var10)(var7);
            var7 = null;
            if(!var8) { _fun0002_ip = 719; continue _fun0002 }
 605:
            var8 = var6 != var18;
            var7 = null;
            if(!var8) { _fun0002_ip = 719; continue _fun0002 }
 614:
            var13 = _closure1_slot4;
            var10 = _closure1_slot7;
            var8 = {};
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var16 = 16;
            var16 = var14[var16];
            var16 = var15.bind(var4)(var16);
            var16 = var16.RobotIcon;
            var8['iconComponent'] = var16;
            var16 = var14[var19];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var14 = var14[var19];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14.UHGHSE;
            var14 = {};
            var14['guildCount'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var8['text'] = var14;
            var7 = var13.bind(var4)(var10, var8);
 719:
            var5[3] = var7;
            var10 = _closure1_slot4;
            var8 = _closure1_slot7;
            var7 = {};
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 17;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.ShieldIcon;
            var7['iconComponent'] = var12;
            var7['text'] = var11;
            var7 = var10.bind(var4)(var8, var7);
            var5[4] = var7;
            var7 = var6 != var9;
            var6 = null;
            if(!var7) { _fun0002_ip = 804; continue _fun0002 }
 787:
            var8 = var9.map;
            var7 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var7 = arg1;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var4 = 5;
                    var5 = var1[var4];
                    var6 = undefined;
                    var8 = var2.bind(var6)(var5);
                    var5 = var8.getTextForDisclosure;
                    var8 = var5.bind(var8)(var7);
                    var1 = var1[var4];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.ApplicationDisclosure;
                    var1 = var1.IP_LOCATION;
                    if(!(var1 !== var7)) { _fun0003_ip = 137; continue _fun0003 }
 64:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var4];
                    var1 = var2.bind(var6)(var1);
                    var1 = var1.ApplicationDisclosure;
                    var1 = var1.DISPLAYS_ADVERTISEMENTS;
                    var2 = null;
                    if(!(var1 === var7)) { _fun0003_ip = 173; continue _fun0003 }
 99:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 7;
                    var4 = var9[var4];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.EmbedIcon;
                    var1['iconComponent'] = var4;
                    var2 = var1;
                    _fun0003_ip = 173; continue _fun0003;
 137:
                    var1 = {};
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 6;
                    var4 = var9[var4];
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.GlobeEarthIcon;
                    var1['iconComponent'] = var4;
                    var2 = var1;
 173:
                    var5 = null;
                    var4 = var5 != var2;
                    var1 = null;
                    if(!var4) { _fun0003_ip = 234; continue _fun0003 }
 184:
                    var4 = var5 != var8;
                    var1 = null;
                    if(!var4) { _fun0003_ip = 234; continue _fun0003 }
 193:
                    var5 = _closure1_slot4;
                    var4 = _closure1_slot7;
                    var3 = {};
                    var3['text'] = var8;
                    var12 = var3;
                    var11 = var2;
                    var2 = copyDataProperties(var12, var11);
                    var2 = var7.toFixed;
                    var2 = var2.bind(var7)();
                    var1 = var5.bind(var6)(var4, var3, var2);
 234:
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var7);
 804:
            var5[5] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
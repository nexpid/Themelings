// app/modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
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
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.BANNER_HEIGHT;
    var _closure1_slot6 = var8;
    var4 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'width': '100%', 'height': '100%'};
    var4['imageContainer'] = var10;
    var10 = {'width': '100%', 'height': '100%'};
    var4['image'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = var2.applicationId;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var5 = undefined;
            var8 = var4.bind(var5)(var3);
            var3 = var8.useRequiredAppLauncherContext;
            var3 = var3.bind(var8)();
            var9 = var3.width;
            var3 = 7;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var4 = var8.useHeroMediaDimensions;
            var3 = {};
            var3['width'] = var9;
            var8 = var4.bind(var8)(var3);
            var _closure2_slot0 = var8;
            var4 = _closure1_slot1;
            var3 = 8;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['applicationId'] = var6;
            var6 = var8.width;
            var3['size'] = var6;
            var6 = ['embedded_cover'];
            var3['names'] = var6;
            var7 = var4.bind(var5)(var3);
            var _closure2_slot1 = var7;
            var6 = _closure1_slot3;
            var4 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = {};
                    var2 = {};
                    var3 = 'black';
                    var2['backgroundColor'] = var3;
                    var3 = _closure2_slot0;
                    var5 = var3.height;
                    var2['height'] = var5;
                    var5 = var3.width;
                    var2['width'] = var5;
                    var5 = {};
                    var6 = _closure1_slot6;
                    var3 = var3.height;
                    var6 = var6 - var3;
                    var3 = 2;
                    var3 = var6 / var3;
                    var5['translateY'] = var3;
                    var3 = new Array(1);
                    var3[0] = var5;
                    var2['transform'] = var3;
                    var1['imageStyle'] = var2;
                    var2 = _closure2_slot1;
                    var3 = var2.url;
                    var2 = null;
                    var3 = var2 != var3;
                    var2 = undefined;
                    if(!var3) { _fun0002_ip = 123; continue _fun0002 }
 104:
                    var3 = {};
                    var4 = _closure2_slot1;
                    var4 = var4.url;
                    var3['uri'] = var4;
                    var2 = var3;
 123:
                    var1['imageSource'] = var2;
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1, var3);
            var7 = var1.imageStyle;
            var6 = var1.imageSource;
            var1 = null;
            if(!(var1 == var6)) { _fun0001_ip = 211; continue _fun0001 }
 189:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var1 = {};
            var1['style'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 260; continue _fun0001;
 211:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['style'] = var7;
            var2['source'] = var6;
            var6 = 'cover';
            var2['resizeMode'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 260:
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot10 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var7 = var1.applicationBot;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var3 = null;
            var6 = var3 == var7;
            var1 = undefined;
            if(var6) { _fun0003_ip = 50; continue _fun0003 }
 45:
            var1 = var7.id;
 50:
            if(!(var3 == var1)) { _fun0003_ip = 58; continue _fun0003 }
 54:
            var1 = _closure1_slot7;
 58:
            var6 = var2.bind(var4)(var1);
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 11;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['displayProfile'] = var6;
            var5 = _closure1_slot5;
            var6 = var5.prototype;
            var6 = Object.create(var6, {constructor: {value: var5}});
            var11 = var6;
            var10 = var7;
            var5 = new var11[var5](var10, var9);
            var5 = var5 instanceof Object ? var5 : var6;
            var1['user'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function RecommendationBanner(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var2 = var1.applicationEmbedded;
            var7 = var1.applicationId;
            var13 = var1.applicationIcon;
            var10 = var1.applicationBot;
            var9 = var1.overrideImageUrl;
            var1 = _closure1_slot9;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 12;
            var1 = var4[var1];
            var12 = var3.bind(var5)(var1);
            var11 = var12.getApplicationIconSource;
            var1 = {};
            var1['id'] = var7;
            var1['icon'] = var13;
            var1['bot'] = var10;
            var13 = true;
            var1['botIconFirst'] = var13;
            var11 = var11.bind(var12)(var1);
            var1 = 13;
            var1 = var4[var1];
            var4 = var3.bind(var5)(var1);
            var12 = 'number';
            var1 = typeof var11;
            var3 = var11;
            if(!(var12 !== var1)) { _fun0004_ip = 144; continue _fun0004 }
 124:
            var1 = null;
            var12 = var1 == var11;
            var1 = undefined;
            if(var12) { _fun0004_ip = 141; continue _fun0004 }
 135:
            var1 = var11.uri;
 141:
            var3 = var1;
 144:
            var1 = '';
            var11 = var4.bind(var5)(var3, var1);
            var1 = null;
            if(!(var1 == var9)) { _fun0004_ip = 240; continue _fun0004 }
 160:
            if(var2) { _fun0004_ip = 218; continue _fun0004 }
 163:
            if(!(var1 == var10)) { _fun0004_ip = 195; continue _fun0004 }
 167:
            var3 = _closure1_slot8;
            var2 = _closure1_slot4;
            var1 = {};
            var4 = {};
            var4['backgroundColor'] = var11;
            var1['style'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0004_ip = 216; continue _fun0004;
 195:
            var4 = _closure1_slot8;
            var3 = _closure1_slot11;
            var2 = {};
            var2['applicationBot'] = var10;
            var1 = var4.bind(var5)(var3, var2);
 216:
            _fun0004_ip = 238; continue _fun0004;
 218:
            var4 = _closure1_slot8;
            var3 = _closure1_slot10;
            var2 = {};
            var2['applicationId'] = var7;
            var1 = var4.bind(var5)(var3, var2);
 238:
            _fun0004_ip = 328; continue _fun0004;
 240:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var7 = var8.imageContainer;
            var2['style'] = var7;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 9;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var8 = var8.image;
            var6['style'] = var8;
            var8 = {};
            var8['uri'] = var9;
            var6['source'] = var8;
            var8 = 'cover';
            var6['resizeMode'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 328:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/guild_member_verification/MemberVerificationTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var4 = function isTermsFormField(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.field_type;
            var2 = _closure1_slot0;
            var2 = var2.TERMS;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var8 = {};
    var1 = 'TERMS';
    var8['TERMS'] = var1;
    var1 = 'TEXT_INPUT';
    var8['TEXT_INPUT'] = var1;
    var1 = 'PARAGRAPH';
    var8['PARAGRAPH'] = var1;
    var1 = 'MULTIPLE_CHOICE';
    var8['MULTIPLE_CHOICE'] = var1;
    var1 = 'VERIFICATION';
    var8['VERIFICATION'] = var1;
    var _closure1_slot0 = var8;
    var7 = {};
    var1 = 'email';
    var7['EMAIL'] = var1;
    var1 = 'phone';
    var7['PHONE'] = var1;
    var6 = {};
    var1 = 'NEWEST';
    var6['TIMESTAMP_DESC'] = var1;
    var1 = 'OLDEST';
    var6['TIMESTAMP_ASC'] = var1;
    var5 = {};
    var1 = 'STARTED';
    var5['STARTED'] = var1;
    var1 = 'SUBMITTED';
    var5['SUBMITTED'] = var1;
    var1 = 'REJECTED';
    var5['REJECTED'] = var1;
    var1 = 'APPROVED';
    var5['APPROVED'] = var1;
    var9 = dependencyMap;
    var1 = 0;
    var10 = var9[var1];
    var9 = require;
    var1 = undefined;
    var11 = var9.bind(var1)(var10);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/guild_member_verification/MemberVerificationTypes.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = 25;
    var3['MAX_RESULTS_PER_PAGE'] = var9;
    var9 = 4;
    var3['MAX_VISIBLE_PAGES'] = var9;
    var3['VerificationFormFieldTypes'] = var8;
    var3['UserVerificationFieldPlatforms'] = var7;
    var3['GuildJoinRequestSortOrders'] = var6;
    var3['GuildJoinRequestApplicationStatuses'] = var5;
    var3['isTermsFormField'] = var4;
    var2 = function hasNonTermsFormField(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 3:
            var3 = var4.some;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                var1 = !var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['hasNonTermsFormField'] = var2;
    return var1;
})();
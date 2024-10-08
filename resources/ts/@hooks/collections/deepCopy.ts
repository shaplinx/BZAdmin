const deepCopy = <T>(target: T): T => {
    if (target === null) {
      return target;
    }
    if (target instanceof Date) {
      return new Date(target.getTime()) as any;
    }
    if (target instanceof Array) {
      const cp = [] as any[];
      (target as any[]).forEach((v) => { cp.push(v); });
      return cp.map((n: any) => deepCopy<any>(n)) as any;
    }
    if (typeof target === 'object' && Object.keys(target).length !== 0) {
      const cp = { ...(target as { [key: string]: any }) } as { [key: string]: any };
      Object.keys(cp).forEach(k => {
        cp[k] = deepCopy<any>(cp[k]);
      });
      return cp as T;
    }
    return target;
  };

  export default deepCopy
